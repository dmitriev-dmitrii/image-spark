import axios from 'axios';
import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios"
Vue.use(Vuex);

export default new Vuex.Store({

	state: {
		usersList: [],
		sortUsersBy: 'id',
		dataIsPending: false
	},

	getters: {
		sortedUsersList: (state) => {
			return state.usersList
		},
	},

	mutations: {
		mutateUsersList: (state, dataArr) => {
			state.usersList = dataArr
		},
		mutateDataIsPending: (state, bolean) => {
			state.dataIsPending = bolean
		},
	},

	actions: {
		sendSerachRequest: async (context, serachQuery) => {
			try {
				context.commit('mutateDataIsPending', true)
				const req = await axios.get(`https://api.github.com/search/users?q=${serachQuery}`)
				// 'https://api.github.com/search/issues?q=windows+label:bug+language:python+state:open&sort=created&order=asc'

				context.commit('mutateUsersList', [...req.data.items])
			}
			catch (e) {
				console.log(e);
			}
			finally {
				context.commit('mutateDataIsPending', false)
			}

		},
	},

})
