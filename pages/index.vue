<template>
  <ul class="home">
    <li v-for="article of articles" :key="article.slug" class="article">
      <div class="article-title">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          {{ article.title }}
        </NuxtLink>
      </div>
      <div class="article-description">{{ article.description }}</div>
      <div class="article-date">
        <i class="icon el-icon-date"></i>
        {{ formatDate(article.createdAt) }}
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()
    const tags = await $content('tags')
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
      tags
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('zh', options)
    }
  }
}
</script>

<style class="postcss">
.home {
  padding-bottom: 30px;
}
.article {
  margin: 30px;
  line-height: 1.6em;
  border-bottom: 1px solid #e2e2e2;
}
.article-title a {
  letter-spacing: 1px;
  font-weight: 600;
  color: #5f5f5f;
  font-size: 22px;
  text-decoration: none;
}
.article-title a:hover {
  text-decoration: underline;
}
.article-description {
  margin: 1em 0;
  margin-left: 5px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.7);
}
.article-date {
  padding-bottom: 30px;
  font-size: 12px;
  color: #777;
}
.article-date .icon {
  margin-right: 6px;
}
</style>
