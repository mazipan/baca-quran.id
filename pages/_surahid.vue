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
          :translations="currentSurah.translations" />
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

import VerseCard from '../components/VerseCard'
import SurahHeader from '../components/SurahHeader'
import SurahNavigation from '../components/SurahNavigation'

import { __isNotEmptyArray } from '../utils/index'

export default {
  name: 'PageSurahDetail',
  head () {
    return {
      title: `Qur'an Surat ${this.currentSurah.name_latin} | Qur'an Offline`
    }
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
      'surahDetail',
      'allSurahList'
    ]),
    currentSurah () {
      return this.surahDetail
    },
    surahId () {
      return Number(this.$route.params.surahid)
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
        success: (data) => {
          this.setHeaderTitle(`${id}: ${data.name_latin}`)
          setTimeout(() => {
            this.loading = false
          }, 1000)
        }
      })
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
    margin-bottom: 5em;
  }
}
</style>
