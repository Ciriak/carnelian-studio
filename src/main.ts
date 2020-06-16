import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import Connector from './connector';
Vue.config.productionTip = false;
new Connector();
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
