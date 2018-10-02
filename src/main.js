// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import Vuex from 'vuex'

Vue.use(Vuex)

import Vuetify from 'vuetify'
import DaySpanVuetify from 'dayspan-vuetify'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css'

import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
	theme: {
	}
  })

Vue.use(DaySpanVuetify, {
  methods: {
	getDefaultEventColor: () => '#1976d2',
  }
});


Vue.use(require('vue-moment'));

Vue.config.productionTip = false

Vue.prototype.$api_endpoint = 'https://api.compassdigital.org/v1';



const store = new Vuex.Store({
	state: {
	  location: undefined,
	  access_token: localStorage.access_token,
	  is_drawer_open: true
	},
	mutations: {
	  login (state, access_token) {
		  console.log("@")
		state.access_token = access_token;

		if(access_token) localStorage.access_token = access_token;
		else delete localStorage.access_token;
	  }
	}
  });


Vue.prototype.$api_catch = function(err)
{
	console.error(err);

	if(err && err.response && err.response.status == 401)
	{
		store.commit("login", undefined);
	}
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
})
