import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const SWAPI = 'https://swapi.co/api/people/'

export default new Vuex.Store({
	state: {
		peopleList: []
	},
	actions: {
		fetchPeopleList( ){
			fetch(SWAPI)
				.then(res => res.json())
				.then(data => {
					// get the first page people list
					this.state.peopleList = data;
				})
		}
	},
	getters: {
		peopleList (state) { return state.peopleList }
	}
})
