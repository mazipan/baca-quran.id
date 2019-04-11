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
        <SurahCard :surah-array="surahRecommendation" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'

import IosNavigateIcon from 'vue-ionicons/dist/js/ios-navigate'

import SurahCard from '../components/SurahCard.vue'
import { AppConstant } from '../constant'
import surahRecommendation from '../constant/surah-recommendation'

@Component({
  components: {
    IosNavigateIcon,
    SurahCard
  }
})

export default class RecommendationPage extends Vue {
  surahRecommendation = surahRecommendation.data

  @State settingActiveTheme;
  @Mutation setHeaderTitle;

  get metaHead() {
    const title = 'Baca surat rekomendasi dalam Al-Qur\'an | Qur\'an Offline'
    return {
      title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'theme-color', name: 'theme-color', content: this.settingActiveTheme.bgColor }
      ]
    }
  }

  head() {
    return this.metaHead
  }

  mounted() {
    this.setHeaderTitle(AppConstant.RECOMMENDATION)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/feed.scss';

</style>
