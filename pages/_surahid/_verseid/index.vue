<template>
  <section class="container">
    <div class="detail">
      <Breadcrumb :surah-name="currentSurah.name_latin" :surah-link="String(currentSurah.number)" :verse-name="String(verseId)" />

      <SurahHeader
        :surah-number="Number(currentSurah.number)"
        :surah-name="currentSurah.name"
        :surah-latin="currentSurah.name_latin"
        :surah-translation="currentSurah.translations.id.name"
        source="verse"
        :show-settings="false" />

      <div class="detail__content">
        <SingleVerse
          :verse="currentSurah.text[String(verseId)]"
          :verse-index="String(verseId)"
          :surah-id="surahId"
          :translations="currentSurah.translations"
          :tafsir="currentSurah.tafsir"
          source="verse"
          :show-settings="false" />
      </div>

      <VerseNavigation
        :surah-id="surahId"
        :verse-id="verseId"
        :verse-count="Number(currentSurah.number_of_ayah)"
        :on-change-verse="onChangeVerse" />
    </div>
    <div class="footnote">
      Dibuat oleh <a href="https://mazipan.space/" target="_blank" rel="noopener noreferrer">Irfan Maulana</a>
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

import { getJsonLdBreadcrumb, getJsonLdArticle } from '~/utils/jsonld'
import { META_TITLE_AYAH, META_DESC_AYAH } from '~/constant/index'

@Component({
  components: {
    Breadcrumb,
    SingleVerse,
    SurahHeader,
    VerseNavigation
  },
  async asyncData ({ params }) {
    const respDetail = await import(`~/static/data/quran-json/surah/${params.surahid}.json`)
    // @ts-ignore: Unreachable code error
    const title = META_TITLE_AYAH(`${params.verseid}`, `${respDetail[params.surahid].name_latin} ${respDetail[params.surahid].name} (${respDetail[params.surahid].translations.id.name})`)
    // @ts-ignore: Unreachable code error
    const description = META_DESC_AYAH(`${params.verseid}`, `${respDetail[params.surahid].name_latin} ${respDetail[params.surahid].name} (${respDetail[params.surahid].translations.id.name})`)

    return {
      metaTitle: title,
      metaDesc: description,
      verseId: Number(params.verseid) || 1,
      surahId: Number(params.surahid) || 1,
      currentSurah: respDetail[params.surahid],
      jsonldBreadcrumb: getJsonLdBreadcrumb({
        categoryTitle: `QS ${params.surahid}`,
        categorySlug: `${params.surahid}`,
        title: `QS ${params.surahid}:${params.verseid}`,
        slug: `${params.surahid}/${params.verseid}`
      }),
      jsonLdArticle: getJsonLdArticle({
        desc: `${description}`,
        cover: 'meta-image.png',
        title: `${title}`,
        slug: `${params.surahid}/${params.verseid}`
      })
    }
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
        { hid: 'twitter:title', name: 'twitter:title', content: this.metaTitle },
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

  mounted () {
    // @ts-ignore: Unreachable code error
    this.setHeaderTitle(`${this.surahId}:${this.verseId} ${this.currentSurah.name_latin}`)
    this.setPage('verse-detail')
  }

  activated () {
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
