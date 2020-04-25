<template>
  <div class="container">
    <div class="wrapper">
      <div class="arabic">
        {{ AppConstant.BISMILLAH }}
      </div>
      <div class="arabic">
        {{ ayatKursi.arabic }}
      </div>
      <div class="translation">
        {{ ayatKursi.translation }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State, Mutation } from 'vuex-class'
import { AppConstant } from '../constant'

@Component({
  async asyncData () {
    const resp = await import('~/static/data/ayat-kursi.json')
    return {
      ayatKursi: resp.data
    }
  }
})
export default class AyatKursiPage extends Vue {
  AppConstant = AppConstant

  @State settingActiveTheme;
  @Mutation setHeaderTitle;
  @Mutation setPage

  get metaHead () {
    const title = "Bacaan dan terjemahan ayat kursi | Qur'an Web"
    const description = 'Bacaan dan terjemahan ayat kursi, baca langsung dari web browser Anda, tanpa iklan, tanpa analitik, gratis sepenuhnya'
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        {
          hid: 'theme-color',
          name: 'theme-color',
          content: this.settingActiveTheme.bgColor
        }
      ]
    }
  }

  head () {
    return this.metaHead
  }

  mounted () {
    this.setHeaderTitle('Ayat Kursi')
    this.setPage('ayat-kursi')
  }

  activated () {
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
  font-size: 4rem;
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
