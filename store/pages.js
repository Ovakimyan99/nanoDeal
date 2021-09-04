export default {
  state: {
    pageTitle: ''
  },
  mutations: {
    CHANGE_PAGE_TITLE (state, payload) {
      state.pageTitle = payload
    }
  }
}
