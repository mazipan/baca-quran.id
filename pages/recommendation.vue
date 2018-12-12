<template>
  <div class="container">
    <div class="feed clearfix">
      <div class="feed__title">
        <IosNavigateIcon
          w="1em"
          h="1em"/>
        Surat rekomendasi:
      </div>
      <div class="feed__item clearfix">
        <SurahCard :surah-array="surahStaticRecommendation"/>
      </div>
    </div>
  </div>
</template>

<script>
import IosNavigateIcon from 'vue-ionicons/dist/ios-navigate'
import { mapMutations } from 'vuex'

import SurahCard from '../components/SurahCard.vue'
import { AppConstant, surahStaticRecommendation } from '../constant/index.js'

export default {
  name: 'RecommendationPage',
  components: {
    IosNavigateIcon,
    SurahCard
  },
  data () {
    return {
      surahStaticRecommendation
    }
  },
  mounted () {
    this.setHeaderTitle(AppConstant.RECOMMENDATION)
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
