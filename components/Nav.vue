<template>
  <nav class="nav">
    <div class="nav-item">
      <NuxtLink to="/">首页</NuxtLink>
    </div>
    <div class="nav-item">
      <NuxtLink to="/">标签</NuxtLink>
    </div>
    <div class="nav-item">
      <NuxtLink to="/">关于</NuxtLink>
    </div>
  </nav>
</template>
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
