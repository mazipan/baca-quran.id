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
            :to="getSurahDetailUrl(surah, surah.index)"
            :key="surah.index">
            {{ surah.index }} : {{ surah.latin }}
          </nuxt-link>
        </div>
      </div>

      <div class="coming-soon clearfix">
        <div
          class="coming-soon__title">
          Terakhir Dibaca
        </div>
        <div class="coming-soon__content">
          (coming soon)
        </div>
      </div>

      <div class="coming-soon clearfix">
        <div
          class="coming-soon__title">
          Surat Favorit
        </div>
        <div class="coming-soon__content">
          (coming soon)
        </div>
      </div>

      <div class="recommendation clearfix">
        <div class="recommendation__title">
          Surat Rekomendasi:
        </div>
        <div class="recommendation__item clearfix">
          <nuxt-link
            v-for="surah in surahStaticRecommendation"
            :to="getSurahDetailUrl(surah, surah.index)"
            :key="surah.index"
            class="has-shadow">
            <span class="text-big">{{ surah.arabic }}</span>
            <br>
            {{ surah.index }} : {{ surah.latin }}
          </nuxt-link>
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
import { mapActions, mapState } from 'vuex'

import { surahStaticRecommendation } from '../constant/index.js'
import { EventBus } from '../eventbus/index'
import { __isNotEmptyString } from '../utils/index'

export default {
  name: 'PageIndex',
  data () {
    return {
      loading: true,
      searchText: '',
      surahStaticRecommendation
    }
  },
  computed: {
    ...mapState([
      'allSurahList'
    ]),
    isHaveSource () {
      return __isNotEmptyString(this.$route.query.source)
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
    EventBus.$emit('changeSurah')
    this.fetchSurahInfo()
  },
  methods: {
    ...mapActions([
      'fetchAllSurah'
    ]),
    getSurahDetailUrl (surah, index) {
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
    font-size: 1.5rem;
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

.recommendation{
  display: block;
  text-align: center;
  width: 90%;
  margin: 1em auto;

  &__title{
    text-align: left;
    font-size: 1.5rem;
  }

  &__item {
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
      padding: 1em 2em;
    }
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
