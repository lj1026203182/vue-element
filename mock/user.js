
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const permissons = {
  'admin-token': [
    {
      path: 'external-link',
      meta: { title: '外链', icon: 'example' },
      children: [
        {
          path: 'https://github.com/PanJiaChen/vue-element-admin',
          name: '1',
          meta: { title: 'External Link1', icon: 'link' }
        },
        {
          path: 'https://www.baidu.com',
          name: '2',
          meta: { title: 'External Link2', icon: 'link' }
        }
      ]
    },
  ],
  'editor-token': [
    {
      path: 'external-link',
      meta: { title: '外链', icon: 'example' },
      children: [
        {
          path: 'https://github.com/PanJiaChen/vue-element-admin',
          meta: { title: 'External Link', icon: 'link' }
        }
      ]
    },
  ]
}

export default [
  // user login
  {
    url: '/vue-admin-template/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 1,
          msg: 'Account and password are incorrect.'
        }
      }

      return {
        code: 0,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/vue-admin-template/user/info\.*',
    type: 'post',
    response: config => {
      const { username } = config.body
      const permisson = permissons[username]
      return {
        code: 0,
        data: permisson
      }
    }
  },

]
