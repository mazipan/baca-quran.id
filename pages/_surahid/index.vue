<template>
  <section class="container">
    <div class="detail">
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
import { mapState } from 'vuex'

import VerseCard from '../../components/VerseCard'
import SurahHeader from '../../components/SurahHeader'
import SurahNavigation from '../../components/SurahNavigation'

import { __isNotNull, __isNotEmptyArray } from '../../utils/index'
import { getAllSurah, getSurahById } from '../../services/index'

export default {
  name: 'PageSurahDetail',
  head() {
    return this.metaHead
  },
  components: {
    VerseCard,
    SurahHeader,
    SurahNavigation
  },
  data() {
    return {
      loading: true
    }
  },
  computed: {
    ...mapState(['settingActiveTheme']),
    metaHead() {
      const title = `Baca Al-Qur'an surat ke ${this.surahId} - ${this.currentSurah.name_latin} | Qur'an Offline`

      return {
        title,
        meta: [
          { hid: 'og:title', property: 'og:title', content: title },
          { hid: 'twitter:title', name: 'twitter:title', content: title },
          {
            hid: 'theme-color',
            name: 'theme-color',
            content: this.settingActiveTheme.bgColor
          }
        ]
      }
    },
    currentSurah() {
      return this.surahDetail
    },
    surahId() {
      let id = 0
      if (__isNotNull(this.$route.params && this.$route.params.surahid)) {
        id = Number(this.$route.params.surahid)
      }
      return id
    },
    isValidSurah() {
      return this.surahId > 0 && this.surahId <= 114
    },
    prevSurah() {
      if (__isNotEmptyArray(this.allSurahList)) {
        if (this.surahId > 1) {
          return this.allSurahList.find(
            item => item.index === this.surahId - 1
          )
        }
      }
      return null
    },
    nextSurah() {
      if (__isNotEmptyArray(this.allSurahList)) {
        if (this.surahId < 114) {
          return this.allSurahList.find(
            item => item.index === this.surahId + 1
          )
        }
      }
      return null
    }
  },
  async asyncData({ params }) {
    const resp = await getAllSurah()
    const respDetail = await getSurahById(params.surahid)

    return {
      allSurahList: resp.data.surah_info.map((item, idx) => {
        return Object.assign({}, item, { index: idx + 1 })
      }),
      surahDetail: respDetail.data[params.surahid]
    }
  },
  created() {
    this.$store.commit(
      'setHeaderTitle',
      `${this.surahId}: ${this.currentSurah.name_latin}`
    )
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.detail {
  &__content {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 5em;
  }
}
</style>
