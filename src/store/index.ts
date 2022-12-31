import { createStore } from 'vuex';


interface IComment {
  id: number, 
  title: string, 
  link: string
}

const comments: IComment[] = []

export default createStore({
  state: {
    comments: comments, 
  },
  getters: {
  },
  mutations: {
    addComment( {comments} , comment: IComment) {
      comments.push(comment)
    }, 
  },
  actions: {
  },
  modules: {
  },
});
