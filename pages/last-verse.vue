<template>
  <div class="container">
    <div class="feed clearfix">
      <div class="feed__title">
        <IosBookmarkIcon
          w="1em"
          h="1em" />
        Ayat terakhir dibaca:
      </div>
      <div class="feed__item clearfix">
        <div
          v-if="isHaveLastRead">
          <LastReadCard :surah="lastReadVerseData" />
        </div>
        <div
          v-else
          class="feed__empty">
          Anda belum pernah menandai salah satu ayat sebagai terakhir dibaca.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IosBookmarkIcon from 'vue-ionicons/dist/ios-bookmark'
import { mapActions, mapMutations, mapState } from 'vuex'

import LastReadCard from '../components/LastReadCard.vue'

import { AppConstant } from '../constant/index.js'
import { __isNotNull } from '../utils/index'

export default {
  name: 'LastVersePage',
  components: {
    IosBookmarkIcon,
    LastReadCard
  },
  computed: {
    ...mapState([
      'allSurahList',
      'lastReadVerse'
    ]),
    isHaveLastRead () {
      return __isNotNull(this.lastReadVerse && this.lastReadVerse.surah)
    },
    lastReadVerseData () {
      if (this.isHaveLastRead) {
        const res = this.allSurahList.find(item => item.index === this.lastReadVerse.surah)
        return Object.assign({}, res, { verse: this.lastReadVerse.verse })
      }
      return null
    }
  },
  mounted () {
    this.setHeaderTitle(AppConstant.LAST_READ)
    this.fetchSurahInfo()
  },
  methods: {
    ...mapMutations([
      'setHeaderTitle'
    ]),
    ...mapActions([
      'fetchAllSurah'
    ]),
    fetchSurahInfo () {
      this.fetchAllSurah({
        success: () => {}
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/feed.scss';

</style>
