<template>
  <section class="container">
    <div>
      <div class="all-surah">
        <Surah :surah-array="allSurahList" source="amp" />
      </div>

      <SeoText :paragraph="`Baca Quran lengkap 30 Juz 114 Surat beserta terjemahan bahasa Indonesia dan tafsir dari Kemenag. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.`" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State, Mutation } from 'vuex-class'

import Surah from '~/components/Surah.vue'
import SeoText from '~/components/SeoText.vue'
import { getAllSurah } from '~/utils/asyncData'

import { AppConstant, META_TITLE_ALL_SURAH, META_DESC_ALL_SURAH } from '~/constant/index'

@Component({
  components: {
    Surah,
    SeoText
  },
  async asyncData () {
    return await getAllSurah()
  }
})

export default class PageAllSurah extends Vue {
  @State settingActiveTheme
  @Mutation setHeaderTitle
  @Mutation setPage

  get metaHead () {
    return {
      title: META_TITLE_ALL_SURAH,
      meta: [
        { hid: 'description', name: 'description', content: META_DESC_ALL_SURAH },
        { hid: 'og:title', property: 'og:title', content: META_TITLE_ALL_SURAH },
        { hid: 'twitter:title', name: 'twitter:title', content: META_TITLE_ALL_SURAH },
        { hid: 'theme-color', name: 'theme-color', content: this.settingActiveTheme.bgColor }
      ],
      link: [
        { rel: 'canonical', href: `${AppConstant.PATH}all-surah/` }
      ]
    }
  }

  head () {
    return this.metaHead
  }

  beforeMount () {
    this.setHeaderTitle('Daftar Surat')
    this.setPage('all-surah')
  }
}
</script>

<style lang="scss" scoped>
.all-surah{
  width: 90%;
  margin: 0 auto;
}
</style>
