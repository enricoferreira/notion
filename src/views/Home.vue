<template>
  <v-col cols="12" class="dash fill-height">
    <v-sheet width="360" class="overflow-auto fill-height elevation-0 rounded pl-3 pr-6 py-3 grey lighten-5">
      <v-card min-height="180" max-height class="w-100">
        <v-card-title class="py-2">
          <div class="tag blue"></div>
          <v-spacer></v-spacer>
          <v-btn x-small fab elevation="0">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="text-body-1">
          <strong class="pointer">
            #4123
          </strong>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quas veritatis fugiat beatae mollitia numquam totam laborum esse assumenda necessitatibus perspiciatis rem cum voluptas voluptatibus temporibus expedita soluta, consectetur earum.
        </v-card-text>
      </v-card>
    </v-sheet>
  </v-col>
</template>

<script>

  export default {
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
