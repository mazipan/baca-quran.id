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

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

import SurahCard from '../components/SurahCard.vue'
import { __isNotEmptyString, __normalizeText } from '../utils/index'

export default {
  name: 'PageAllSurah',
  head () {
    return this.metaHead
  },
  components: {
    SurahCard
  },
  data () {
    return {
      loading: true,
      searchText: ''
    }
  },
  computed: {
    ...mapState([
      'settingActiveTheme',
      'allSurahList'
    ]),
    metaHead () {
      const title = 'Daftar Semua Surat dalam Al-Qur\'an | Qur\'an Offline'
      return {
        title,
        meta: [
          { hid: 'og:title', property: 'og:title', content: title },
          { hid: 'twitter:title', name: 'twitter:title', content: title },
          { hid: 'theme-color', name: 'theme-color', content: this.settingActiveTheme.bgColor }
        ]
      }
    },
    isHaveSource () {
      return __isNotEmptyString(this.$route.query.source)
    },
    filteredSurah () {
      if (__isNotEmptyString(this.searchText) && this.searchText.length >= 3) {
        return this.allSurahList.filter(item => {
          let predicateTranslation = __normalizeText(item.translation).includes(
            __normalizeText(this.searchText)
          )
          let predicateLatin = __normalizeText(item.latin).includes(
            __normalizeText(this.searchText)
          )

          return predicateLatin || predicateTranslation
        })
      } else return this.allSurahList
    }
  },
  mounted () {
    this.setHeaderTitle('Daftar Surat')
    this.fetchSurahInfo()
  },
  methods: {
    ...mapMutations([
      'setHeaderTitle'
    ]),
    ...mapActions([
      'fetchAllSurah'
    ]),
    fetchSurahInfo () {
      this.fetchAllSurah({
        success: () => {
          if (!this.isHaveSource) {
            setTimeout(() => {
              this.loading = false
            }, 1000)
          } else this.loading = false
        }
      })
    }
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
