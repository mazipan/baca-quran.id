<template>
  <section class="container">
    <div
      class="detail">
      <div class="detail__header">
        <div class="detail__header_index">
          {{ currentSurah.number }}
        </div>
        <div class="detail__header_content">
          <div>{{ currentSurah.name }}</div>
          <small>({{ currentSurah.name_latin }} - {{ currentSurah.translations.id.name }})</small>
        </div>
      </div>

      <div class="detail__content">
        <div
          v-for="(verse, index) in currentSurah.text"
          :key="index"
          :id="`verse-${index}`"
          class="verse block_content has-shadow">
          <div class="verse__index tag_index">
            {{ Number(index) }}
          </div>
          <div class="divider clearfix">
            <div class="verse__arabic">
              {{ verse }}
            </div>
          </div>
          <div class="divider clearfix">
            <div class="verse__translation">
              {{ getTranslation(index) }}
            </div>
          </div>
        </div>
      </div>

      <div class="detail__footer">
        <nuxt-link
          :to="`/${surahId - 1}`"
          class="detail__footer_item detail__footer_prev">
          <svg
            v-if="isHavePrev"
            width="30px"
            height="30px"
            viewBox="0 0 512 512">
            <path d="M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"/>
          </svg>
        </nuxt-link>
        <div class="detail__footer_item detail__footer_title">
          {{ currentSurah.name }}
        </div>
        <nuxt-link
          :to="`/${surahId + 1}`"
          class="detail__footer_item detail__footer_next">
          <svg
            v-if="isHaveNext"
            width="30px"
            height="30px"
            viewBox="0 0 512 512">
            <path d="M85 277.375h259.704L225.002 397.077 256 427l171-171L256 85l-29.922 29.924 118.626 119.701H85v42.75z"/>
          </svg>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import { EventBus } from '../eventbus/index'

export default {
  name: 'PageSurahDetail',
  data () {
    return {
      loading: true
    }
  },
  computed: {
    ...mapState([
      'surahDetail'
    ]),
    currentSurah () {
      return this.surahDetail
    },
    surahId () {
      return Number(this.$route.params.surahid)
    },
    isValidSurah () {
      return this.surahId > 0 && this.surahId <= 114
    },
    isHavePrev () {
      return this.surahId > 1
    },
    isHaveNext () {
      return this.surahId < 114
    }
  },
  mounted () {
    this.onMountedDetailPage(this.surahId)
  },
  methods: {
    ...mapActions([
      'fetchSurahById'
    ]),
    getTranslation (indexVerse) {
      return this.currentSurah.translations.id.text[indexVerse]
    },
    onMountedDetailPage (id) {
      this.fetchSurahById({
        id,
        success: (data) => {
          EventBus.$emit('changeSurah', data.name_latin)
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
@import '@/assets/_variables.scss';

.detail {
  &__header {
    width: 95%;
    margin: 0 auto;
    padding: 0.25em;
    font-size: 2rem;
    display: flex;
    align-content: center;
    align-items: center;

    &_index {
      background-color: #52e0a1;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      display: flex;
      align-items: center;
      height: 100px;
      padding: .25em .5em;
    }
    &_content {
      background-color: #000;
      color: #52e0a1;
      flex-grow: 1;
      justify-content: space-between;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: right;
      height: 100px;
      padding: .25em .5em;
      small {
        font-size: 1rem;
      }
    }
  }
  &__content {
    margin-bottom: 100px;
  }
  &__footer {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 10;
    display: table;
    margin: 0;
    height: 60px;
    text-align: center;
    width: 100%;
    background: $theme;
    color: $foreground;
    &_item {
      display: table-cell;
      vertical-align: middle;
    }
    &_title {
      font-size: 2rem;
    }
    &_prev,
    &_next {
      width: 50px;
    }
  }
}

.verse {
  &__arabic {
    font-size: 2rem;
    width: 80%;
    float: right;
    text-align: right;
  }
  &__translation {
    font-size: 0.9rem;
    width: 100%;
    text-align: left;
    font-style: italic;
    margin-top: 1.5em;
  }
}
</style>
