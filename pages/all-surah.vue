<template>
  <section class="container">
    <div v-if="loading">
      <div
        v-for="i in 5"
        :key="i"
        class="skeleton skeleton_row skeleton_row--big" />
    </div>
    <div
      v-else
      class="all-surah">
      <SurahCard :surah-array="allSurahList" />
    </div>
  </section>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

import SurahCard from '../components/SurahCard.vue'
import { __isNotEmptyString } from '../utils/index'

export default {
  name: 'PageIndex',
  components: {
    SurahCard
  },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    ...mapState([
      'allSurahList'
    ]),
    isHaveSource () {
      return __isNotEmptyString(this.$route.query.source)
    }
  },
  mounted () {
    this.setHeaderTitle('Daftar Surat')
    this.fetchSurahInfo()
  },
  methods: {
    ...mapMutations([
      'setHeaderTitle'
    ]),
    ...mapActions([
      'fetchAllSurah'
    ]),
    fetchSurahInfo () {
      this.fetchAllSurah({
        success: () => {
          if (!this.isHaveSource) {
            setTimeout(() => {
              this.loading = false
            }, 1000)
          } else this.loading = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.all-surah{
  width: 90%;
  margin: 0 auto;
}
</style>
