<template>
  <article class="article">
    <!-- content from markdown -->
    <nuxt-content class="markdown-body" :document="article" />
    <!-- prevNext component -->
    <div class="article-date">
      <i class="icon el-icon-date"></i>
      {{ formatDate(article.createdAt) }}
      <i class="icon-tag el-icon-collection-tag"></i>
      <span v-for="tag of article.tags" :key="tag" class="tag">
        <NuxtLink :to="`/blog/tag/${tag}`">
          {{ tag }}
        </NuxtLink>
      </span>
    </div>
    <PrevNext :prev="prev" :next="next" class="mt-4 mb-4" />
    <div id="gitalk-container" class="mb-8"></div>
  </article>
</template>
<script>
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      prev,
      next
    }
  },
  mounted() {
    this.initComments()
  },
  methods: {
    initComments() {
      const gitalk = new Gitalk({
        clientID: 'd36a4c39d8c88e04e5d1',
        clientSecret: '3054f1c05651876ca8cc4bea2f052b5fb53a19b5',
        repo: 'https://github.com/zaishenbian/blog-comments.git',
        owner: 'zaishenbian',
        admin: ['zaishenbian'],
        id: location.pathname // Ensure uniqueness and length less than 50
      })

      gitalk.render('gitalk-container')
    },
    formatDate(date) {
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour12: true
      }
      return new Date(date).toLocaleTimeString('zh-CN', options)
    }
  }
}
</script>
<style>
.article {
  margin: 30px 40px;
  margin-bottom: 0;
  line-height: 1.6em;
  letter-spacing: 0.05em;
  border: none;
}
.nuxt-content p {
  margin-bottom: 20px;
}
.nuxt-content h2 {
  margin: 1.5em 0;
  font-weight: 600;
  font-size: 22px;
}
.nuxt-content h3 {
  margin: 1.2em 0;
  font-weight: 600;
  font-size: 18px;
}
.nuxt-content h4 {
  margin: 0.8em 0;
  font-size: 16px;
}

.icon.icon-link {
  display: inline-block;
  margin-left: -24px;
  width: 24px;
  height: 17px;
  font-size: 1em;
  background-image: url('~assets/svg/icon-hashtag.svg');
  background-repeat: no-repeat;
  background-size: 20px 20px;
  opacity: 0;
}
.nuxt-content h2:hover .icon.icon-link {
  opacity: 1;
}
.nuxt-content h3:hover .icon.icon-link {
  opacity: 1;
}
.nuxt-content h4:hover .icon.icon-link {
  opacity: 1;
}

.article .article-date {
  padding: 15px 0;
  font-size: 12px;
  color: #777;
  border-bottom: 1px solid #e2e2e2;
}
.article .article-date .icon {
  margin-right: 6px;
}
.article .icon-tag {
  margin-left: 8px;
}
.article .tag {
  padding-right: 10px;
}
.article .tag a:hover {
  text-decoration: underline;
}
</style>
