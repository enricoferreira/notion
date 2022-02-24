<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" md="8" sm="6" class="dash">
        <v-sheet class="overflow-auto fill-height elevation-0 rounded pl-3 pr-6 py-3 grey lighten-5 mr-2">
          <draggable class="list-group" :list="todos" group="card">
            <!-- Insert -->
            <v-form ref="form-task">
              <v-card :draggable="false" min-height="180" max-height
                class="w-100 mb-4 elevation-4 drag-cursor">
                <v-card-title class="py-2">
                  <v-text-field :rules="[validateTitle]" filled label="Título da task" placeholder="Novo título" dense  v-model="titulo_task">
                  </v-text-field>
                </v-card-title>
                <v-card-text class="text-body-1">
                  <v-textarea label="Descrição" :rules="[validateDesc]" filled dense  placeholder="Descrição da task" v-model="descricao_task">
                  </v-textarea>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="add" color="primary">
                    <v-icon left>mdi-plus</v-icon>
                    Adicionar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-form>

            <!-- Load -->
            <v-card v-for="(todo, index) in todos" :key="index + 'sheet1'" min-height="180" max-height
              class="w-100 mb-4 elevation-4 drag-cursor">
              <v-card-title class="py-2">
                <span :class="todo.is_complete ? 'text-decoration-line-through' : ''">
                  {{todo.titulo}}
                </span>
                <v-spacer></v-spacer>
                <v-switch @change="update(todo.id, todo.is_complete)" dense hide-details :label="todo.is_complete ? 'Finalizado' : 'Aberto'" class="mr-2 mt-0" v-model="todo.is_complete"></v-switch>
                <v-btn x-small fab elevation="0" @click="abrirAddTag(todo.id)">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                <v-btn class="ml-2" x-small fab elevation="0" @click="abrirOpcoes">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                <v-btn @click="remove(todo.id)" class="ml-2" color="error" x-small fab elevation="0">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-card-title>
              <v-card-text class="text-body-1" :class="todo.is_complete ? 'text-decoration-line-through' : ''">
                <strong class="pointer">
                  #{{todo.id}}
                </strong>
                {{todo.descricao}}
              </v-card-text>
            </v-card>
          </draggable>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import draggable from 'vuedraggable';
import {db} from '@/firebase'

  export default {
    components: {
      draggable
    },
    data(){
      return{
        active_add_tag: false,
        descricao_task: '',
        titulo_task: '',
        todos: [],
      }
    },
    methods: {
      abrirAddTag(){
        this.active_add_tag = true;
      },
      abrirOpcoes(){

      },
      validateTitle(e){
        if(e == ''){
          return 'Título não pode ser vazio!'
        }
        return true
      },
      validateDesc(e){
        if(e == ''){
          return 'Descrição não pode ser vazio!'
        }
        return true

      },
      async update(id, is_complete){
        this.$store.commit('CHANGE_LOADER', true);
        await this.$store.state.db.collection('todos').doc(id).update({
          is_complete
        })
          .then(() => {
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          })
          .finally(() => {
            this.$store.commit('CHANGE_LOADER', false);
          })
      },
      async remove(id){
        this.$store.commit('CHANGE_LOADER', true);
        await this.$store.state.db.collection('todos').doc(id).delete()
          .then(() => {
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          })
          .finally(() => {
            this.$store.commit('CHANGE_LOADER', false);
          })
      },
      async add(){
        if(this.$refs['form-task'].validate()){
          this.$store.commit('CHANGE_LOADER', true);
          await this.$store.state.db.collection('todos').add({
            descricao: this.descricao_task,
            titulo: this.titulo_task,
            is_complete: false,
            posicao: 2
          })
          .then((doc) => {
            console.log(doc);
            this.descricao_task = '';
            this.titulo_task = '';
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          })
          .finally(() => {
            this.$store.commit('CHANGE_LOADER', false);
            this.$refs['form-task'].reset()
          })
        }
      }
    },
    firestore: {
      todos: db.collection('todos').orderBy('is_complete')
    },
    name: 'Home',
  }
</script>

<style>
.tag{
  width: 30px;
  height: 10px;
  /* background: purple; */
  border-radius: 10px;
}
</style>
