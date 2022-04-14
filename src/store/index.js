import axios from 'axios';
import Vue from "vue";
import Vuex from "vuex";
import router from '@/router'
import toStorage from '@/modules/toStorage'
import user from '@/store/user'
Vue.use(Vuex);




export default new Vuex.Store({
	modules: {
		user,
	},
	state: {
		users: [],
		incompleteResults: false,
		totalResults: 0,

		queryData: {
			searchQuery: "misha",
			order: 'desc',
			pageCounter: 0
		},
	},

	mutations: {
		mutateUsers: (state, dataArr) => {
			state.users = dataArr
		},
		mutateTotalresults: (state, num) => {
			state.totalResults = num
		},
		mutateIncompleteResults: (state, bolean) => {
			state.incompleteResults = bolean
		},
		mutateQueryData: (state, obj) => {
			state.queryData = { ...state.queryData, ...obj }
		},
	},

	actions: {
		getUsers: async (context) => {
			try {
				if (context.state.incompleteResults) {
					return false
				}
			
				const res =
					await axios.get(`https://api.github.com/search/users?q=${context.state.queryData.searchQuery}in:login&page=${context.state.queryData.pageCounter + 1}&sort=repositories&order=${context.state.queryData.order}&per_page=10`)

				// console.log(res.data);


				let users = res.data.items

				const getUsersData = [...users].map(user => axios.get(`https://api.github.com/users/${user.login}`))

				await Promise.all(getUsersData)
					.then((responses) => {
						users = []
						responses.forEach(item => {
							users.push(item.data)
						});
					})

				// console.log(res.data);
				context.commit('mutateQueryData', { pageCounter: context.state.queryData.pageCounter + 1 })

				context.state.queryData.pageCounter > 1 ?
					context.commit('mutateUsers', [...context.state.users, ...users]) :
					context.commit('mutateUsers', users);

				context.commit('mutateTotalresults', res.data.total_count)
				context.commit('mutateIncompleteResults', res.data.incomplete_results)

				if (context.state.users.length) { toStorage.addItem({ ...context.state }) }
			}
			catch (e) {
				console.log(e);
				router.push({
					name: 'Error',
					params: { error: e }
				});
			}

		},
	},

})
