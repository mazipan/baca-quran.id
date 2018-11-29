<template>
  <div class="surah_nav">
    <nuxt-link
      :to="`/${surahId - 1}`"
      class="surah_nav_item surah_nav_prev">
      <MdArrowBackIcon
        v-if="isHavePrev"
        w="30px"
        h="30px"/>
      <span
        v-if="prevSurah">
        {{ prevSurah.arabic }}
      </span>
    </nuxt-link>
    <nuxt-link
      :to="`/${surahId + 1}`"
      class="surah_nav_item surah_nav_next">
      <span
        v-if="nextSurah">
        {{ nextSurah.arabic }}
      </span>
      <MdArrowForwardIcon
        v-if="isHaveNext"
        w="30px"
        h="30px"/>
    </nuxt-link>
  </div>
</template>

<script>
import MdArrowBackIcon from 'vue-ionicons/dist/md-arrow-back'
import MdArrowForwardIcon from 'vue-ionicons/dist/md-arrow-forward'

export default {
  name: 'SurahNavigation',
  components: {
    MdArrowBackIcon,
    MdArrowForwardIcon
  },
  props: {
    surahId: {
      type: Number,
      default: 0
    },
    surahName: {
      type: String,
      default: ''
    },
    nextSurah: {
      type: Object,
      default: () => ({
        arabic: ''
      })
    },
    prevSurah: {
      type: Object,
      default: () => ({
        arabic: ''
      })
    }
  },
  computed: {
    isHavePrev () {
      return this.surahId > 1
    },
    isHaveNext () {
      return this.surahId < 114
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/_variables.scss';

.surah_nav {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;
  margin: 0;
  height: 60px;
  text-align: center;
  width: 100%;
  background: $theme;
  color: $foreground;
  &_item {
    display: flex;
    align-items: center;
    color: $foreground;
  }
  &_title {
    font-size: 2rem;
  }
  &_prev,
  &_next {
    text-decoration: none;
    span{
      padding: 0 .25em;
      font-size: 2rem;
    }
  }
}
</style>
