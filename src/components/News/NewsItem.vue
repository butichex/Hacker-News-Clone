<template>
  <li class="news">
    <div class="news__inner">
      <p class="news__title title">
        <router-link :to='"/comments/" + newsItem.id'>{{ newsItem.title }}</router-link>
      </p>
      <div class="news__data">
        <div class="news__author author">
          <i class="author__icon pi pi-user"></i>
          <p class="author__value subtext">{{ newsItem.author }}</p>
        </div>
        <div class="news__score score">
          <i class="score__icon pi pi-heart"></i>
          <p class="score__value subtext">{{ newsItem.score }}</p>
        </div>
        <div class="news__comments-count comments-count">
          <i class="comments-count__icon pi pi-comments"></i>
          <p class="comments-count__value subtext">{{ newsItem.commentsCount }}</p>
        </div>
      </div>
    </div>

  </li>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'NewsItem',
  props: {
    newsItem: {
      type: Object, 
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.news {
  background: #FFFFFF;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 1rem;

  &__data {
    margin: 0.5rem 0px 0px 0px;
    display: flex;
    gap: 1rem;
  }

  &__data>* {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  }

  &__data>i {
    font-size: 0.35rem;
  }
}
</style>
