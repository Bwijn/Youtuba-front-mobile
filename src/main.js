import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(VueLazyload)


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')