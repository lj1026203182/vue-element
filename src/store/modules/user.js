import { login, logout, getInfo } from '@/api/user'
import { resetRouter } from '@/router'

const state = {
  userInfo: {}
}

const mutations = {
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        sessionStorage.setItem('userInfo', JSON.stringify(data))
        commit('SET_USERINFO', data)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      sessionStorage.removeItem('userInfo')
      resetRouter()
      commit('SET_USERINFO', {})
      resolve()
    })
  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

