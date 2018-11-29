<template>
  <div class="verse__root">
    <div
      v-for="(verse, index) in verseArray"
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
            @click="doSetLastReadVerse({ surah: surahId, verse: Number(index) })">
            <path d="M128 80v380c0 3.3 3.8 5.2 6.4 3.2l116.8-92c2.9-2.1 6.8-2.1 9.6 0l116.8 92c2.6 2 6.4.1 6.4-3.2V80c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32z"/>
          </svg>
          <svg
            viewBox="0 0 512 512"
            width="30px"
            height="30px"
            fill="#000"
            @click="shareVerse(verse, Number(index))">
            <path d="M383.822 344.427c-16.045 0-31.024 5.326-41.721 15.979l-152.957-88.42c1.071-5.328 2.142-9.593 2.142-14.919 0-5.328-1.071-9.593-2.142-14.919l150.826-87.35c11.762 10.653 26.741 17.041 43.852 17.041 35.295 0 64.178-28.766 64.178-63.92C448 72.767 419.117 44 383.822 44c-35.297 0-64.179 28.767-64.179 63.92 0 5.327 1.065 9.593 2.142 14.919l-150.821 87.35c-11.767-10.654-26.741-17.041-43.856-17.041-35.296 0-63.108 28.766-63.108 63.92 0 35.153 28.877 63.92 64.178 63.92 17.115 0 32.089-6.389 43.856-17.042l151.891 88.421c-1.076 4.255-2.141 8.521-2.141 13.847 0 34.094 27.806 61.787 62.037 61.787 34.229 0 62.036-27.693 62.036-61.787.001-34.094-27.805-61.787-62.035-61.787z"/>
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
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'VerseCard',
  props: {
    verseArray: {
      type: [Object, Array],
      default: () => ({})
    },
    translations: {
      type: Object,
      default: () => ({})
    },
    surahId: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapState([
      'surahFavorite'
    ])
  },
  methods: {
    ...mapActions([
      'setLastReadVerse',
      'showNotification'
    ]),
    getTranslation (indexVerse) {
      return this.translations.id.text[indexVerse]
    },
    doSetLastReadVerse (data) {
      this.setLastReadVerse(data)
      this.showNotification({
        title: 'Pesan Sukses',
        message: 'Ayat telah ditambahkan ke terakhir dibaca.'
      })
    },
    shareVerse (verse, index) {
      /* eslint-disable */
      if (navigator.share) {
        navigator.share({
          title: `QS ${this.surahId}:${index}`,
          text: `${verse}

          ${this.getTranslation(index)} (QS ${this.surahId}:${index})`,
          url: `https://quran-offline.netlify.com/${this.surahId}#verse-${index}`,
        })
      }
    },
  }
}
</script>

<style lang="scss" scoped>
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
