export default {
  async signup({ commit }, userData) {
    try {
      const res = await this.$UserApi.createUser(userData)
      const user = res.data.user

      this.$cookie.set('ssTok', user.token)

      commit('UPDATE_ALLWD', user.authenticated)

      window.$nuxt.$router.push('/dashboard')
    } catch (err) {
      const errors = err.response.data
      const serverErrs = []

      for (const key in errors) {
        serverErrs.push(errors[key].message)
      }

      commit('UPDATE_SERVER_ERR', serverErrs)
    }
  },
  async logUserIn({ commit }, payload) {
    try {
      const res = await this.$UserApi.logUserIn(payload)
      const user = res.data.user

      commit('UPDATE_LOGIN_ERROR', null)
      commit('UPDATE_ALLWD', user.authenticated)

      this.$cookie.set('ssTok', user.token, 60 * 60 * 12)

      window.$nuxt.$router.push('/dashboard')
    } catch (err) {
      commit('UPDATE_LOGIN_ERROR', err.response.data)
    }
  },
  async logout({ commit }) {
    try {
      const res = await this.$UserApi.logUserOut()
      const user = res.data.user

      this.$cookie.remove('ssTok')
      commit('UPDATE_ALLWD', user.authenticated)
    } catch (err) {
      this.$cookie.remove('ssTok')
      commit('UPDATE_ALLWD', false)
    }

    window.$nuxt.$router.push('/')
  }
}
