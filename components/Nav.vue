<template>
  <nav class="nav">
    <div
      v-for="item in menus"
      :key="item.path"
      :class="{ 'nav-item': true, active: item.path === avtivePath }"
    >
      <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
    </div>
  </nav>
</template>
<script>
const menus = [
  {
    path: '/',
    name: '首页'
  },
  {
    path: '/blog/tag',
    name: '标签'
  },
  {
    path: '/blog/describe',
    name: '订阅'
  },
  {
    path: '/blog/about',
    name: '关于'
  }
]
export default {
  name: 'Nav',
  data() {
    return {
      activeName: '',
      menus
    }
  },
  computed: {
    avtivePath() {
      return this.$route.path
    }
  }
}
</script>
<style lang="less">
.nav {
  display: flex;
  padding: 0 20px;
  font-size: 14px;

  .nav-item {
    margin: 0 12px;
    line-height: 40px;
  }

  .nav-item a {
    padding-bottom: 3px;
    color: #5a5a5a;
    font-size: 16px;
  }

  .nav-item.active a {
    border-bottom: 3px solid #4786d6;
  }
}
</style>
