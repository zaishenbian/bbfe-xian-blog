<template>
  <ul class="home">
    <li v-for="article of articles" :key="article.slug" class="article-item">
      <div class="article-title">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          {{ article.title }}
        </NuxtLink>
      </div>
      <div class="article-date">
        {{ formatDate(article.createdAt) }}
      </div>
      <div class="article-tags">
        <span v-for="tag of article.tags" :key="tag" class="tag">
          <NuxtLink :to="`/blog/tag/${tag}`">
            {{ tag }}
          </NuxtLink>
        </span>
      </div>
      <div class="article-description">{{ article.description }}</div>
      <div class="read-more">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          Read more
        </NuxtLink>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    formatDate(date) {
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
      return new Date(date).toLocaleTimeString('zh', options)
    }
  }
}
</script>

<style lang="less">
.home {
  padding-bottom: 30px;
}

.article-item {
  margin: 40px 0;
  line-height: 1.6em;

  .article-title {
    a {
      letter-spacing: 1px;
      font-weight: 600;
      color: #34495e;
      font-size: 1.6em;
      text-decoration: none;
    }

    a:hover {
      border-bottom: 2px solid #0049b0;
    }
  }

  .article-date {
    margin: 10px 0;
    line-height: 18px;
    color: #7f8c8d;
    font-size: 0.9em;
  }

  .article-tags {
    .tag {
      display: inline-block;
      margin-right: 4px;
      padding: 3px 5px;
      font-family: 'Roboto Mono', Monaco, courier, monospace;
      font-size: 0.8em;
      background-color: #f8f8f8;
      color: #0049b0;
      border-radius: 2px;
      cursor: pointer;
    }
  }

  .article-description {
    margin: 10px 0;
    color: #34495e;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .read-more {
    text-decoration: none;
    color: #0049b0;
    font-weight: bold;
    cursor: pointer;
  }
}

.article-item:last-child {
  margin-bottom: 0;
  border: none;
}
</style>
