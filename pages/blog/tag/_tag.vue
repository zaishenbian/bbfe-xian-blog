<template>
  <div>
    <div class="tags-cloud">
      <a
        v-for="tag of tags"
        :key="tag"
        class="tag-item"
        href="javascript:void(0)"
        @click="jumpToArticle(tag)"
      >
        {{ tag }}
      </a>
    </div>
    <div v-for="(item, index) of tagToArticleList" :key="index">
      <h3 :id="Object.keys(item)[0]">{{ Object.keys(item)[0] }}</h3>
      <ul class="tag__articles-box">
        <li
          v-for="(article, articleIndex) of Object.values(item)[0]"
          :key="articleIndex"
          class="tag__article-title"
        >
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            {{ article.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'slug', 'tags', 'author', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()
    const tags = Array.from(
      new Set(articles.map((article) => article.tags.map((tag) => tag)).flat())
    )

    const tagToArticleList = tags.map((tag) => {
      const tagArticleMap = {}
      tagArticleMap[tag] = []
      articles.forEach((article) => {
        if (article.tags.includes(tag)) {
          tagArticleMap[tag].push(article)
        }
      })
      return tagArticleMap
    })
    return {
      articles,
      tags,
      tagToArticleList
    }
  },
  methods: {
    jumpToArticle(id) {
      const anchor = document.getElementById(id)
      // chrome
      document.body.scrollTop = anchor.offsetTop
      // firefox
      document.documentElement.scrollTop = anchor.offsetTop
      // safari
      window.pageYOffset = anchor.offsetTop
    }
  }
}
</script>

<style lang="less">
.tag__articles-box {
  list-style: inherit;
  margin-left: 8px;
}
.tag-item {
  margin-right: 16px;
}
.tags-cloud {
  width: 980px;
  height: 108px;
  margin: 30px 0;
  text-align: center;
}
.article-title {
  cursor: pointer;
}
</style>
