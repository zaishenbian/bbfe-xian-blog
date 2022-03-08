<template>
  <div class="base-layout">
    <div class="sidebar">
      <SideBar />
    </div>
    <div class="main">
      <Header />
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
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 30%;
  height: 100%;
  border-right: 1px solid #e2e2e2;
}
.main {
  position: fixed;
  top: 0;
  right: 0;
  margin-top: 60px;
  width: 70%;
  height: calc(100% - 60px);
  overflow-y: auto;
}
.header {
  z-index: 3;
}
</style>
