import Vue from "vue";
import AppHelloComponent from "./components/AppHello.vue";
var v = new Vue({
    el: "#app-root",
    template: '<AppHelloComponent />',
    components: {
        AppHelloComponent: AppHelloComponent
    }
});
//# sourceMappingURL=index.js.map