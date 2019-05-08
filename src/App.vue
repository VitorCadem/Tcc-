<template>
  <v-app>
    <v-toolbar>
    <v-toolbar-title>Bad Moon </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/">Inicial</v-btn>
      <v-btn flat to="/Download">Download</v-btn>
      <v-btn flat to="/Wiki" >Wiki</v-btn>
      <v-btn flat to="/Sobre" >Sobre</v-btn>
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






