<template>
  <div class="container daily-doa">
    <div class="wrapper">
      <div class="wrapper__item">
        <div
          v-for="item in dailyDoa"
          :key="item.title"
          class="item">
          <div class="item__title">
            {{ item.title }}
          </div>
          <div
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

import { AppConstant, META_TITLE_DAILY_DOA, META_DESC_DAILY_DOA } from '~/constant/index'

import SeoText from '~/components/SeoText.vue'
import { getDailyDoa } from '~/utils/asyncData'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        { rel: 'canonical', href: `${AppConstant.PATH}daily-doa/` }
      ]
    }
  }

  head () {
    return this.metaHead
  }

  beforeMount () {
    this.setHeaderTitle("Do'a Harian")
    this.setPage('daily-doa')
  }
}
</script>

<style lang="scss" scoped>
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
