<template>
  <v-container>
    <v-footer padless height="auto">
      <v-card flat class="card text-center white--text" width="100%">
        <v-row>
          <v-col cols="4">
            <h4 class="title">Sitemap</h4>
            <div id="navi">
              <v-btn
                text
                v-for="sitemap in sitemaps"
                block
                :key="sitemap.symbol"
              >
                <router-link class="mx-2" :to="sitemap.route">{{
                  sitemap.symbol
                }}</router-link>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="4">
            <h4 class="title">Follow Us</h4>

            <v-btn
              v-for="icon in links"
              :key="icon.icon"
              class="mx-3"
              color="white"
              icon
              target="_blank"
            >
              <v-icon class="white--text" size="24px">{{ icon.icon }}</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="4">
            <h4 class="title">Contact us:</h4>

            <a class="white--text" target="_blank"
              >daniel.melesse@adey-meselesh.de</a
            >
          </v-col>

          <v-col cols="12">
            <div id="navi">
              <router-link to="/imprint">Imprint</router-link>
              <router-link class="mx-5" to="/privacy-policy"
                >Privacy-Policy</router-link
              >
            </div>
          </v-col>
        </v-row>

        <v-divider></v-divider>
        <v-card-text class="white--text mt-5 mb-0">
          {{ new Date().getFullYear() }} —
          <strong>Adey Meselesh Ethiopian Offshore IT Services </strong>
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
    policies: [
      {
        symbol: "Imprint",
        route: "/imprint",
      },
      {
        symbol: "Privacy-Policy",
        route: "/privacy-policy",
      },
    ],
  }),
};
</script>
<style scoped lang="scss">
#navi {
  padding: 10px;

  a {
    color: white;
    text-decoration: aquamarine;
    &:hover {
      color: rgb(156, 156, 156);
    }

    &.router-link-exact-active {
      color: rgb(156, 156, 156);
    }
  }
}
.card {
  background: #0e1214 !important;
}
.title {
  color: #008c96;
}
</style>