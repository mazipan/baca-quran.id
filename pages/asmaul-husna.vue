<template>
  <div class="container asmaul-husna">
    <div class="search clearfix">
      <label
        for="search-asmaul-husna"
        class="search__title">
        Pencarian cepat
      </label>
      <input
        id="search-asmaul-husna"
        v-model="searchText"
        type="search"
        name="search"
        placeholder="Cari asmaul husna">
    </div>
    <div class="wrapper">
      <div class="item_wrapper">
        <div
          v-for="item in filteredAsmaulHusna"
          :key="item.index"
          class="item">
          <div
            class="arabic font-arabic"
            dir="rtl"
            lang="ar">
            {{ item.arabic }}
          </div>
          <div class="latin">
            {{ item.latin }}
          </div>
          <div class="translation">
            {{ item.translation_id }}
          </div>
        </div>
      </div>

      <SeoText :paragraph="`Daftar Asmaul Husna, lengkap dengan tulisan arab dan artinya. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.`" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State, Mutation } from 'vuex-class'

import { __isNotEmptyString, __normalizeText } from '~/utils/index'
import { getAsmaulHusna } from '~/utils/asyncData'
import { AppConstant, META_TITLE_ASMAUL_HUSNA, META_DESC_ASMAUL_HUSNA } from '~/constant/index'

import SeoText from '~/components/SeoText.vue'

@Component({
  components: {
    SeoText
  },
  async asyncData () {
    return await getAsmaulHusna()
  }
})

export default class AsmaulHusnaPage extends Vue {
  searchText = ''

  @State settingActiveTheme
  @Mutation setHeaderTitle
  @Mutation setPage

  get metaHead () {
    return {
      title: META_TITLE_ASMAUL_HUSNA,
      meta: [
        { hid: 'description', name: 'description', content: META_DESC_ASMAUL_HUSNA },
        { hid: 'og:title', property: 'og:title', content: META_TITLE_ASMAUL_HUSNA },
        { hid: 'twitter:title', name: 'twitter:title', content: META_TITLE_ASMAUL_HUSNA },
        { hid: 'theme-color', name: 'theme-color', content: this.settingActiveTheme.bgColor }
      ],
      link: [
        { rel: 'amphtml', href: `${AppConstant.PATH}amp/asmaul-husna/` }
      ]
    }
  }

  get filteredAsmaulHusna () {
    if (__isNotEmptyString(this.searchText) && this.searchText.length >= 3) {
      // @ts-ignore: Unreachable code error
      return this.asmaulHusna.filter((item) => {
        const predicateTranslation = __normalizeText(item.translation_id).includes(
          __normalizeText(this.searchText)
        )
        const predicateLatin = __normalizeText(item.latin).includes(
          __normalizeText(this.searchText)
        )

        return predicateLatin || predicateTranslation
      })
    // @ts-ignore: Unreachable code error
    } else { return this.asmaulHusna || [] }
  }

  head () {
    return this.metaHead
  }

  beforeMount () {
    this.setHeaderTitle('Asmaul Husna')
    this.setPage('asmaul-husna')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/search.scss';

.wrapper{
  width: 90%;
  margin: 1em auto;
}
.item_wrapper{
  margin-top: 1em;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row-reverse;
}
.item{
  text-decoration: none;
  border-radius: .25em;
  padding: 1.5em;
  text-align: center;
  background: var(--bg-card-color);
  color: var(--text-color);
  flex-grow: 1;
  // desktop
  @media screen and (min-width: 768px) {
    width: 30%;
    margin: 1em 1em 0 0;
  }
  // mobile
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 1em 0 0 0;
  }
}
.arabic{
  font-size: 2rem;
}
.latin{
  font-size: 1rem;
  margin: 1.5em 0 1em;
}
.translation{
  font-size: 0.8rem;
  font-style: italic;
}
</style>
