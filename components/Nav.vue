<template>
  <nav class="nav">
    <div class="nav-item">
      <NuxtLink to="/">首页</NuxtLink>
    </div>
    <div class="nav-item">
      <NuxtLink to="/blog/tag">标签</NuxtLink>
    </div>
    <div class="nav-item">
      <NuxtLink to="/blog/about">关于</NuxtLink>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="首页" name="home"></el-tab-pane>
      <el-tab-pane label="标签" name="tag"></el-tab-pane>
      <el-tab-pane label="关于" name="about"></el-tab-pane>
    </el-tabs>
  </nav>
</template>
<script>
export default {
  name: 'Nav',
  data() {
    return {
      activeName: '',
    }
  },
  watch: {
    $route: {
      handler: function(to, from) {
        console.log(to)
      },
      immediate: true,
    }
  },
  methods: {
    handleClick(data) {
      console.log(data)
    }
  }
}
</script>
<style lang="postcss">
.nav {
  display: flex;
  padding: 18px 30px;
  font-size: 14px;
}
.nav-item {
  padding-right: 20px;
}
.nav-item a {
  color: #5a5a5a;
}
</style>
