<template>
  <section class="container">
    <div class="detail">
      <SurahHeader
        :surah-number="Number(currentSurah.number)"
        :surah-name="currentSurah.name"
        :surah-latin="currentSurah.name_latin"
        :surah-translation="currentSurah.translations.id.name"
        :verse-count="Number(currentSurah.number_of_ayah)"
        source="surah-amp" />

      <div class="detail__content">
        <VerseCard
          :verse-array="currentSurah.text"
          :surah-id="surahId"
          :translations="currentSurah.translations"
          :tafsir="currentSurah.tafsir"
          source="surah-amp" />
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

import { AppConstant, META_TITLE_SURAH, META_DESC_SURAH } from '../../../constant'
import VerseCard from '../../../components/VerseCard.vue'
import SurahHeader from '../../../components/SurahHeader.vue'
import SurahNavigation from '../../../components/SurahNavigation.vue'

import { __isNotNull, __isNotEmptyArray } from '../../../utils/index'
import { getJsonLdBreadcrumb, getJsonLdArticle } from '../../../utils/jsonld'

@Component({
  components: {
    VerseCard,
    SurahHeader,
    SurahNavigation
  },
  async asyncData ({ params }) {
    const respDetail = await import(`~/static/data/quran-json/surah/${params.surahid}.json`)
    const resp = await import('~/static/data/surah-info.json')

    // @ts-ignore: Unreachable code error
    const title = META_TITLE_SURAH(respDetail[params.surahid].name_latin)
    // @ts-ignore: Unreachable code error
    const description = META_DESC_SURAH(respDetail[params.surahid].name_latin)

    return {
      allSurahList: resp.surah_info.map((item, idx) => {
        return Object.assign({}, item, { index: idx + 1 })
      }),
      currentSurah: respDetail[params.surahid],
      jsonldBreadcrumb: getJsonLdBreadcrumb({
        categoryTitle: 'Daftar Surat',
        categorySlug: 'all-surah',
        title: `${respDetail[params.surahid].name_latin}`,
        slug: `${params.surahid}`
      }),
      jsonLdArticle: getJsonLdArticle({
        desc: `${description}`,
        cover: 'meta-image.png',
        title: `${title}`,
        slug: `${params.surahid}`
      })
    }
  }
})

export default class SurahDetailPage extends Vue {
  loading = true;

  @State settingActiveTheme

  @Mutation setHeaderTitle
  @Mutation setPage

  get metaHead () {
    // @ts-ignore: Unreachable code error
    const title = META_TITLE_SURAH(`${this.currentSurah.name_latin} ${this.currentSurah.name} (${this.currentSurah.translations.id.name})`)
    // @ts-ignore: Unreachable code error
    const description = META_DESC_SURAH(`${this.currentSurah.name_latin} ${this.currentSurah.name} (${this.currentSurah.translations.id.name})`)
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },

        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
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

  get surahId () {
    let id = 0
    if (__isNotNull(this.$route.params && this.$route.params.surahid)) {
      id = Number(this.$route.params.surahid)
    }
    return id
  }

  get isValidSurah () {
    return this.surahId > 0 && this.surahId <= 114
  }

  get prevSurah () {
    // @ts-ignore: Unreachable code error
    if (__isNotEmptyArray(this.allSurahList)) {
      if (this.surahId > 1) {
        // @ts-ignore: Unreachable code error
        return this.allSurahList.find(item => item.index === this.surahId - 1)
      }
    }
    return null
  }

  get nextSurah () {
    // @ts-ignore: Unreachable code error
    if (__isNotEmptyArray(this.allSurahList)) {
      if (this.surahId < 114) {
        // @ts-ignore: Unreachable code error
        return this.allSurahList.find(item => item.index === this.surahId + 1)
      }
    }
    return null
  }

  head () {
    return this.metaHead
  }

  mounted () {
    // @ts-ignore: Unreachable code error
    this.setHeaderTitle(`${this.surahId}: ${this.currentSurah.name_latin}`)
    this.setPage('surah-detail')
  }

  activated () {
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
