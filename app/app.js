import Vue from "nativescript-vue";
import 'nativescript-tailwind/dist/tailwind.css'
import Home from "./components/Home";

new Vue({
    render: h => h('frame', [h(Home)]),
}).$start();
