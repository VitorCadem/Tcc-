<template>
<v-flex xs4>
  <div>
    <info-card :frontType="'img'"
      :frontTitle="front.title"
      :frontImg="front.img"
      :backTitle="back.title"
      :backData="back.message" />
  
  </div>
</v-flex>
</template>

<script>
import InfoCard from 'vue-info-card';

export default {
  components: {
    InfoCard,
  },
  data() {
    return {
      front: {
        title: 'jhonas',
        img : components/beta.jpg
      },
      back: {
        title: 'Monthly Summary',
        message: 'jutsu bola de lixo',
      },
    };
  },
};
</script>