<template>
  <ul class="news-list container">
    <div v-show="news.length" class="news-list__inner">
      <NewsItem v-for="newsItem in news" :key="newsItem.id" :newsItem=newsItem>
      </NewsItem>
    </div>
    <Loader :style="{ margin: '1rem auto 0px auto' }" v-show="loaderActive"></Loader>
  </ul>
  <LoadMore @click="showNews" :style="{ width: '25%', margin: '1rem auto' }" text="Загрузить ещё"></LoadMore>
</template>
<script lang="ts">
import { defineComponent, computed, onBeforeMount, ref } from 'vue';
import { useStore } from 'vuex';
import NewsItem from './NewsItem.vue';
import LoadMore from '../Buttons/LoadMore.vue';
import Loader from '../Loader/Loader.vue';
import { loadNews } from '@/composables/useNews';


export default defineComponent({
  setup() {
    const store = useStore();
    const currentPage = ref(1);
    const loaderActive = ref(false)
    const news = computed(() => store.state.news);
    const addNews = (news) => { store.commit('addNews', news) }
    const showLoader = () => loaderActive.value = true
    const hideLoader = () => loaderActive.value = false
    const showNews = () => { loaderActive.value = true; loadNews(currentPage.value).then((data) => { addNews(data); loaderActive.value = false }) }
    onBeforeMount(showNews)
    return {
      news,
      showLoader,
      hideLoader,
      loaderActive,
      showNews,
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