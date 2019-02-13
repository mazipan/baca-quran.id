<template>
  <section class="container">
    <div
      class="detail">
      <SurahHeader
        :surah-number="Number(currentSurah.number)"
        :surah-name="currentSurah.name"
        :surah-latin="currentSurah.name_latin"
        :surah-translation="currentSurah.translations.id.name" />

      <div class="detail__content">
        <VerseCard
          :verse-array="currentSurah.text"
          :surah-id="surahId"
          :translations="currentSurah.translations"
          :tafsir="currentSurah.tafsir" />
      </div>

      <SurahNavigation
        :surah-id="surahId"
        :surah-name="currentSurah.name"
        :next-surah="nextSurah"
        :prev-surah="prevSurah"
        :number-ayah="Number(currentSurah.number_of_ayah)" />
    </div>
  </section>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

import VerseCard from '../../components/VerseCard'
import SurahHeader from '../../components/SurahHeader'
import SurahNavigation from '../../components/SurahNavigation'

import { __isNotNull, __isNotEmptyArray } from '../../utils/index'

export default {
  name: 'PageSurahDetail',
  head () {
    return this.metaHead
  },
  components: {
    VerseCard,
    SurahHeader,
    SurahNavigation
  },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    ...mapState([
      'settingActiveTheme',
      'surahDetail',
      'allSurahList'
    ]),
    metaHead () {
      const title = this.$t('pageTitle.surahDetail', { surahName: this.currentSurah.name_latin, surahNumber: this.surahId })
      return {
        title,
        meta: [
          { hid: 'og:title', property: 'og:title', content: title },
          { hid: 'twitter:title', name: 'twitter:title', content: title },
          { hid: 'theme-color', name: 'theme-color', content: this.settingActiveTheme.bgColor }
        ]
      }
    },
    currentSurah () {
      return this.surahDetail
    },
    surahId () {
      let id = 0
      if (__isNotNull(this.$route.params && this.$route.params.surahid)) {
        id = Number(this.$route.params.surahid)
      }
      return id
    },
    isValidSurah () {
      return this.surahId > 0 && this.surahId <= 114
    },
    prevSurah () {
      if (__isNotEmptyArray(this.allSurahList)) {
        if (this.surahId > 1) {
          return this.allSurahList.find(item => item.index === this.surahId - 1)
        }
      }
      return null
    },
    nextSurah () {
      if (__isNotEmptyArray(this.allSurahList)) {
        if (this.surahId < 114) {
          return this.allSurahList.find(item => item.index === this.surahId + 1)
        }
      }
      return null
    }
  },
  mounted () {
    this.onMountedDetailPage(this.surahId)
  },
  methods: {
    ...mapMutations([
      'setHeaderTitle'
    ]),
    ...mapActions([
      'fetchAllSurah',
      'fetchSurahById'
    ]),
    onMountedDetailPage (id) {
      if (!__isNotEmptyArray(this.allSurahList)) {
        this.fetchAllSurah({
          success: () => {}
        })
      }

      this.fetchSurahById({
        id,
        success: this.onSuccess
      })
    },
    onSuccess (data) {
      this.setHeaderTitle(`${this.surahId}: ${data.name_latin}`)
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/_variables.scss';

.detail {
  &__content {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 5em;
  }
}
</style>
