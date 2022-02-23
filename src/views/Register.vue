<template>
    <div class="register container fill-height">
        <v-row class="justify-center align-center">
            <v-col cols="12" md="6">
                <v-form>
                    <v-card elevation="0">
                        <v-card-title class="d-flex justify-center text-h4">
                            Register
                        </v-card-title>
                        <v-card-text>
                            <v-col cols="12">
                                <v-text-field v-model="email" label="E-mail"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="password" label="Senha"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-btn block @click="signup" color="primary">Sign up</v-btn>
                            </v-col>
                            <v-col cols="12" class="px-0 d-flex justify-center">
                                <span class="text-body-1">Já possui uma conta? <span @click="irParaLogin" class="primary--text text-decoration-underline pointer">Clique aqui</span></span>
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
        irParaLogin(){
            this.$router.push({path: '/login'})
        },
        signup(){
            this.$store.commit('CHANGE_LOADER', true);
            this.$store.state.auth.createUserWithEmailAndPassword(this.email, this.password)
                .then((userCredential) => {
                    // Signed in
                    var user = userCredential.user;
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ..
                    console.log(errorCode, errorMessage);
                })
                .finally(() => {
                    this.$store.commit('CHANGE_LOADER', false);
                })
        }
    }
}
</script>

<style>

</style>