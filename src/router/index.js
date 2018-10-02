import Vue from 'vue'
import Router from 'vue-router'
import Calendar from '@/components/Calendar'

Vue.use(Router)

export default new Router({
  routes: [
	{
		path: "/",
		component: Calendar
	},
  ],
  scrollBehavior: function(to, from, savedPosition) {
	return { x: 0, y: 0 }
  }
})
