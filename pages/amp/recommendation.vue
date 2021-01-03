<template>
  <div class="container">
    <div class="feed clearfix">
      <div class="feed__title">
        <IosNavigateIcon
          w="1em"
          h="1em" />
        Surat rekomendasi:
      </div>
      <div class="feed__item clearfix">
        <Surah :surah-array="surahRecommendation" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State, Mutation } from 'vuex-class'

import IosNavigateIcon from 'vue-ionicons/dist/js/ios-navigate'

import Surah from '~/components/Surah.vue'
import { AppConstant, META_TITLE_RECOMMENDATION, META_DESC_RECOMMENDATION } from '~/constant'
import surahRecommendation from '~/constant/surah-recommendation'

@Component({
  components: {
    IosNavigateIcon,
    Surah
  }
})

export default class RecommendationPage extends Vue {
  surahRecommendation = surahRecommendation.data

  @State settingActiveTheme;
  @Mutation setHeaderTitle;
  @Mutation setPage

  get metaHead () {
    return {
      title: META_TITLE_RECOMMENDATION,
      meta: [
        { hid: 'description', name: 'description', content: META_DESC_RECOMMENDATION },
        { hid: 'og:title', property: 'og:title', content: META_TITLE_RECOMMENDATION },
        { hid: 'twitter:title', name: 'twitter:title', content: META_TITLE_RECOMMENDATION },
        { hid: 'theme-color', name: 'theme-color', content: this.settingActiveTheme.bgColor }
      ],
      link: [
        { rel: 'canonical', href: `${AppConstant.PATH}recommendation/` }
      ]
    }
  }

  head () {
    return this.metaHead
  }

  beforeMount () {
    this.setHeaderTitle(AppConstant.RECOMMENDATION)
    this.setPage('recommendation')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/feed.scss';

</style>
