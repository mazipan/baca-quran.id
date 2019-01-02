<template>
  <div class="container">
    <div class="wrapper">
      <div class="item_wrapper">
        <div
          v-for="item in asmaulHusna"
          :key="item.index"
          class="item">
          <div class="arabic">
            {{ item.arabic }}
          </div>
          <div class="translation">
            {{ item.latin }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  name: 'AsmaulHusnaPage',
  data () {
    return {
      loading: true
    }
  },
  computed: {
    ...mapState([
      'asmaulHusna'
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
      'fetchAsmaulHusna'
    ]),
    onMountedPage () {
      this.fetchAsmaulHusna({
        success: (data) => {
          this.setHeaderTitle('Asmaul Husna')
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
  background-color: #41b883;
  color: #000;
  border-radius: .25em;
  margin: 1em 1em 0 0;
  padding: 1.5em;
  text-align: center;
  @media screen and (min-width: 768px) {
    min-width: 10%;
  }
  @media screen and (max-width: 768px) {
    min-width: 45%;
  }
}
.arabic{
  font-size: 2rem;
  width: 100%;
}
.translation{
  font-size: 0.9rem;
  width: 100%;
  font-style: italic;
  margin-top: 1.5em;
}
</style>
