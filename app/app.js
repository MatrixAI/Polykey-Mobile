import Vue from "nativescript-vue";
import Vuex from "vuex";
import Home from "./components/Home";
import router from "./router";

// Init routing
Vue.prototype.$goto = function(to, options) {
  this.$navigateTo(router(to), options);
};

// Install the store
Vue.use(Vuex);

new Vue({
  render: (h) => h("frame", [h(Home)]),
}).$start();
