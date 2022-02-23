<template>
  <v-app>
    <v-app-bar v-if="$route.path != '/login' && $route.path != '/register'" app color="primary" dark>
      <v-spacer></v-spacer>
      <v-btn text @click="logout">
        <v-icon left>mdi-logout</v-icon>
        Logout
      </v-btn>
    </v-app-bar>

    <Loader v-if="$store.state.loader"/>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Loader from '@/components/Loader';

export default {
  name: 'App',
  components: {
    Loader
  },
  methods:{
    logout(){
      this.$store.state.auth.signOut().then(() => {
        console.log('Usuário deslogado com sucesso!');
        // Sign-out successful.
      }).catch((error) => {
        console.log('Falha ao desloga usuário!', error);
        // An error happened.
      });
    }
  },
  beforeMount(){
    this.$store.state.auth.onAuthStateChanged((user) => {
      if (!user) {
        this.$router.push({
          name: 'Login'
        });
      } else if(this.$route.path == '/login' || this.$route.path == '/register'){
          this.$router.push({
            name: 'Home'
          });
        }
    })
  },
  data: () => ({

  }),
};
</script>
<style>
.pointer{
  cursor: pointer;
}

.w-100{
  width: 100%;
}

.overflow-auto{
  overflow-y: auto !important;
  overflow-x: hidden !important;
}
</style>
