<template>
  <div class="container">
    <div class="wrapper">
      <div class="arabic">
        {{ ayatKursi.arabic }}
      </div>
      <div class="translation">
        {{ ayatKursi.translation }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getAyatKursi } from '../services/index'

export default {
  name: 'AyatKursiPage',
  head() {
    return this.metaHead
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState([
      'settingActiveTheme'
    ]),
    metaHead() {
      const title = 'Bacaan dan terjemah ayat kursi | Qur\'an Offline'
      return {
        title,
        meta: [
          { hid: 'og:title', property: 'og:title', content: title },
          { hid: 'twitter:title', name: 'twitter:title', content: title },
          { hid: 'theme-color', name: 'theme-color', content: this.settingActiveTheme.bgColor }
        ]
      }
    }
  },
  async asyncData() {
    const data = await getAyatKursi()
    return {
      ayatKursi: data.data.data
    }
  },
  fetch({ store }) {
    store.commit('setHeaderTitle', 'Ayat Kursi')
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  width: 90%;
  margin: 1em auto;
}
.arabic{
  font-size: 4rem;
  width: 100%;
  margin-top: 1em;
  text-align: right;
}
.translation{
  font-size: 2rem;
  width: 100%;
  font-style: italic;
  margin-top: 1.5em;
  text-align: left;
}
</style>
