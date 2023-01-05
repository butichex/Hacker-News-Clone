<template>
  <ul class="news-list container">
    <NewsItem v-for="newsItem in news" :key="newsItem.id" :="newsItem"></NewsItem>
  </ul>
</template>

<script lang="ts">
import { templateElement } from '@babel/types';
import { defineComponent } from 'vue';
import { createLogger, mapMutations } from 'vuex';
import { mapState } from 'vuex'

import NewsItem from './NewsItem.vue';

const parser = new DOMParser();


export default defineComponent({
  computed: mapState(['news']),
  created: function () {
    fetch('https://news.ycombinator.com/').then(response => response.text()).then(data => {
      const html = parser.parseFromString(data, 'text/html');
      html.querySelectorAll('.athing').forEach((athingElement) => {
        const athingElementNextSibling = athingElement.nextElementSibling;
        const [id, score, author, commentsCount] = [parseInt(athingElementNextSibling?.querySelectorAll('span')[3].id.split('_')[1]!), parseInt(athingElementNextSibling?.querySelector('.score')?.innerHTML.split('')[1]!), athingElementNextSibling!.querySelector('.hnuser')!.innerHTML, athingElementNextSibling?.querySelectorAll('a')[3].innerHTML.split('&')[0]];
        const [link, title] = [athingElement.querySelector('.titleline')?.querySelector('a')?.href, athingElement.querySelector('.titleline')?.querySelector('a')?.innerHTML];
        this.addNewsItem({ id: id, score: score, author: author, commentsCount: commentsCount, link: link, title: title })
      });

    }
    )
  },
  methods: mapMutations(['addNewsItem']),
  name: 'NewsList',
  components: {
    NewsItem,
  },
});
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.news-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>