import Vue from "nativescript-vue";
import Vuex from "vuex";
import AtomicDesign from "@/components/pages/AtomicDesign";
import router from "./router";

// Init routing
Vue.prototype.$goto = function(to, options) {
  this.$navigateTo(router(to), options);
};

// Install the store
Vue.use(Vuex);

new Vue({
  render: (h) => h("frame", [h(AtomicDesign)]),
}).$start();
