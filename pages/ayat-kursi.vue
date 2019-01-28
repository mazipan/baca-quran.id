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
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  name: 'AyatKursiPage',
  head () {
    return this.metaHead
  },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    ...mapState([
      'settingActiveTheme',
      'ayatKursi'
    ]),
    metaHead () {
      const title = 'Bacaan dan terjemah Ayat Kursi | Qur\'an Offline'
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
  mounted () {
    this.onMountedPage()
  },
  methods: {
    ...mapMutations([
      'setHeaderTitle'
    ]),
    ...mapActions([
      'fetchAyatKursi'
    ]),
    onMountedPage () {
      this.fetchAyatKursi({
        success: (data) => {
          this.setHeaderTitle('Ayat Kursi')
          setTimeout(() => {
            this.loading = false
          }, 1000)
        }
      })
    }
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
