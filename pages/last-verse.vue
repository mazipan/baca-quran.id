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
import IosBookmarkIcon from 'vue-ionicons/dist/js/ios-bookmark'
import { mapActions, mapMutations, mapState } from 'vuex'

import LastReadCard from '../components/LastReadCard.vue'

import { AppConstant } from '../constant/index.js'
import { __isNotNull } from '../utils/index'

export default {
  name: 'LastVersePage',
  head () {
    return this.metaHead
  },
  components: {
    IosBookmarkIcon,
    LastReadCard
  },
  computed: {
    ...mapState([
      'settingActiveTheme',
      'allSurahList',
      'lastReadVerse'
    ]),
    metaHead () {
      const title = 'Ayat Terakhir Dibaca | Qur\'an Offline'
      return {
        title,
        meta: [
          { hid: 'og:title', property: 'og:title', content: title },
          { hid: 'twitter:title', name: 'twitter:title', content: title },
          { hid: 'theme-color', name: 'theme-color', content: this.settingActiveTheme.bgColor }
        ]
      }
    },
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
