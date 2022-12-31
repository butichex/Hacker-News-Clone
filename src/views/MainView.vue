<template>
  <div class="comments">
      <Comment v-for="comment in comments" :key="comment.id" v-bind="comment"></Comment>
  </div>
</template>

<script lang="ts">
import { templateElement } from '@babel/types';
import { defineComponent } from 'vue';
import { createLogger, mapMutations } from 'vuex';
import { mapState } from 'vuex'

import Comment from '../components/Comment.vue';

const parser = new DOMParser();



export default defineComponent({
  computed: mapState(['comments']),
  created: function () {
    fetch('https://news.ycombinator.com/').then(response => response.text()).then(data => {
      const html = parser.parseFromString(data, 'text/html');
      html.querySelectorAll('.athing').forEach((h) => {
        const id = h.querySelector('.rank')?.innerHTML;
        const [link, title] = [h.querySelector('.titleline')?.querySelector('a')?.href, h.querySelector('.titleline')?.querySelector('a')?.innerHTML];
        console.log(this.comments)
        this.addComment({ id: id, link: link, title: title })
      });

    }
    )
  },
  methods: mapMutations(['addComment']),
  name: 'MainView',
  components: {
    Comment
  },
});
</script>
