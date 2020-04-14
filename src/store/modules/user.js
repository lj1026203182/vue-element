import { login, generateRoutes } from '@/api/user'
import { resetRouter, constantRoutes } from '@/router'
import Layout from '@/layout'

const state = {
  routes: [],
  userInfo: sessionStorage.userInfo ? JSON.parse(sessionStorage.userInfo) : {},
}

const mutations = {
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
  SET_ROUTES: (state, routes) => {
    state.routes = constantRoutes.concat(routes || [])
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

  // get user info
  generateRoutes({ commit, state }) {
    return new Promise((resolve, reject) => {
      generateRoutes({ username: state.userInfo.token }).then(response => {
        console.log(response);
        const { data } = response
        data.forEach(role => {
          role.component = Layout
        });

        commit('SET_ROUTES', data)
        resolve(data)
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

