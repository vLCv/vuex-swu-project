import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// get components
import peopleList from '../components/people-list.vue'
import profile from '../components/profile.vue'

// initialize router with the respective routes
export default new Router({
	mode: 'history',
	routes: [
		{
			component: peopleList,
			path: '/people'
		},
		{
			name: "profile",
			component: profile,
			path: '/people/:id'
		}
	]
})
