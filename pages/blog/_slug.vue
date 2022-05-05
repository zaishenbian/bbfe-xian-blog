<template>
  <div class="article">
    <article class="article-content">
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
    <aside class="catalog-content">
      <div class="toc-main">
        <div class="toc-title">Catalog</div>
        <div v-if="tocList.length" class="tocmenu">
          <ul class="toclist">
            <li
              v-for="link of tocList"
              :key="link.id"
              :class="{
                'py-1': link.depth === 2,
                'ml-4 pb-1': link.depth === 3
              }"
            >
              <a :href="`#${link.id}`" class="hover:underline">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  </div>
</template>
<script>
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
import { get } from 'lodash'

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
  computed: {
    tocList() {
      return get(this.article, 'toc', [])
    }
  },
  mounted() {
    this.initComments()
  },
  methods: {
    initComments() {
      const slug = this.$route.params.slug
      const gitalk = new Gitalk({
        clientID: 'd36a4c39d8c88e04e5d1',
        clientSecret: '3054f1c05651876ca8cc4bea2f052b5fb53a19b5',
        repo: 'blog-comments',
        owner: 'zaishenbian',
        admin: ['zaishenbian'],
        id: slug // Ensure uniqueness and length less than 50
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
<style lang="less">
.article {
  position: relative;
  display: flex;
  margin: 30px 40px;
  margin-bottom: 0;
  line-height: 1.6em;
  letter-spacing: 0.05em;
  border: none;

  .article-date {
    padding: 15px 0;
    font-size: 12px;
    color: #777;
    border-bottom: 1px solid #e2e2e2;
  }

  .article-date .icon {
    margin-right: 6px;
  }

  .icon-tag {
    margin-left: 8px;
  }

  .tag {
    padding-right: 10px;

    a:hover {
      text-decoration: underline;
    }
  }
}
// 文章内容样式
.nuxt-content {
  p {
    margin-bottom: 20px;
  }

  h2 {
    margin: 1.5em 0;
    font-weight: 600;
    font-size: 22px;
  }

  h3 {
    margin: 1.2em 0;
    font-weight: 600;
    font-size: 18px;
  }

  h4 {
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

  h2:hover .icon.icon-link {
    opacity: 1;
  }

  h3:hover .icon.icon-link {
    opacity: 1;
  }

  h4:hover .icon.icon-link {
    opacity: 1;
  }
}
// 目录样式
.catalog-content {
  position: relative;
  margin-left: 20px;
  flex-basis: 280px;
  flex-shrink: 0;

  .toc-main {
    position: fixed;
    top: 90px;
    width: 280px;
    padding-left: 20px;
    border-left: 1px solid #e5e5e5;
  }

  .toc-title {
    font-size: 1.2em;
    position: relative;
    padding-left: 28px;

    &::before {
      content: '';
      position: absolute;
      width: 22px;
      height: 22px;
      left: 0;
      top: 2px;
      background: url('~assets/images/catalog.png') no-repeat;
      background-size: contain;
    }
  }

  .tocmenu {
    margin-top: 1em;
    overflow-y: auto;
    max-height: 480px;
    font-size: 16px;
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
  .toclist {
    color: #0049b0;

    a:hover {
      text-decoration: none;
    }
  }
}
</style>
