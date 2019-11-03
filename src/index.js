import Vue from "vue";
import App from "./App";

new Vue({
  el: "#app",
  components: { App },
  render: h => h(App),
  template: "<App/>"
});
