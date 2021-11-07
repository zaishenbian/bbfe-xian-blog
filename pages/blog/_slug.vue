<template>
  <article>
    <nuxt-content :document="article"></nuxt-content>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $content, params }) {
    console.log(params)
    const article  = await $content('articles', 'test', params.slug).fetch()

    return { article }
  },
})
</script>