// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import dronedata from './components/DroneData'
import dronedata2 from './components/DroneData2'
import dronedata3 from './components/DroneData3'
import datafeed from './components/DataFeed'
import executecommands from './components/ExecuteCommands'
import router from './router'

Vue.use(ElementUI, { locale })

Vue.component('dronedata', dronedata)
Vue.component('executecommands', executecommands)
Vue.component('datafeed', datafeed)
Vue.component('dronedata2', dronedata2)
Vue.component('dronedata3', dronedata3)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
