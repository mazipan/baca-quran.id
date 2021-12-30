<template>
  <div class="container">
    <div class="wrapper">
      <div class="arabic font-arabic" style="text-align:center;">
        {{ AppConstant.BISMILLAH }}
      </div>
      <div class="arabic font-arabic">
        {{ ayatKursi.arabic }}
      </div>
      <div class="translation">
        {{ ayatKursi.translation }}
      </div>
      <SeoText :paragraph="`Bacaan Ayat Kursi dengan terjemahan bahasa Indonesia. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.`" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State, Mutation } from 'vuex-class'
import { AppConstant, META_TITLE_AYAT_KURSI, META_DESC_AYAT_KURSI } from '~/constant/index'

import SeoText from '~/components/SeoText.vue'
import { getAyatKursi } from '~/utils/asyncData'

@Component({
  components: {
    SeoText
  },
  async asyncData () {
    return await getAyatKursi()
  }
})
export default class AyatKursiPage extends Vue {
  AppConstant = AppConstant

  @State settingActiveTheme;
  @Mutation setHeaderTitle;
  @Mutation setPage

  get metaHead () {
    return {
      title: META_TITLE_AYAT_KURSI,
      meta: [
        { hid: 'description', name: 'description', content: META_DESC_AYAT_KURSI },
        { hid: 'og:title', property: 'og:title', content: META_TITLE_AYAT_KURSI },
        { hid: 'twitter:title', name: 'twitter:title', content: META_TITLE_AYAT_KURSI },
        {
          hid: 'theme-color',
          name: 'theme-color',
          content: this.settingActiveTheme.bgColor
        }
      ],
      link: [
        { rel: 'canonical', href: `${AppConstant.PATH}ayat-kursi/` }
      ]
    }
  }

  head () {
    return this.metaHead
  }

  beforeMount () {
    this.setHeaderTitle('Ayat Kursi')
    this.setPage('ayat-kursi')
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 90%;
  margin: 1em auto;
}
.arabic {
  font-size: 2rem;
  width: 100%;
  margin-top: 1em;
  text-align: right;
}
.translation {
  font-size: 2rem;
  width: 100%;
  font-style: italic;
  margin-top: 1.5em;
  text-align: left;
}
@media screen and (max-width: 641px) {
  .arabic {
    font-size: 2rem;
  }
  .translation {
    font-size: 1rem;
  }
}
</style>
