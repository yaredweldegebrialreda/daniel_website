<template>
  <v-app class="body">
    <v-app-bar
      :color="scrolled ? '#263238' : 'transparent'"
      :dark="!scrolled"
      fixed
      elevate-on-scroll
      max-height="65"
      class="mr-0 ml-0 pl-12 pr-0"
    >
      <Header />
    </v-app-bar>
    <router-view class="body"></router-view>
    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>
<script>
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

export default {
  name: "App",

  components: {
    Header,
    Footer,
  },

  data: () => ({
    scrolled: false,
  }),
  created() {
    this.scrolled = process.browser && window.scrollY > 0; // eslint-disable-line
    process.browser && window.addEventListener("scroll", this.handleScroll); // eslint-disable-line
  },
  destroyed() {
    process.browser && window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = process.browser && window.scrollY > 0;
    },
  },
};
</script>

<style scoped>
</style>
