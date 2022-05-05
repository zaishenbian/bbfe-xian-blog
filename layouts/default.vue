<template>
  <div class="base-layout">
    <Header />
    <div class="main">
      <Nuxt />
    </div>
  </div>
</template>
<script>
import '~/assets/css/global.css'

export default {
  // async asyncData({ $content, params }) {
  //   const article = await $content('articles', params.slug).fetch()
  //   const tagsList = await $content('tags')
  //     .only(['name', 'slug'])
  //     .where({ name: { $containsAny: article.tags } })
  //     .fetch()
  //   const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
  //   const [prev, next] = await $content('articles')
  //     .only(['title', 'slug'])
  //     .sortBy('createdAt', 'asc')
  //     .surround(params.slug)
  //     .fetch()
  //   return {
  //     article,
  //     tags,
  //     prev,
  //     next
  //   }
  // }
}
</script>
<style>
body {
  font-family: 'PingHei', 'PingFang SC', Helvetica Neue, 'Work Sans',
    'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif;
  color: #424242;
}
.base-layout {
  overflow-x: hidden;
}
.main {
  max-width: 980px;
  height: calc(100% - 60px);
  margin: 60px auto 0;
  padding: 0 1em;
  overflow-x: hidden;
  overflow-y: auto;
}
.header {
  z-index: 3;
}
</style>
