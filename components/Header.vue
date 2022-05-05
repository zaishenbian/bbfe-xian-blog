<template>
  <header class="header">
    <div class="header-container">
      <NuxtLink class="logo" to="/">
        <nuxt-img src="/images/BBFE.png" />
        <span class="description">奇安信西安前端团队</span>
      </NuxtLink>
      <Nav />
      <!-- <AppSearchInput class="ml-8" /> -->
    </div>
  </header>
</template>
<style lang="less">
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  height: 60px;
  border-bottom: 1px solid #e2e2e2;

  .header-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px 40px;
    height: 100%;
  }

  .logo {
    float: left;

    img {
      display: inline-block;
      margin-top: -5px;
      width: 50px;
    }

    .description {
      font-size: 1.5em;
      color: #0049b0;
    }
  }

  .nav {
    float: right;
  }
}
</style>
