<template>
  <section class="container">
    <div
      class="detail">

      <div class="detail__header">
        <div class="detail__header_index">
          {{ currentSurah.number }}
        </div>
        <div class="detail__header_content">
          <div>{{ currentSurah.name }}</div>
          <small>({{ currentSurah.name_latin }} - {{ currentSurah.translations.id.name }})</small>
        </div>
      </div>

      <div class="detail__content">
        <VerseCard
          :verse-array="currentSurah.text"
          :surah-id="surahId"
          :translations="currentSurah.translations"/>
      </div>

      <SurahNavigation
        :surah-id="surahId"
        :surah-name="currentSurah.name"
        :next-surah="nextSurah"
        :prev-surah="prevSurah"/>

    </div>
  </section>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

import VerseCard from '../components/VerseCard'
import SurahNavigation from '../components/SurahNavigation'

import { __isNotEmptyArray } from '../utils/index'

export default {
  name: 'PageSurahDetail',
  components: {
    VerseCard,
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
          this.setHeaderTitle(`${data.name_latin} - ${data.name}`)
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
  &__header {
    width: 90%;
    margin: 1em auto;
    font-size: 2rem;
    display: flex;
    align-content: center;
    align-items: center;

    &_index {
      background-color: #52e0a1;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      display: flex;
      align-items: center;
      height: 100px;
      padding: .25em .5em;
    }
    &_content {
      background-color: #000;
      color: #52e0a1;
      flex-grow: 1;
      justify-content: space-between;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: right;
      height: 100px;
      padding: .25em .5em;
      small {
        font-size: 1rem;
      }
    }
  }
  &__content {
    margin-bottom: 100px;
    width: 90%;
    margin: 0 auto;
  }
}
</style>
