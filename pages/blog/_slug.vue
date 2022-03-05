<template>
  <article class="article">
    <!-- content from markdown -->
    <nuxt-content :document="article" />
    <!-- content author component -->
    <!-- <author :author="article.author" /> -->
    <!-- prevNext component -->
    <PrevNext :prev="prev" :next="next" class="mt-8 mb-12" />
  </article>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const tagsList = await $content('tags')
      .only(['name', 'slug'])
      .where({ name: { $containsAny: article.tags } })
      .fetch()
    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      tags,
      prev,
      next
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
<style>
.article {
  margin: 30px;
  line-height: 1.6em;
  letter-spacing: 0.05em;
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
  background-image: url('~assets/svg/icon-hashtag2.svg');
  display: inline-block;
  margin-right: 4px;
  width: 20px;
  height: 17px;
  font-size: 1em;
  background-size: 20px 20px;
}
</style>
