<template>
  <div class="comment">
    <div class="comment__inner">
      <p class="comment__title">
        <a href="{{link}}" class="comment__link">{{ title }}</a>
      </p>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Comment',
  props: {
    title: String,
    id: Number,
    link: String
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
