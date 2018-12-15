import Vue from 'vue';
import App from './App.vue';
import { router } from './router/index.js';
import {store} from './store/index.js';
import firebase from "firebase";

new Vue({
  el: '#app',
  router,
  firebase,
  store,
  render: h => h(App),
})
