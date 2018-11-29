<template>
  <div class="surah_nav">
    <nuxt-link
      :to="`/${surahId - 1}`"
      class="surah_nav_item surah_nav_prev">
      <svg
        v-if="isHavePrev"
        width="30px"
        height="30px"
        viewBox="0 0 512 512">
        <path d="M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"/>
      </svg>
    </nuxt-link>
    <div class="surah_nav_item surah_nav_title">
      {{ surahName }}
    </div>
    <nuxt-link
      :to="`/${surahId + 1}`"
      class="surah_nav_item surah_nav_next">
      <svg
        v-if="isHaveNext"
        width="30px"
        height="30px"
        viewBox="0 0 512 512">
        <path d="M85 277.375h259.704L225.002 397.077 256 427l171-171L256 85l-29.922 29.924 118.626 119.701H85v42.75z"/>
      </svg>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'SurahNavigation',
  props: {
    surahId: {
      type: Number,
      default: 0
    },
    surahName: {
      type: String,
      default: ''
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
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;
  display: table;
  margin: 0;
  height: 60px;
  text-align: center;
  width: 100%;
  background: $theme;
  color: $foreground;
  &_item {
    display: table-cell;
    vertical-align: middle;
  }
  &_title {
    font-size: 2rem;
  }
  &_prev,
  &_next {
    width: 50px;
  }
}
</style>
