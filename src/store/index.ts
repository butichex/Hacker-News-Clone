import { createStore } from 'vuex';


interface INews {
  id: number,
  title: string,
  link: string
}

const news: INews[] = []

export default createStore({
  state: {
    news: news,
    currentPage: 1,
  },
  getters: {
  },
  mutations: {
    addNewsItem({ news }, newsItem: INews) {
      news.push(newsItem)

    },
    addCurrentPage({ currentPage }) {
      currentPage++
    }
  },
  actions: {
  },
  modules: {
  },
});
