<template>
  <div class="container">
    <div class="feed clearfix">
      <div class="feed__title">
        <IosStarOutlineIcon
          w="1em"
          h="1em" />
        Surat favorit:
      </div>
      <div class="feed__item clearfix">
        <SurahCard
          v-if="isHaveFav"
          :surah-array="surahFavorite" />
        <div
          v-else
          class="feed__empty">
          Anda belum punya surat yang ditandai sebagai favorit.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IosStarOutlineIcon from 'vue-ionicons/dist/js/ios-star-outline'

import { mapMutations, mapState } from 'vuex'

import SurahCard from '../components/SurahCard.vue'
import { __isNotEmptyArray } from '../utils/index'
import { AppConstant } from '../constant/index.js'

export default {
  name: 'FavoritePage',
  head () {
    return this.metaHead
  },
  components: {
    IosStarOutlineIcon,
    SurahCard
  },
  computed: {
    ...mapState([
      'settingActiveTheme',
      'surahFavorite'
    ]),
    metaHead () {
      const title = 'Surat Favorit Anda | Qur\'an Offline'
      return {
        title,
        meta: [
          { hid: 'og:title', property: 'og:title', content: title },
          { hid: 'twitter:title', name: 'twitter:title', content: title },
          { hid: 'theme-color', name: 'theme-color', content: this.settingActiveTheme.bgColor }
        ]
      }
    },
    isHaveFav () {
      return __isNotEmptyArray(this.surahFavorite)
    }
  },
  mounted () {
    this.setHeaderTitle(AppConstant.FAVORITE)
  },
  methods: {
    ...mapMutations([
      'setHeaderTitle'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/feed.scss';
</style>
