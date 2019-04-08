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

<script>
import { mapState } from 'vuex'
import IosNavigateIcon from 'vue-ionicons/dist/js/ios-navigate'

import SurahCard from '../components/SurahCard.vue'
import { AppConstant } from '../constant/index.js'
import surahRecommendation from '../constant/surah-recommendation'

export default {
  name: 'RecommendationPage',
  head() {
    return this.metaHead
  },
  components: {
    IosNavigateIcon,
    SurahCard
  },
  data() {
    return {
      surahRecommendation: surahRecommendation.data
    }
  },
  computed: {
    ...mapState([
      'settingActiveTheme'
    ]),
    metaHead() {
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
  },
  fetch({ store }) {
    store.commit('setHeaderTitle', AppConstant.RECOMMENDATION)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/feed.scss';

</style>
