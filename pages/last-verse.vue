<template>
  <div class="container">
    <div class="feed clearfix">
      <div class="feed__title">
        <IosBookmarkIcon
          w="1em"
          h="1em" />Ayat terakhir dibaca:
      </div>
      <div class="feed__item clearfix">
        <div v-if="isHaveLastRead">
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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'

import IosBookmarkIcon from 'vue-ionicons/dist/js/ios-bookmark'

import LastReadCard from '../components/LastReadCard.vue'

import { AppConstant } from '../constant'
import { __isNotNull } from '../utils/index'
import { getAllSurah } from '../services/index'

@Component({
  components: {
    IosBookmarkIcon,
    LastReadCard
  },
  async asyncData() {
    const resp = await import(/* webpackChunkName: "surah-info" */'~/static/data/surah-info.json')
    return {
      allSurahList: resp.surah_info.map((item, idx) => {
        return Object.assign({}, item, { index: idx + 1 })
      })
    }
  }
})

export default class LastVersePage extends Vue {
  @State settingActiveTheme;
  @State lastReadVerse;
  @Mutation setHeaderTitle

  get metaHead() {
    const title = "Ayat terakhir dibaca | Qur'an Offline"
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

  get isHaveLastRead() {
    return __isNotNull(this.lastReadVerse && this.lastReadVerse.surah)
  }

  get lastReadVerseData() {
    if (this.isHaveLastRead) {
      // @ts-ignore: Unreachable code error
      const res = this.allSurahList.find(
        item => item.index === this.lastReadVerse.surah
      )
      return Object.assign({}, res, { verse: this.lastReadVerse.verse })
    }
    return null
  }

  head() {
    return this.metaHead
  }

  mounted() {
    this.setHeaderTitle(AppConstant.LAST_READ)
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/feed.scss";
</style>
