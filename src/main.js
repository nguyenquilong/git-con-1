import Vue from "vue";
import GitCon1Component from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(GitCon1Component),
}).$mount("#app");
