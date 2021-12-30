<template>
  <div class="container asmaul-husna">
    <div class="wrapper">
      <div class="item_wrapper">
        <div
          v-for="item in asmaulHusna"
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

import { AppConstant, META_TITLE_ASMAUL_HUSNA, META_DESC_ASMAUL_HUSNA } from '~/constant/index'
import { getAsmaulHusna } from '~/utils/asyncData'

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
        { rel: 'canonical', href: `${AppConstant.PATH}asmaul-husna/` }
      ]
    }
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
