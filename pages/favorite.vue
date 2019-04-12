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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'

import IosStarOutlineIcon from 'vue-ionicons/dist/js/ios-star-outline'

import SurahCard from '../components/SurahCard.vue'
import { __isNotEmptyArray } from '../utils/index'
import { AppConstant } from '../constant'

@Component({
  components: {
    IosStarOutlineIcon,
    SurahCard
  }
})

export default class FavoritePage extends Vue {
  @State settingActiveTheme;
  @State surahFavorite;
  @Mutation setHeaderTitle;

  get metaHead() {
    const title = "Baca berbagai surat favorit dalam Al-Qur'an | Qur'an Offline"
    return {
      title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'theme-color', name: 'theme-color', content: this.settingActiveTheme.bgColor }
      ]
    }
  }

  get isHaveFav() {
    return __isNotEmptyArray(this.surahFavorite)
  }

  head() {
    return this.metaHead
  }

  mounted() {
    this.setHeaderTitle(AppConstant.FAVORITE)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/feed.scss';
</style>
