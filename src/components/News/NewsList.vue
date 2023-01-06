<template>
  <ul class="news-list container">
    <div v-show="news.length" class="news-list__inner">
      <NewsItem v-for="newsItem in news" :key="newsItem.id" :="newsItem"></NewsItem>
    </div>
    <Loader :style="{ margin: '1rem auto 0px auto' }" v-show="loaderActive"></Loader>
  </ul>
  <LoadMore @click="loadNews" :style="{ width: '25%', margin: '1rem auto' }" text="Загрузить ещё"></LoadMore>

</template>

<script lang="ts">
import { templateElement } from '@babel/types';
import { defineComponent } from 'vue';
import { createLogger, mapMutations } from 'vuex';
import { mapState } from 'vuex'

import NewsItem from './NewsItem.vue';
import LoadMore from '../Buttons/LoadMore.vue';
import Loader from '../Loader/Loader.vue';

const parser = new DOMParser();


export default defineComponent({
  computed: mapState(['news', 'currentPage']),
  data: () => {
    return {
      loaderActive: false,
    }
  },
  created: function () {
    this.loadNews()
  },
  methods: {
    ...mapMutations(['addNewsItem', 'addCurrentPage']),
    loadNews() {
      this.showLoader()
      fetch('https://news.ycombinator.com/?p=' + this.currentPage).then(response => response.text()).then(data => {
        const html = parser.parseFromString(data, 'text/html');
        html.querySelectorAll('.athing').forEach((athingElement) => {
          const athingElementNextSibling = athingElement.nextElementSibling;
          const [id, score, author, commentsCount] = [parseInt(athingElementNextSibling?.querySelectorAll('span')[3].id.split('_')[1]!), parseInt(athingElementNextSibling?.querySelector('.score')?.innerHTML.split('')[1]!), athingElementNextSibling!.querySelector('.hnuser')!.innerHTML, parseInt(athingElementNextSibling?.querySelectorAll('a')[3].innerHTML.split('&')[0]!)];
          const [link, title] = [athingElement.querySelector('.titleline')?.querySelector('a')?.href, athingElement.querySelector('.titleline')?.querySelector('a')?.innerHTML];
          this.addNewsItem({ id: id, score: score, author: author, commentsCount: commentsCount, link: link, title: title })
          this.hideLoader()
        });

      }
      )
    },
    showLoader() {
      this.loaderActive = true;
    },
    hideLoader() {
      this.loaderActive = false;
    }
  },
  name: 'NewsList',
  components: {
    NewsItem,
    LoadMore,
    Loader
  },
});
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.news-list {
  padding: 2rem 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 80vh;
    overflow-y: scroll;
    overflow-x: hidden;
  }

}

* {
  scrollbar-width: auto;
  scrollbar-color: #072d4b #ffffff;
}

*::-webkit-scrollbar {
  width: 0.5rem;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: #072d4b;
  border-radius: 1rem;
  height: 5rem;
}
</style>