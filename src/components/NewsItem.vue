<template>
  <li class="news">
    <div class="news__inner">
      <p class="news__title title">{{ title }}</p>
      <div class="news__data">
        <div class="news__author author">
          <i class="author__icon pi pi-user"></i>
          <p class="author__value subtext">{{ author }}</p>
        </div>
        <div class="news__score score">
          <i class="score__icon pi pi-heart"></i>
          <p class="score__value subtext">{{ score }}</p>
        </div>
        <div class="news__comments-count comments-count">
          <i class="comments-count__icon pi pi-comments"></i>
          <p class="comments-count__value subtext">{{ commentsCount }}</p>
        </div>
      </div>
    </div>

  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NewsItem',
  props: {
    score: Number,
    id: Number,
    commentsCount: Number,
    author: String,
    title: String,
    link: String
  },
  computed: {
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.news {
  background: #FFFFFF;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  width: 100%;
  padding: 1rem;

  &__data {
    margin: 0.5rem 0px 0px 0px;
    display: flex;
    gap: 1rem;
  }

  &__data > * {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  }

  &__data > i {
    font-size: 0.35rem;
  }
}
</style>
