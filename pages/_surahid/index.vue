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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'

import VerseCard from '../../components/VerseCard.vue'
import SurahHeader from '../../components/SurahHeader.vue'
import SurahNavigation from '../../components/SurahNavigation.vue'

import { __isNotNull, __isNotEmptyArray } from '../../utils/index'
import { getAllSurah, getSurahById } from '../../services/index'

@Component({
  components: {
    VerseCard,
    SurahHeader,
    SurahNavigation
  },
  async asyncData({ params }) {
    const resp = await getSurahById(params.surahid)
    console.log(resp.data[params.surahid])
    return {
      currentSurah: resp.data[params.surahid]
    }
  }
})

export default class SurahDetailPage extends Vue {
  loading = true
  allSurahList = []

  @State settingActiveTheme

  get metaHead() {
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
  }

  get surahId() {
    let id = 0
    if (__isNotNull(this.$route.params && this.$route.params.surahid)) {
      id = Number(this.$route.params.surahid)
    }
    return id
  }

  get isValidSurah() {
    return this.surahId > 0 && this.surahId <= 114
  }

  get prevSurah() {
    if (__isNotEmptyArray(this.allSurahList)) {
      if (this.surahId > 1) {
        return this.allSurahList.find(
          item => item.index === this.surahId - 1
        )
      }
    }
    return null
  }

  get nextSurah() {
    if (__isNotEmptyArray(this.allSurahList)) {
      if (this.surahId < 114) {
        return this.allSurahList.find(
          item => item.index === this.surahId + 1
        )
      }
    }
    return null
  }

  head() {
    return this.metaHead
  }

  async created() {
    const resp = await getAllSurah()
    this.allSurahList = resp.data.surah_info.map((item, idx) => {
      return Object.assign({}, item, { index: idx + 1 })
    })

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
