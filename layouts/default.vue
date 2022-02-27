<template>
  <div class="base-layout">
    <div class="sidebar" :span="7">
      BBFE-XIAN
    </div>
    <div class="main" :span="17">
      <Header />
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
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
  padding-top: 60px;
  width: 70%;
}
.header {
  z-index: 3;
}
</style>
