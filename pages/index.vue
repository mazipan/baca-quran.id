<template>
  <section class="container">
    <div v-if="loading">
      <div
        v-for="i in 5"
        :key="i"
        class="skeleton skeleton_row"/>
    </div>
    <template v-else>
      <nuxt-link
        v-for="surah in allSurahList"
        :to="getSurahDetailUrl(surah, surah.index)"
        :key="surah.index"
        class="surah block_content has-shadow">
        <div class="surah__index tag_index">
          {{ surah.index }}
        </div>
        <div class="divider clearfix">
          <div class="surah__title">
            {{ surah.arabic }}
          </div>
        </div>
        <div class="divider clearfix">
          <div class="surah__title surah__title--latin">
            {{ surah.latin }}
          </div>
        </div>
        <div class="divider clearfix">
          <div class="surah__trans">
            ({{ surah.translation }}: {{ surah.ayah_count }} Ayat)
          </div>
        </div>
      </nuxt-link>
    </template>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import { EventBus } from '../eventbus/index'
import { __isNotEmptyString } from '../utils/index'

export default {
  name: 'PageIndex',
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
    EventBus.$emit('changeSurah')
    this.fetchSurahInfo()
  },
  methods: {
    ...mapActions([
      'fetchAllSurah'
    ]),
    getSurahDetailUrl (surah, index) {
      return `/${index}`
    },
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
.surah{
  &__title{
    font-size: 2rem;
    width: 80%;
    float: right;
    text-align: right;

    &--latin{
      width: 100%;
      font-size: 1.5rem;
    }
  }
  &__trans{
    text-align: right;
    font-style: italic;
    line-height: 2;
  }
  &__count{
    text-align: right;
  }
}
</style>
