// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueRangedatePicker from 'vue-rangedate-picker'
import AmCharts from 'amcharts3'
import AmSerial from 'amcharts3/amcharts/serial'

Vue.use(Vuetify, { theme: {
  primary: '#ef7b10',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}}, VueRangedatePicker, AmCharts, AmSerial)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
