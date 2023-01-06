<template>

</template>
  
  <script lang="ts">
  import { templateElement } from '@babel/types';
  import { defineComponent } from 'vue';
  import { createLogger, mapMutations } from 'vuex';
  import { mapState } from 'vuex'
  
  const parser = new DOMParser();
  
  
  export default defineComponent({
    computed: mapState(['news', 'currentPage']),
    methods: {
    },
    name: 'NewsList',
    components: {
    },
  });
  </script>
  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
  </style>