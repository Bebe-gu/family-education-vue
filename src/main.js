// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
Vue.use(MintUI);
import 'mint-ui/lib/style.css'
import 'vant/lib/index.css'

import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'
//import '../src/assets/lib/mui/css/mui.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../static/css/reset.css'


//import '../src/assets/lib/mui/js/mui.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
