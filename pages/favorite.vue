<template>
  <div class="container">
    <div class="feed clearfix">
      <div class="feed__title">
        <IosStarOutlineIcon w="1em" h="1em" />
        Surat favorit:
      </div>
      <div class="feed__item clearfix">
        <client-only>
          <Surah
            v-if="isHaveFav"
            :surah-array="surahFavorite"
            source="favorite" />
          <div v-else class="feed__empty">
            Anda belum punya surat yang ditandai sebagai favorit.
          </div>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State, Mutation } from 'vuex-class'

import IosStarOutlineIcon from 'vue-ionicons/dist/js/ios-star-outline'

import Surah from '~/components/Surah.vue'
import { __isNotEmptyArray } from '~/utils/index'
import { AppConstant } from '~/constant'

@Component({
  components: {
    IosStarOutlineIcon,
    Surah
  }
})
export default class FavoritePage extends Vue {
  @State settingActiveTheme;
  @State surahFavorite;
  @Mutation setHeaderTitle;
  @Mutation setPage;

  get metaHead () {
    const title = "Baca berbagai surat favorit dalam Al-Qur'an | Qur'an Web"
    return {
      title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        {
          hid: 'theme-color',
          name: 'theme-color',
          content: this.settingActiveTheme.bgColor
        }
      ]
    }
  }

  get isHaveFav () {
    return __isNotEmptyArray(this.surahFavorite)
  }

  head () {
    return this.metaHead
  }

  beforeMount () {
    this.setHeaderTitle(AppConstant.FAVORITE)
    this.setPage('favorite')
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/feed.scss";
</style>
