<template>
  <v-container>
    <v-toolbar
      :color="scrolled ? '#24292e' : '#24292e'"
      :dark="!scrolled"
      flat
      class="body mx-3"
    >
      <v-toolbar-title >
      <router-link to="/"> <v-img src="/logo.jpeg" max-height="60" max-width="160" alt="Logo"></v-img></router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <div id="nav">
          <v-btn text>
            <router-link to="/">Home</router-link>
          </v-btn>
          <v-btn text>
            <router-link to="/ourservices">Our Services</router-link>
          </v-btn>
          <v-btn text>
            <router-link to="/about">About-Us</router-link>
          </v-btn>
          <v-btn text>
            <router-link to="/contact">Contact-us</router-link>
          </v-btn>
        </div>
      </v-toolbar-items>

      <div class="hidden-sm-and-up">
        <v-menu offsets-y>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list class="responsiveMenu">
            <v-list-item>
              <v-list-item-title>
                <router-link to="/" exact>Home</router-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <router-link to="/ourservices" exact>Our Services</router-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <router-link to="/about">About</router-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <router-link to="/contact">Contact</router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  // data: () => ({}),
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
    toggleChat() {
      process.browser && window.$crisp.push(["do", "chat:toggle"]);
    },
  },
};
</script>

<style  scoped lang="scss">
.title{
  color: white;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
   font-weight: 600;
}
#nav {
  padding: 10px;

  a {
    font-weight: bold;
    // color: #2c3e50;
    color: white;

    &.router-link-exact-active {
      color: rgb(156, 156, 156);
    }
  }
}
</style>