const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  permission_routes: state => state.user.routes,
  visitedViews: state => state.tagsView.visitedViews,
}
export default getters
