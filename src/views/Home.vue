<template>
<v-col cols="12" class="dash d-flex">

  <v-col cols="12" md="4" sm="6" class="dash">
    <v-sheet  class="overflow-auto fill-height elevation-0 rounded pl-3 pr-6 py-3 grey lighten-5 mr-2">
      <draggable class="list-group" :list="list1" group="card" @change="log">
        <v-card v-for="(li, index) in list1" :key="index + 'sheet1'" min-height="180" max-height class="w-100 mb-4 elevation-4 drag-cursor" >
          <v-card-title class="py-2">
            <div class="tag" :class="li.tag"></div>
            <v-spacer></v-spacer>
            <v-btn x-small fab elevation="0">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text class="text-body-1">
            <strong class="pointer">
              #{{li.id}}
            </strong>
            {{li.text}}
          </v-card-text>
        </v-card>
      </draggable>
    </v-sheet>
  </v-col>
  <v-col cols="12" md="4" sm="6">

    <v-sheet  class="overflow-auto fill-height elevation-0 rounded pl-3 pr-6 py-3 grey lighten-5 mr-2">
      <draggable class="list-group" :list="list2" group="card" @change="log">
        <v-card v-for="(li, index) in list2" :key="index + 'sheet1'" min-height="180" max-height class="w-100 mb-4 elevation-4 drag-cursor">
          <v-card-title class="py-2">
            <div class="tag" :class="li.tag"></div>
            <v-spacer></v-spacer>
            <v-btn x-small fab elevation="0">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text class="text-body-1">
            <strong class="pointer">
              #{{li.id}}
            </strong>
            {{li.text}}
          </v-card-text>
        </v-card>
      </draggable>
    </v-sheet>
  </v-col>
</v-col>
</template>

<script>
import draggable from 'vuedraggable';

  export default {
    components: {
      draggable
    },
    data(){
      return{
        list1: [
          {
            id: '4123',
            tag: 'blue',
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quas veritatis fugiat beatae mollitia
            numquam totam laborum esse assumenda necessitatibus perspiciatis rem cum`
          },
          {
            id: '444411',
            tag: 'orange',
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quas veritatis fugiat beatae mollitia
            numquam totam laborum esse assumenda necessitatibus perspiciatis rem cum`
          },
          {
            id: '41322123',
            tag: 'blue',
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quas veritatis fugiat beatae mollitia
            numquam totam laborum esse assumenda necessitatibus perspiciatis rem cum`
          },
          {
            id: '121',
            tag: 'purple',
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quas veritatis fugiat beatae mollitia
            numquam totam laborum esse assumenda necessitatibus perspiciatis rem cum`
          }
        ],
        list2: [
          {
            id: '1',
            tag: 'black',
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quas veritatis fugiat beatae mollitia
            numquam totam laborum esse assumenda necessitatibus perspiciatis rem cum`
          },
          {
            id: '2',
            tag: 'black',
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quas veritatis fugiat beatae mollitia
            numquam totam laborum esse assumenda necessitatibus perspiciatis rem cum`
          },
          {
            id: '4',
            tag: 'blue',
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quas veritatis fugiat beatae mollitia
            numquam totam laborum esse assumenda necessitatibus perspiciatis rem cum`
          },
          {
            id: '3',
            tag: 'orange',
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quas veritatis fugiat beatae mollitia
            numquam totam laborum esse assumenda necessitatibus perspiciatis rem cum`
          }
        ]
      }
    },
    methods:{
      add: function () {
          this.list.push({
            name: "Juan"
          });
        },
      replace: function () {
        this.list = [{
          name: "Edgard"
        }];
      },
      clone: function (el) {
        return {
          name: el.name + " cloned"
        };
      },
      log: function (evt) {
        window.console.log(evt);
      }
    },
    name: 'Home',
  }
</script>

<style>
.tag{
  width: 50px;
  height: 15px;
  /* background: purple; */
  border-radius: 10px;
}
</style>
