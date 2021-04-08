import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import VueRouter from "vue-router";
import LoadScript from 'vue-plugin-load-script';



import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";
import OurServices from "./views/OurServices";
import Imprint from "./views/Imprint";
import PrivacyPolicy from "./views/PrivacyPolicy";

Vue.use(VueRouter);
Vue.use(LoadScript);

import "./scss/main.scss";

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/ourservices", component: OurServices },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/imprint", component: Imprint },
    { path: "/privacy-policy", component: PrivacyPolicy },
    { path: "*", component: NotFound },
  ],
  mode: "hash",
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
