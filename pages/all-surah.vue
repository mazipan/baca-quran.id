<template>
  <section class="container">
    <div>
      <div class="search clearfix">
        <label
          for="search-surah"
          class="search__title">
          Pencarian surat
        </label>
        <input
          id="search-surah"
          v-model="searchText"
          type="search"
          name="search"
          placeholder="Surat apa yang ingin dibaca hari ini?">
      </div>

      <div class="all-surah">
        <SurahCard :surah-array="filteredSurah" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'

import SurahCard from '../components/SurahCard.vue'
import { __isNotEmptyString, __normalizeText } from '../utils/index'
import { getAllSurah } from '../services/index'

@Component({
  components: {
    SurahCard
  },
  async asyncData() {
    const resp = await import(/* webpackChunkName: "surah-info" */'~/static/data/surah-info.json')
    return {
      allSurahList: resp.surah_info.map((item, idx) => {
        return Object.assign({}, item, { index: idx + 1 })
      })
    }
  }
})

export default class PageAllSurah extends Vue {
  loading = true
  searchText = ''

  @State settingActiveTheme
  @Mutation setHeaderTitle

  get metaHead() {
    const title = "Daftar semua surat dalam Al-Qur'an | Qur'an Offline"
    return {
      title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'theme-color', name: 'theme-color', content: this.settingActiveTheme.bgColor }
      ]
    }
  }

  get filteredSurah() {
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
    } else return this.allSurahList
  }

  head() {
    return this.metaHead
  }

  mounted() {
    this.setHeaderTitle('Daftar Surat')
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
