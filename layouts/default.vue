<template>
  <div class="app quran-offline">
    <div
      v-show="isShowSidebar"
      class="sidebar-cover"
      @click="hideSidebar" />
    <BaseSidebar
      :class="{'sidebar--open': isShowSidebar}"
      :surah="surahShowing"
      :theme="theme"
      :theme-text-color="themeTextColor"/>
    <BaseHeader
      :surah="surahShowing"
      :theme="theme"
      :theme-text-color="themeTextColor"/>
    <nuxt class="app__content"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import BaseHeader from '../components/BaseHeader.vue'
import BaseSidebar from '../components/BaseSidebar.vue'

import { __isNotNull } from '../utils/index'
import { EventBus } from '../eventbus/index'

export default {
  name: 'DefaultLayout',
  components: {
    BaseHeader,
    BaseSidebar
  },
  data () {
    return {
      isShowSidebar: false,
      surahShowing: ''
    }
  },
  computed: {
    ...mapState([
      'theme',
      'themeTextColor'
    ])
  },
  mounted () {
    EventBus.$on('toggleSidebar', param => {
      if (__isNotNull(param)) {
        this.isShowSidebar = param
      } else {
        this.isShowSidebar = !this.isShowSidebar
      }
    })
    EventBus.$on('changeSurah', param => {
      if (__isNotNull(param)) {
        this.surahShowing = param
      } else {
        this.surahShowing = ''
      }
    })
  },
  methods: {
    hideSidebar: function () {
      EventBus.$emit('toggleSidebar')
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/main.scss';
  .sidebar-cover{
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top:0px; right: 0px; bottom: 0px; left: 0px;
    height: 100%;
    z-index: 19;
  }
</style>
