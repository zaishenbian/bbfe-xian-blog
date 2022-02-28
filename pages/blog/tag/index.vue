<template>
  <div class="tags">
    <el-tag
      v-for="item in tags"
      :key="item.path"
      :type="getRandomTagType()"
      effect="dark"
    >
      {{ item.name }}
    </el-tag>
  </div>
</template>
<script>
const TagTypes = ['', 'success', 'info', 'danger', 'warning']

export default {
  async asyncData({ $content, params }) {
    const tags = await $content('tags')
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      tags
    }
  },
  methods: {
    getRandomTagType() {
      const index = parseInt(Math.random() * 5)
      return TagTypes[index]
    }
  }
}
</script>
