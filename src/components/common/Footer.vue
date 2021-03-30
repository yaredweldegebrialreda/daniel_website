<template>
  <v-container>
    <v-footer padless height="auto" dark>
      <v-card flat class="card text-center white--text" width="100%">
        <v-row>
          <v-col cols="4">
            <h4 class="title">Sitemap</h4>
            <v-btn
              text
              v-for="sitemap in sitemaps"
              :key="sitemap.symbol"
              class="mx-0 mt-2"     
            >
              <router-link :to="sitemap.route">{{sitemap.symbol}}</router-link>
            </v-btn>
          </v-col>
          <v-col cols="4">
            <h4 class="title">Follow Us</h4>
            <v-card-text class="mt-0">
              <v-btn
                v-for="icon in links"
                :key="icon.icon"
                class="mx-4"
                color="#00796B"
                icon
                target="_blank"
              >
                <v-icon size="24px">{{ icon.icon }}</v-icon>
              </v-btn>
            </v-card-text>
          </v-col>
          <v-col cols="4">
            <h4 class="title">Contact us:</h4>
            <v-card-text class="mt-0">
              <a target="_blank">adey@adeymeselesh.de</a>
            </v-card-text>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-card-text class="white--text mt-5 mb-0">
          {{ new Date().getFullYear() }} —
          <strong
            >Adey Meselesh Ethiopian Offshore IT Services
            <a target="_blank">adey@adeymeselesh.de</a></strong
          >
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    links: [
      {
        icon: "mdi-facebook",
        link: "https://www.facebook.com/yared.weldegebrial/",
      },
      { icon: "fab fa-twitter", link: "https://twitter.com/YWeldegebrial" },
      {
        icon: "fab fa-linkedin",
        link: "https://www.linkedin.com/in/yared-weldegebrial-a6b491175",
      },
      {
        icon: "fab fa-instagram",
        link: "https://www.instagram.com/yaredaseeker/",
      },
      {
        icon: "fab fa-github",
        link: "https://github.com/yaredweldegebrialreda",
      },
      //  { icon: "fab fa-gmail", link: "yared12707@gmail.com" }
    ],
    sitemaps: [
      {
        symbol: "Home",
        route: "/",
      },
      {
        symbol: "Our Services",
        route: "/ourservices",
      },
      {
        symbol: "About-us",
        route: "/about",
      },
      {
        symbol: "Contact-us",
        route: "/contact",
      },
    ],
  }),
};
</script>
<style scoped>
.card {
  background: radial-gradient(
      at Top left,
      rgba(5, 10, 10, 2) 20%,
      rgba(24, 9, 30, 1) 100%
    )
    no-repeat center center fixed !important;
}
.title {
  color: #008c96;
}
</style>