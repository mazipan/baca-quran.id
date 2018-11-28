<template>
  <section class="container">
    <div v-if="loading">
      <div
        v-for="i in 5"
        :key="i"
        class="skeleton skeleton_row"/>
    </div>
    <template v-else>
      <div class="search clearfix">
        <input
          v-model="searchText"
          type="search"
          name="search"
          placeholder="Surat apa yang ingin dibaca hari ini?">
        <div
          v-if="filteredSurah.length > 0"
          class="search__title">
          Hasil Pencarian:
        </div>
        <div class="search__result clearfix">
          <nuxt-link
            v-for="surah in filteredSurah"
            :to="getSurahDetailUrl(surah.index)"
            :key="surah.index">
            {{ surah.index }} : {{ surah.latin }}
          </nuxt-link>
        </div>
      </div>

      <div class="feed clearfix">
        <div class="feed__title">
          Ayat terakhir dibaca:
        </div>
        <div class="feed__item clearfix">
          <div
            v-if="isHaveLastRead">
            <LastReadCard :surah="lastReadVerseData"/>
          </div>
          <div
            v-else
            class="feed__empty">
            Anda belum pernah menandai salah satu ayat sebagai terakhir dibaca.
            <br><br>
            Untuk menandai terakhir dibaca, silahkan tekan ikon
            <svg
              viewBox="0 0 512 512"
              width="20px"
              height="20px"
              fill="#41b883">
              <path d="M128 80v380c0 3.3 3.8 5.2 6.4 3.2l116.8-92c2.9-2.1 6.8-2.1 9.6 0l116.8 92c2.6 2 6.4.1 6.4-3.2V80c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32z"/>
            </svg>
            pada ayat yang dipilih.
          </div>
        </div>
      </div>

      <div class="feed clearfix">
        <div class="feed__title">
          Surat favorit:
        </div>
        <div class="feed__item clearfix">
          <SurahCard
            v-if="isHaveFav"
            :surah-array="surahFavorite"/>
          <div
            v-else
            class="feed__empty">
            Anda belum punya surat yang ditandai sebagai favorit.
            <br><br>
            Untuk menambahkan surat ke dalam daftar favorit, silahkan tekan ikon
            <svg
              viewBox="0 0 512 512"
              width="20px"
              height="20px"
              fill="#41b883">
              <path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16zm-127.2 92.5c-10 7.2-14.2 20.2-10.2 31.8l30.1 87.7c1.3 3.7-2.9 6.8-6.1 4.6l-77.4-55.2c-4.9-3.5-10.6-5.2-16.3-5.2-5.7 0-11.4 1.7-16.2 5.2l-77.4 55.1c-3.2 2.3-7.4-.9-6.1-4.6l30.1-87.7c4-11.8-.2-24.8-10.3-32l-81-57.1c-3.2-2.2-1.6-7.3 2.3-7.3H196c12 0 22.7-7.7 26.5-19.1l29.6-88.2c1.2-3.6 6.4-3.6 7.6 0l29.6 88.2c3.8 11.4 14.5 19.1 26.5 19.1h97.3c3.9 0 5.5 5 2.3 7.2l-79.6 57.5z"/>
            </svg>
            pada daftar surat.
          </div>
        </div>
      </div>

      <div class="feed clearfix">
        <div class="feed__title">
          Surat rekomendasi:
        </div>
        <div class="feed__item clearfix">
          <SurahCard :surah-array="surahStaticRecommendation"/>
        </div>
      </div>

      <div class="all-surah clearfix">
        <nuxt-link
          class="all-surah__title"
          to="/all-surah">
          Lihat semua surat
        </nuxt-link>
      </div>
    </template>
  </section>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

import SurahCard from '../components/SurahCard.vue'
import LastReadCard from '../components/LastReadCard.vue'
import { AppConstant, surahStaticRecommendation } from '../constant/index.js'
import { __isNotNull, __isNotEmptyString, __isNotEmptyArray } from '../utils/index'

export default {
  name: 'PageIndex',
  components: {
    SurahCard,
    LastReadCard
  },
  data () {
    return {
      loading: true,
      searchText: '',
      surahStaticRecommendation
    }
  },
  computed: {
    ...mapState([
      'allSurahList',
      'surahFavorite',
      'lastReadVerse'
    ]),
    isHaveFav () {
      return __isNotEmptyArray(this.surahFavorite)
    },
    isHaveLastRead () {
      return __isNotNull(this.lastReadVerse && this.lastReadVerse.surah)
    },
    isHaveSource () {
      return __isNotEmptyString(this.$route.query.source)
    },
    lastReadVerseData () {
      if (this.isHaveLastRead) {
        const res = this.allSurahList.find(item => item.index === this.lastReadVerse.surah)
        return Object.assign({}, res, { verse: this.lastReadVerse.verse })
      }
      return null
    },
    filteredSurah () {
      if (__isNotEmptyString(this.searchText) && this.searchText.length >= 3) {
        const normalizeText = (text) => {
          return text.toLowerCase().replace(/[\W_]+/g, '')
        }
        return this.allSurahList.filter(item => {
          let predicateTranslation = normalizeText(item.translation).includes(
            normalizeText(this.searchText)
          )
          let predicateLatin = normalizeText(item.latin).includes(
            normalizeText(this.searchText)
          )

          return predicateLatin || predicateTranslation
        })
      } else return []
    }
  },
  mounted () {
    this.setHeaderTitle(AppConstant.TITLE)
    this.fetchSurahInfo()
  },
  methods: {
    ...mapMutations([
      'setHeaderTitle'
    ]),
    ...mapActions([
      'fetchAllSurah'
    ]),
    getSurahDetailUrl (index) {
      return `/${index}`
    },
    fetchSurahInfo () {
      this.fetchAllSurah({
        success: () => {
          if (!this.isHaveSource) {
            setTimeout(() => {
              this.loading = false
            }, 1000)
          } else this.loading = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.text-big{
  font-size: 2rem;
}
.search{
  display: block;
  text-align: center;
  width: 90%;
  margin: 1em auto;

  input{
    -webkit-appearance: none;
    width: 100%;
    padding: 1rem;
    outline: none;
    border: none;
    background-color: #fff;
    color: #41b883;
    border: 1px solid #c6f3df;
    font-size: 1rem;
    border-radius: 4px;
  }

  &__title{
    text-align: left;
    font-size: 1.5rem;
    margin-top: 1em;
  }
  &__result {
    margin-top: 1em;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;

    a {
      text-decoration: none;
      background-color: #41b883;
      color: #000;
      border-radius: .25em;
      margin: .5em .5em 0 0;
      padding: 1em 1em;
    }
  }
}

.feed{
  display: block;
  width: 90%;
  margin: 1em auto;

  &__title{
    text-align: left;
    font-size: 1.5rem;
  }
  &__empty{
    text-align: left;
    padding-top: 1em;
    color: #41b883;
    font-style: italic;
  }
}

.all-surah{
  display: block;
  text-align: left;
  width: 90%;
  margin: 1em auto;

  &__title{
    text-align: left;
    font-size: 1.5rem;
  }
}

.coming-soon{
  display: block;
  text-align: left;
  width: 90%;
  margin: 1em auto;

  &__title{
    text-align: left;
    font-size: 1.5rem;
    color: #cac9c9;
  }

  &__content{
    margin-top: 1em;
    color: #cac9c9;
  }
}
</style>
