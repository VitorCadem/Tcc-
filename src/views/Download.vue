<template>
  <div>
    <info-card :frontType="'graph'"
      :frontTitle="front.title"
      :frontData="front.graphData"
      :backTitle="back.title"
      :backData="back.message" />
  </div>
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
        title: 'Daily Conversion Value',
        graphData: [1,2,1,2,1,2,1,2,1,2,1,2,1],
      },
      back: {
        title: 'Monthly Summary',
        message: 'jutsu bola de lixo',
      },
    };
  },
};
</script>