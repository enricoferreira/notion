<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" md="8" sm="6" class="dash">
        <v-sheet class="overflow-auto fill-height elevation-0 rounded pl-3 pr-6 py-3 grey lighten-5 mr-2">
          <draggable class="list-group" :list="todos" group="card">
            <!-- Insert -->
            <v-card :draggable="false" min-height="180" max-height
              class="w-100 mb-4 elevation-4 drag-cursor">
              <v-card-title class="py-2">
                <v-text-field filled label="Título da task" placeholder="Novo título" dense hide-details v-model="titulo_task">
                </v-text-field>
              </v-card-title>
              <v-card-text class="text-body-1">
                <v-textarea label="Descrição" filled dense hide-details placeholder="Descrição da task" v-model="descricao_task">
                </v-textarea>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">
                  <v-icon left>mdi-plus</v-icon>
                  Adicionar
                </v-btn>
              </v-card-actions>
            </v-card>

            <!-- Load -->
            <v-card v-for="(todo, index) in todos" :key="index + 'sheet1'" min-height="180" max-height
              class="w-100 mb-4 elevation-4 drag-cursor">
              <v-card-title class="py-2">
                <span>
                  {{todo.titulo}}
                </span>
                <v-spacer></v-spacer>
                <v-switch dense hide-details label="Aberta" class="mr-2 mt-0" v-model="todo.is_complete"></v-switch>
                <v-btn x-small fab elevation="0">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                <v-btn class="ml-2" color="error" x-small fab elevation="0">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-card-title>
              <v-card-text class="text-body-1">
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
        descricao_task: '',
        titulo_task: '',
        todos: [],
      }
    },
    methods: {
      
    },
    firestore: {
      todos: db.collection('todos')
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
