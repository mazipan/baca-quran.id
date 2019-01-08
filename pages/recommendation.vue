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
import IosNavigateIcon from 'vue-ionicons/dist/js/ios-navigate'
import { mapMutations } from 'vuex'

import SurahCard from '../components/SurahCard.vue'
import { AppConstant } from '../constant/index.js'
import surahRecommendation from '../constant/surah-recommendation'

export default {
  name: 'RecommendationPage',
  head () {
    return {
      title: 'Surat Rekomendasi | Qur\'an Offline'
    }
  },
  components: {
    IosNavigateIcon,
    SurahCard
  },
  data () {
    return {
      surahRecommendation: surahRecommendation.data
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
