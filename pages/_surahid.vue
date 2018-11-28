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
          <div class="verse__header">
            <div class="verse__index tag_index">
              {{ Number(index) }}
            </div>
            <div class="verse__header--right">
              <svg
                viewBox="0 0 512 512"
                width="30px"
                height="30px"
                fill="#000"
                @click="setLastReadVerse({ surah: surahId, verse: Number(index) })">
                <path d="M128 80v380c0 3.3 3.8 5.2 6.4 3.2l116.8-92c2.9-2.1 6.8-2.1 9.6 0l116.8 92c2.6 2 6.4.1 6.4-3.2V80c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32z"/>
              </svg>
              <svg
                viewBox="0 0 512 512"
                width="30px"
                height="30px"
                fill="#000">
                <path d="M444.7 230.4l-141.1-132c-1.7-1.6-3.3-2.5-5.6-2.4-4.4.2-10 3.3-10 8v66.2c0 2-1.6 3.8-3.6 4.1C144.1 195.8 85 300.8 64.1 409.8c-.8 4.3 5 8.3 7.7 4.9 51.2-64.5 113.5-106.6 212-107.4 2.2 0 4.2 2.6 4.2 4.8v65c0 7 9.3 10.1 14.5 5.3l142.1-134.3c2.6-2.4 3.4-5.2 3.5-8.4-.1-3.2-.9-6.9-3.4-9.3z"/>
              </svg>
            </div>
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
import { mapActions, mapMutations, mapState } from 'vuex'

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
    ...mapMutations([
      'setHeaderTitle'
    ]),
    ...mapActions([
      'fetchSurahById',
      'setLastReadVerse'
    ]),
    getTranslation (indexVerse) {
      return this.currentSurah.translations.id.text[indexVerse]
    },
    onMountedDetailPage (id) {
      this.fetchSurahById({
        id,
        success: (data) => {
          this.setHeaderTitle(data.name_latin)
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
    width: 90%;
    margin: 1em auto;
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
    width: 90%;
    margin: 0 auto;
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
  &__header{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__arabic {
    font-size: 2rem;
    width: 100%;
    float: right;
    text-align: right;
    margin-top: .25em;
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
