<template>
  <div class="surah__root">
    <a
      class="surah block_content has-shadow"
      @click.prevent="goToSurahDetail(surah.index, surah.verse)">
      <div class="surah__header">
        <div class="surah__header--left">
          <div
            class="surah__index tag_index"
            style="width: 130px;">
            {{ $t('numberOfVerse') }} {{ surah.verse }}
          </div>
        </div>
        <div class="surah__header--right">
          <div class="divider clearfix">
            <div class="surah__title">
              {{ surah.arabic }}
            </div>
          </div>
          <div class="divider clearfix">
            <div class="surah__title surah__title--latin">
              {{ surah.latin }}
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'LastReadCard',
  props: {
    surah: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
  },
  methods: {
    getSurahDetailUrl (index, verse) {
      return `/${index}#verse-${verse}`
    },
    goToSurahDetail (index, verse) {
      const path = this.getSurahDetailUrl(index, verse)
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/surah.scss';
</style>
