import Vue from "vue";
import AppHelloComponent from "./components/AppHello.vue";

let v = new Vue({
    el: "#app-root",
    template: '<AppHelloComponent />',
    components: {
        AppHelloComponent
    }
});
