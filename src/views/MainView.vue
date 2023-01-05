<template>
    <NewsList></NewsList>
</template>
  
<script lang="ts">
import { templateElement } from '@babel/types';
import { defineComponent } from 'vue';
import { createLogger, mapMutations } from 'vuex';
import { mapState } from 'vuex'

import NewsList from './NewsList.vue';

const parser = new DOMParser();


export default defineComponent({
    name: 'Main',
    components: {
        NewsList,
    },
});
</script>
  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>