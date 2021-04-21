import Vue from "vue";
import App from "./App.vue";
import '@/assets/css/tailwind.css'

import router from "@/router";
import { dollarFilter, pencentFilter } from '@/filters'

Vue.filter('dollar', dollarFilter)
Vue.filter('percent', pencentFilter)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
