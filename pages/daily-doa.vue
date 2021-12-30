<template>
  <div class="container daily-doa">
    <div class="search clearfix">
      <label
        for="search-daily-doa"
        class="search__title">
        Pencarian cepat
      </label>
      <input
        id="search-daily-doa"
        v-model="searchText"
        type="search"
        name="search"
        placeholder="Cari doa harian">
    </div>
    <div class="wrapper">
      <div class="wrapper__item">
        <div
          v-for="item in filteredDailyDoa"
          :key="item.title"
          class="item"
          @click="onClickDoa(item)">
          <div class="item__title">
            {{ item.title }}
          </div>
          <div
            v-show="isExpanded(item.title)"
            class="collapsible">
            <div class="arabic font-arabic">
              {{ item.arabic }}
            </div>
            <div class="latin">
              {{ item.latin }}
            </div>
            <div class="translation">
              {{ item.translation }}
            </div>
          </div>
        </div>
      </div>

      <SeoText :paragraph="`Kumpulan bacaan Do'a sehari-hari untuk anak dan dewasa beserta tulisan latin dan terjemahan bahasa Indonesia. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.`" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State, Mutation } from 'vuex-class'

import { __isNotEmptyString, __normalizeText } from '~/utils/index'
import { getDailyDoa } from '~/utils/asyncData'
import { AppConstant, META_TITLE_DAILY_DOA, META_DESC_DAILY_DOA } from '~/constant/index'

import SeoText from '~/components/SeoText.vue'

interface expandedData {
  title: string
}

@Component({
  components: {
    SeoText
  },
  async asyncData () {
    return await getDailyDoa()
  }
})

export default class DailyDoaPage extends Vue {
  searchText = ''
  expandedData: expandedData = {
    title: ''
  }

  @State settingActiveTheme
  @Mutation setHeaderTitle
  @Mutation setPage

  get metaHead () {
    return {
      title: META_TITLE_DAILY_DOA,
      meta: [
        { hid: 'description', name: 'description', content: META_DESC_DAILY_DOA },
        { hid: 'og:title', property: 'og:title', content: META_TITLE_DAILY_DOA },
        { hid: 'twitter:title', name: 'twitter:title', content: META_TITLE_DAILY_DOA },
        { hid: 'theme-color', name: 'theme-color', content: this.settingActiveTheme.bgColor }
      ],
      link: [
        { rel: 'amphtml', href: `${AppConstant.PATH}amp/daily-doa/` }
      ]
    }
  }

  get filteredDailyDoa () {
    if (__isNotEmptyString(this.searchText) && this.searchText.length >= 3) {
      // @ts-ignore: Unreachable code error
      return this.dailyDoa.filter((item) => {
        const predicate = __normalizeText(item.title).includes(
          __normalizeText(this.searchText)
        )

        return predicate
      })
      // @ts-ignore: Unreachable code error
    } else { return this.dailyDoa || [] }
  }

  head () {
    return this.metaHead
  }

  onClickDoa (item: expandedData): void {
    if (this.isExpanded(item.title)) {
      this.expandedData = {
        title: ''
      }
    } else { this.expandedData = item }
  }

  isExpanded (title: string): boolean {
    return title === this.expandedData.title
  }

  beforeMount () {
    this.setHeaderTitle("Do'a Harian")
    this.setPage('daily-doa')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/search.scss';

.item{
  text-decoration: none;
  border-radius: .25em;
  padding: 1em;
  font-size: 1.3rem;
  width: 100%;
  margin: 1em 0 0 0;
  background: var(--bg-card-color);
  color: var(--text-color);

  &__title {
    font-size: 1rem;
  }
}
.collapsible{
  margin-top: 1em;
  color: var(--text-color);
}
.arabic{
  font-size: 2rem;
  width: 100%;
  text-align: right;
}
.latin{
  font-size: 1rem;
  width: 100%;
  margin-top: 1.5em;
  text-align: left;
}
.translation{
  margin-top: 2em;
  font-size: 0.9rem;
  width: 100%;
  font-style: italic;
  text-align: left;
}
</style>
