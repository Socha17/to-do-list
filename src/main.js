import Vue from 'vue'
import App from './App.vue'
import VueNoty from 'vuejs-noty'
import VModal from 'vue-js-modal'

Vue.use(VModal)
Vue.use(require('vue-moment'));
Vue.use(VueNoty)

Vue.config.productionTip = false

import 'vuejs-noty/dist/vuejs-noty.css'

new Vue({
  render: h => h(App),
}).$mount('#app')