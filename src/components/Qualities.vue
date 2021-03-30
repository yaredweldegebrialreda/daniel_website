<template>
  <div class="heroBlock">
    <v-carousel cycle dark 
        hide-delimiter-background
        show-arrows-on-hover
        height="500">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-row class="title fill-height hidden-xs-only" align="center" justify="center">{{ item.title }}</v-row>
        <v-row class="title fill-height hidden-xs-only" align="center" justify="center">{{ item.content }}</v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "Qualities",
  data() {
    return {
      items: [
        {
         
          src: require("../assets/images/1.jpg"),
          title: "Innovative Smart Options",
          content:"ICT Solutions: Innovate. Outsource. Deliver."
        },
        {
        
          src: require("../assets/images/aa.jpg"),
          title: "Deliver Timely",
        },
        {
         
          src: require("../assets/images/3.jpg"),
          title: "ICT Solutions"
        }
      ]
    };
  }
};
</script>