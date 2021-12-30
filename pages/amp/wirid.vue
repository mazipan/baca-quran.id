<template>
  <div class="container wirid">
    <div class="wrapper">
      <div class="wrapper__item">
        <div
          v-for="item in wiridData"
          :key="item.id"
          class="item">
          <div class="arabic font-arabic">
            {{ item.arabic }}
          </div>
          <div v-if="item.tnc" class="tnc">
            {{ item.tnc }}
          </div>
          <div v-if="item.times > 1" class="times">
            {{ item.times }}x
          </div>
        </div>
      </div>
      <SeoText :paragraph="`Bacaan, urutan dan tata cara Wirid setelah sholat. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.`" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State, Mutation } from 'vuex-class'
import { AppConstant, META_TITLE_WIRID, META_DESC_WIRID } from '~/constant'

import SeoText from '~/components/SeoText.vue'
import { getWirid } from '~/utils/asyncData'

@Component({
  components: {
    SeoText
  },
  async asyncData () {
    return await getWirid()
  }
})

export default class WiridPage extends Vue {
  @State settingActiveTheme
  @Mutation setHeaderTitle
  @Mutation setPage

  get metaHead () {
    return {
      title: META_TITLE_WIRID,
      meta: [
        { hid: 'description', name: 'description', content: META_DESC_WIRID },
        { hid: 'og:title', property: 'og:title', content: META_TITLE_WIRID },
        { hid: 'twitter:title', name: 'twitter:title', content: META_TITLE_WIRID },
        { hid: 'theme-color', name: 'theme-color', content: this.settingActiveTheme.bgColor }
      ],
      link: [
        { rel: 'canonical', href: `${AppConstant.PATH}wirid/` }
      ]
    }
  }

  head () {
    return this.metaHead
  }

  beforeMount () {
    this.setHeaderTitle('Wirid')
    this.setPage('wirid')
  }
}
</script>

<style lang="scss" scoped>
.item{
  position: relative;
  text-decoration: none;
  border-radius: .25em;
  padding: 1em;
  font-size: 1.3rem;
  width: 100%;
  margin: 1em 0 0 0;
  background: var(--bg-card-color);
  color: var(--text-color);
}
.times{
  position: absolute;
  top: 10px;
}
.collapsible{
  margin-top: 1em;
  color: var(--text-color);
}
.arabic{
  font-size: 1.5rem;
  width: 100%;
  text-align: right;
}

.tnc{
  margin-top: 2em;
  font-size: 0.9rem;
  width: 100%;
  text-align: left;
}
</style>
