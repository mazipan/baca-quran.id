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
    return {
      title: 'Ayat Kursi | Qur\'an Offline'
    }
  },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    ...mapState([
      'ayatKursi'
    ])
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
