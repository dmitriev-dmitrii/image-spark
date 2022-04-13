import axios from 'axios'
import router from '@/router'
export default {
	namespaced: true,
	state: {
		userData: {},
		loading: true
	},

	getters: {

	},

	mutations: {
		mutateLoading: (state, bolean) => {
			state.loading = bolean
		},
		mutateUserData: (state, obj) => {
			state.userData = obj
		},
	},

	actions: {
		getUser: async function (context, userLogin) {
			try {
				context.commit('mutateLoading', true)

				const req = await axios.get(`https://api.github.com/users/${userLogin}`)
				context.commit('mutateUserData', req.data)
				console.log(req);
			}
			catch (e) {
				console.log(e);
				router.push({
					name: 'Error',
					params: { error: e }
				});
			}
			finally {
				context.commit('mutateLoading', false)
			}
		}
	},

}
