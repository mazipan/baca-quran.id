<template>
  <div class="container asmaul-husna">
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
    return this.metaHead
  },
  data () {
    return {
      loading: true,
      searchText: ''
    }
  },
  computed: {
    ...mapState([
      'settingActiveTheme',
      'asmaulHusna'
    ]),
    metaHead () {
      const title = this.$t('pageTitle.asmaulHusna')
      return {
        title,
        meta: [
          { hid: 'og:title', property: 'og:title', content: title },
          { hid: 'twitter:title', name: 'twitter:title', content: title },
          { hid: 'theme-color', name: 'theme-color', content: this.settingActiveTheme.bgColor }
        ]
      }
    },
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
          this.loading = false
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
