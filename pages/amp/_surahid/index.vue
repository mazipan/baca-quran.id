<template>
  <section class="container">
    <div class="detail">
      <Breadcrumb :surah-name="currentSurah.name_latin" />

      <SurahHeader
        :surah-number="Number(currentSurah.number)"
        :surah-name="currentSurah.name"
        :surah-latin="currentSurah.name_latin"
        :surah-translation="currentSurah.translations.id.name"
        :verse-count="Number(currentSurah.number_of_ayah)"
        :show-settings="false"
        source="surah-amp" />

      <div class="detail__content">
        <VerseCard
          :verse-array="currentSurah.text"
          :surah-id="surahId"
          :translations="currentSurah.translations"
          :tafsir="currentSurah.tafsir"
          source="surah-amp"
          :show-settings="false" />

        <SeoText :paragraph="`Baca Quran Surat ${currentSurah.name_latin} beserta terjemahan bahasa Indonesia dan tafsir dari Kemenag. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.`" />
      </div>

      <SurahNavigation
        :surah-id="surahId"
        :next-surah="nextSurah"
        :prev-surah="prevSurah"
        :verse-count="Number(currentSurah.number_of_ayah)" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State, Mutation } from 'vuex-class'

import { AppConstant } from '~/constant'
import Breadcrumb from '~/components/Breadcrumb.vue'
import SurahHeader from '~/components/SurahHeader.vue'
import SurahNavigation from '~/components/SurahNavigation.vue'
import VerseCard from '~/components/VerseCard.vue'
import SeoText from '~/components/SeoText.vue'

import { getSurahDetail } from '~/utils/asyncData'

@Component({
  components: {
    Breadcrumb,
    VerseCard,
    SurahHeader,
    SurahNavigation,
    SeoText
  },
  async asyncData ({ params }) {
    return await getSurahDetail({ surahid: params.surahid })
  }
})

export default class SurahDetailPage extends Vue {
  loading = true;

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
        { rel: 'canonical', href: `${AppConstant.PATH}${this.surahId}/` }
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

  head () {
    return this.metaHead
  }

  beforeMount () {
    // @ts-ignore: Unreachable code error
    this.setHeaderTitle(`${this.surahId}: ${this.currentSurah.name_latin}`)
    this.setPage('surah-detail')
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
