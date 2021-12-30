<template>
  <div class="container">
    <div class="feed clearfix">
      <div class="feed__title">
        <IosBookmarkIcon w="1em" h="1em" />Ayat terakhir dibaca:
      </div>
      <div class="feed__item clearfix">
        <client-only>
          <div v-if="Boolean(lastReadVerseData)" class="last-read-section">
            <LastReadCard :surah="lastReadVerseData" />
          </div>

          <div v-if="!Boolean(lastReadVerseData)" class="feed__empty">
            Anda belum pernah menandai salah satu ayat sebagai terakhir dibaca.
          </div>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State, Mutation } from 'vuex-class'

import IosBookmarkIcon from 'vue-ionicons/dist/js/ios-bookmark'

import LastReadCard from '~/components/LastReadCard.vue'

import { AppConstant, META_TITLE_LAST_VERSE } from '~/constant'
import { getAllSurah } from '~/utils/asyncData'

@Component({
  components: {
    IosBookmarkIcon,
    LastReadCard
  },
  async asyncData () {
    return await getAllSurah()
  }
})
export default class LastVersePage extends Vue {
  @State settingActiveTheme;
  @State lastReadVerse;
  @Mutation setHeaderTitle;
  @Mutation setPage;

  get metaHead () {
    return {
      title: META_TITLE_LAST_VERSE,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: META_TITLE_LAST_VERSE
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: META_TITLE_LAST_VERSE
        },
        {
          hid: 'theme-color',
          name: 'theme-color',
          content: this.settingActiveTheme.bgColor
        }
      ]
    }
  }

  get lastReadVerseData () {
    if (this.lastReadVerse) {
      // @ts-ignore: Unreachable code error
      const res = this.allSurahList.find(
        item => item.index === this.lastReadVerse.surah
      )
      return Object.assign({}, res, { verse: this.lastReadVerse.verse })
    }
    return null
  }

  head () {
    return this.metaHead
  }

  beforeMount () {
    this.setHeaderTitle(AppConstant.LAST_READ)
    this.setPage('last-verse')
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/feed.scss";
</style>
