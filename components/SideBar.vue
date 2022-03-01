<template>
  <div>
    BBFE-XIAN1
    <ul>
      <li
        v-for="link of article.toc"
        :key="link.id"
        :class="{
          'font-semibold': link.depth === 2
        }"
      >
        <a
          :href="`#${link.id}`"
          class="hover:underline"
          :class="{
            'py-2': link.depth === 2,
            'ml-2 pb-2': link.depth === 3
          }"
          >{{ link.text }}
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      article: {
        toc: []
      }
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
