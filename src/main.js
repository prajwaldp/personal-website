import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';
import router from './router';

import './assets/styles.scss';

Vue.config.productionTip = false;
Vue.use(VueScrollTo)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
