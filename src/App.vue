<template>
  <v-app>
    <v-toolbar>
    <v-toolbar-title>Bad Moon </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Inicial</v-btn>
      <v-btn flat>Download</v-btn>
      <v-btn flat>Curiosidades</v-btn>
      <v-btn flat>Wiki</v-btn>
      <v-btn flat>Sobre</v-btn>
    </v-toolbar-items>
  </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
<style scoped>
  #app{
    background-color: black !important;
  }
</style>






