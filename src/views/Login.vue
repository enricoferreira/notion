<template>
    <div class="login container fill-height">
        <v-row class="justify-center align-center">
            <v-col cols="12" md="6">
                <v-form @submit.prevent="login" @keyup.enter="login">
                    <v-card elevation="0">
                        <v-card-title class="d-flex justify-center text-h4">
                            Login
                        </v-card-title>
                        <v-card-text>
                            <v-col cols="12" sm="12">
                                <v-text-field @keyup.enter="login" v-model="email" type="email" label="E-mail"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12">
                                <v-text-field @keyup.enter="login" v-model="password" label="Senha"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12">
                                <v-btn block @click="login" color="primary">Sign in</v-btn>
                            </v-col>
                            <v-col class="d-flex justify-space-between py-1" sm="12" cols="12">
                                <v-btn color="error" fab text>
                                    <v-icon>mdi-google</v-icon>
                                </v-btn>
                                <v-btn color="blue" fab text>
                                    <v-icon>mdi-facebook</v-icon>
                                </v-btn>
                                <v-btn color="black" fab text>
                                    <v-icon>mdi-github</v-icon>
                                </v-btn>
                            </v-col>
                            <v-col cols="12" class="px-0 d-flex justify-center"  sm="12">
                                <span class="text-body-1">Ainda não tem uma conta? <span @click="irParaRegistro" class="primary--text text-decoration-underline pointer">Clique aqui</span></span>
                            </v-col>
                        </v-card-text>
                    </v-card>
                </v-form>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods:{
        irParaRegistro(){
            this.$router.push({path: '/register'})
        },
        login(){
          this.$store.commit('CHANGE_LOADER', true);
          this.$store.state.auth.signInWithEmailAndPassword(this.email, this.password)
            .then((userCredential) => {
              console.log(userCredential);
            })
            .catch((error) => {
              console.log(error);
            })
            .finally(() =>{
              this.$store.commit('CHANGE_LOADER', false);
            })
        },
    }
}
</script>

<style>

</style>