<template>
  <header class="header">
    <!-- https://lhcfl.github.io/archives/ -->
    <!-- <NuxtLink to="/"><Logo class="mb-4" /></NuxtLink> -->
    <Nav />
    <el-button type="success">成功按钮</el-button>
    <AppSearchInput class="ml-8" />
  </header>
</template>
<style lang="postcss">
.header {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #fff;
  height: 60px;
  border-bottom: 1px solid #e2e2e2;
}
</style>
