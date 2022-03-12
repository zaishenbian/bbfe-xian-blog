<template>
  <div class="side-bar">
    <div class="team-info">
      <div class="logo">
        <nuxt-img src="/images/BBFE.png" />
      </div>
      <div class="name">
        <NuxtLink to="/">BBFE-XIAN</NuxtLink>
      </div>
      <div class="description">奇安信西安前端团队</div>
    </div>
    <div v-if="tocList.length" class="tocmenu">
      <ul class="toclist">
        <li
          v-for="link of tocList"
          :key="link.id"
          :class="{
            'py-2': link.depth === 2,
            'ml-4 pb-2': link.depth === 3
          }"
        >
          <a :href="`#${link.id}`" class="hover:underline">{{ link.text }} </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { get } from 'lodash'

export default {
  data() {
    return {
      article: {
        toc: []
      }
    }
  },
  computed: {
    tocList() {
      return get(this.article, 'toc', [])
    }
  },
  watch: {
    $route: {
      handler() {
        this.initArticleToc()
      },
      immediate: true
    }
  },
  methods: {
    async initArticleToc() {
      const params = this.$route.params
      const article = await this.$content('articles', params.slug).fetch()
      this.article = article
    }
  }
}
</script>
<style>
.side-bar {
  margin: auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  letter-spacing: 0.1em;
}
.side-bar .name {
  color: #464646;
  font-size: 2rem;
  font-weight: bold;
}
.side-bar .description {
  font-size: 16px;
  color: #565654;
}
.side-bar .team-info {
  margin: 30px;
  text-align: center;
}
.side-bar .team-info img {
  margin: 0 auto;
  width: 160px;
}

.tocmenu {
  overflow-y: auto;
  text-align: center;
  border-top: 1px solid #f0f0f0;
  font-size: 13px;
}
.tocmenu::-webkit-scrollbar {
  width: 2px;
  color: #4786d6;
  height: auto;
}
.tocmenu::-webkit-scrollbar-thumb {
  color: #4786d6;
  background-color: #4786d6;
}
.side-bar .toclist {
  display: inline-block;
  text-align: left;
  padding: 15px;
  color: #424242;
}
</style>
