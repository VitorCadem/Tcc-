<template>
<v-flex xs4>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img id="david"
      class="white--text"
      height="1000px"
      width:="1000px"
      
     
      
     
  >  
     
    </v-img>

    <v-card-text>
    
    </v-card-text>

  </v-card>
  
</v-flex>
</template>
<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<style scoped>
#david{
background-image:url("../components/Wood.png")

}
</style>