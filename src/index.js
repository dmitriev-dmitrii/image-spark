import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import './assets/scss/index.scss'

Vue.filter('formatDate', function (value) {
  if (!value) return ''

  value = new Date(value)
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  }

  value = value.toLocaleDateString('en-EN', options)


  return value
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
