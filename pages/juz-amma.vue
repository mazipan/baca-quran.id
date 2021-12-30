<template>
  <section class="container">
    <div>
      <div class="search clearfix">
        <label
          for="search-surah"
          class="search__title">
          Cari surat di Juz Amma
        </label>
        <input
          id="search-surah"
          v-model="searchText"
          type="search"
          name="search"
          placeholder="Surat apa yang ingin dibaca hari ini?">
      </div>

      <div class="all-surah">
        <Surah :surah-array="filteredSurah" source="normal" />
      </div>

      <SeoText :paragraph="`Baca Juz Amma (Qur'an Juz 30) beserta terjemahan bahasa Indonesia dan tafsir dari Kemenag. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.`" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State, Mutation } from 'vuex-class'

import Surah from '~/components/Surah.vue'
import { __isNotEmptyString, __normalizeText } from '~/utils/index'
import { getJuzAmma } from '~/utils/asyncData'
import { AppConstant, META_TITLE_JUZ_AMMA, META_DESC_JUZ_AMMA } from '~/constant/index'

import SeoText from '~/components/SeoText.vue'

@Component({
  components: {
    Surah,
    SeoText
  },
  async asyncData () {
    return await getJuzAmma()
  }
})

export default class PageJuzAmma extends Vue {
  loading = true
  searchText = ''

  @State settingActiveTheme
  @Mutation setHeaderTitle
  @Mutation setPage

  get metaHead () {
    return {
      title: META_TITLE_JUZ_AMMA,
      meta: [
        { hid: 'description', name: 'description', content: META_DESC_JUZ_AMMA },
        { hid: 'og:title', property: 'og:title', content: META_TITLE_JUZ_AMMA },
        { hid: 'twitter:title', name: 'twitter:title', content: META_TITLE_JUZ_AMMA },
        { hid: 'theme-color', name: 'theme-color', content: this.settingActiveTheme.bgColor }
      ],
      link: [
        { rel: 'amphtml', href: `${AppConstant.PATH}amp/juz-amma/` }
      ]
    }
  }

  get filteredSurah () {
    if (__isNotEmptyString(this.searchText) && this.searchText.length >= 3) {
      // @ts-ignore: Unreachable code error
      return this.allSurahList.filter((item) => {
        const predicateTranslation = __normalizeText(item.translation).includes(
          __normalizeText(this.searchText)
        )
        const predicateLatin = __normalizeText(item.latin).includes(
          __normalizeText(this.searchText)
        )

        return predicateLatin || predicateTranslation
      })
      // @ts-ignore: Unreachable code error
    } else { return this.allSurahList }
  }

  head () {
    return this.metaHead
  }

  beforeMount () {
    this.setHeaderTitle('Juz Amma')
    this.setPage('juz-amma')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/search.scss';
.all-surah{
  width: 90%;
  margin: 0 auto;
}
</style>
