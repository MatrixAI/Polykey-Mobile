import Vue from "nativescript-vue";
import Home from "./components/Home";
import router from "./router";

Vue.prototype.$goto = function (to, options) {
    this.$navigateTo(router(to), options)
}

new Vue({
  render: (h) => h("frame", [h(Home)]),
}).$start();
