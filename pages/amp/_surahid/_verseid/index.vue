<template>
  <section class="container">
    <div class="detail">
      <Breadcrumb :surah-name="currentSurah.name_latin" :surah-link="String(currentSurah.number)" :verse-name="String(verseId)" />

      <SurahHeader
        :surah-number="Number(currentSurah.number)"
        :surah-name="currentSurah.name"
        :surah-latin="currentSurah.name_latin"
        :surah-translation="currentSurah.translations.id.name"
        source="amp-verse"
        :show-settings="false" />

      <div class="detail__content">
        <SingleVerse
          :verse="currentSurah.text[String(verseId)]"
          :verse-index="String(verseId)"
          :surah-id="surahId"
          :translations="currentSurah.translations"
          :tafsir="currentSurah.tafsir"
          source="amp-verse"
          :show-settings="false" />
        <SeoText :paragraph="`Baca Quran Surat ${currentSurah.name_latin} Ayat ${String(verseId)} beserta terjemahan bahasa Indonesia dan tafsir dari Kemenag. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.`" />
      </div>

      <VerseNavigation
        :surah-id="surahId"
        :verse-id="verseId"
        :verse-count="Number(currentSurah.number_of_ayah)"
        :on-change-verse="onChangeVerse" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State, Mutation } from 'vuex-class'

import Breadcrumb from '~/components/Breadcrumb.vue'
import SingleVerse from '~/components/SingleVerse.vue'
import SurahHeader from '~/components/SurahHeader.vue'
import VerseNavigation from '~/components/VerseNavigation.vue'
import SeoText from '~/components/SeoText.vue'

import { getVerseDetail } from '~/utils/asyncData'
import { AppConstant } from '~/constant/index'

@Component({
  components: {
    Breadcrumb,
    SingleVerse,
    SurahHeader,
    VerseNavigation,
    SeoText
  },
  async asyncData ({ params }) {
    return await getVerseDetail({ surahid: params.surahid, verseid: params.verseid })
  }
})

export default class VerseDetailPage extends Vue {
  loading = true

  @State settingActiveTheme
  @Mutation setHeaderTitle
  @Mutation setPage

  get metaHead () {
    return {
      // @ts-ignore: Unreachable code error
      title: this.metaTitle,
      meta: [
        // @ts-ignore: Unreachable code error
        { hid: 'description', name: 'description', content: this.metaDesc },
        // @ts-ignore: Unreachable code error
        { hid: 'og:title', property: 'og:title', content: this.metaTitle },
        // @ts-ignore: Unreachable code error
        { hid: 'og:description', property: 'og:title', content: this.metaDesc },
        // @ts-ignore: Unreachable code error
        { hid: 'twitter:title', name: 'twitter:title', content: this.metaTitle },
        // @ts-ignore: Unreachable code error
        { hid: 'twitter:description', name: 'twitter:title', content: this.metaDesc },
        { hid: 'twitter:label1', name: 'twitter:label1', content: 'Surat' },
        // @ts-ignore: Unreachable code error
        { hid: 'twitter:label2', name: 'twitter:label2', content: this.currentSurah.name_latin },
        {
          hid: 'theme-color',
          name: 'theme-color',
          content: this.settingActiveTheme.bgColor
        },
        // @ts-ignore: Unreachable code error
        { hid: 'article:tag', name: 'article:tag', content: this.currentSurah.name_latin }
      ],
      link: [
        // @ts-ignore: Unreachable code error
        { rel: 'canonical', href: `${AppConstant.PATH}${this.surahId}/${this.verseId}/` }
      ],
      script: [
        {
          id: 'ld-breadcrumb',
          // @ts-ignore: Unreachable code error
          innerHTML: JSON.stringify(this.jsonldBreadcrumb),
          type: 'application/ld+json',
          body: true
        },
        {
          id: 'ld-article',
          // @ts-ignore: Unreachable code error
          innerHTML: JSON.stringify(this.jsonLdArticle),
          type: 'application/ld+json',
          body: true
        }
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  }

  get isValidSurah () {
    // @ts-ignore: Unreachable code error
    return this.surahId > 0 && this.surahId <= 114
  }

  onChangeVerse (e: any) {
    const val = e.target.value
    // @ts-ignore: Unreachable code error
    this.$router.push(`/${this.surahId}/${val}/`)
  }

  head () {
    return this.metaHead
  }

  beforeMount () {
    // @ts-ignore: Unreachable code error
    this.setHeaderTitle(`${this.surahId}:${this.verseId} ${this.currentSurah.name_latin}`)
    this.setPage('verse-detail')
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.detail {
  &__content {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 2em;
  }
}
</style>
