<template>
  <div class="container">
    <div class="search clearfix">
      <label
        for="search-asmaul-husna"
        class="search__title">
        Pencarian cepat
      </label>
      <input
        id="search-asmaul-husna"
        v-model="searchText"
        type="search"
        name="search"
        placeholder="Cari asmaul husna">
    </div>
    <div class="wrapper">
      <div class="item_wrapper">
        <div
          v-for="item in filteredAsmaulHusna"
          :key="item.index"
          class="item">
          <div
            class="arabic font-arabic"
            dir="rtl">
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
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import { __isNotEmptyString, __normalizeText } from '../utils/index'

export default {
  name: 'AsmaulHusnaPage',
  head () {
    return {
      title: 'Asmaul Husna | Qur\'an Offline'
    }
  },
  data () {
    return {
      loading: true,
      searchText: ''
    }
  },
  computed: {
    ...mapState([
      'asmaulHusna'
    ]),
    filteredAsmaulHusna () {
      if (__isNotEmptyString(this.searchText) && this.searchText.length >= 3) {
        return this.asmaulHusna.filter(item => {
          let predicateTranslation = __normalizeText(item.translation_id).includes(
            __normalizeText(this.searchText)
          )
          let predicateLatin = __normalizeText(item.latin).includes(
            __normalizeText(this.searchText)
          )

          return predicateLatin || predicateTranslation
        })
      } else return this.asmaulHusna || []
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
@import '@/assets/search.scss';

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
  padding: 1.5em;
  text-align: center;
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
  width: 100%;
}
.latin{
  font-size: 1.3rem;
  width: 100%;
  margin-top: 1.5em;
}
.translation{
  font-size: 0.9rem;
  width: 100%;
  font-style: italic;
  line-height: 2;
}
</style>
