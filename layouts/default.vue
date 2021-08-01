<template>
  <div :class="`app-${settingActiveTheme.name} ${webpClass} page--${routeName}`" class="quran-offline app js">
    <div v-show="isShowSidebar" class="sidebar-cover" @click="hideSidebar" />
    <BaseSidebar v-if="isHome" :class="{'sidebar--open': isShowSidebar}" />
    <BaseHeader />
    <div class="app__content">
      <nuxt class="app__nuxt" />
      <FootNote />
    </div>
    <BottomNav v-if="isHideBottomNav" />
    <BaseToast />
    <div v-if="!isHome" v-show="showArrowToTop" class="arrowtotop">
      <a href="#header">
        <ArrowUpIcon w="3em" h="3em" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State, Mutation, Action } from 'vuex-class'

import ArrowUpIcon from 'vue-ionicons/dist/js/ios-arrow-dropup-circle'

import BaseHeader from '~/components/BaseHeader.vue'
import BaseSidebar from '~/components/BaseSidebar.vue'
import BaseToast from '~/components/BaseToast.vue'
import BottomNav from '~/components/BottomNav.vue'
import FootNote from '~/components/FootNote.vue'

import { isSupportWebp } from '~/utils/webp'

require('intersection-observer')
require('vue-ionicons/ionicons.css')

@Component({
  components: {
    BaseHeader,
    BaseSidebar,
    BaseToast,
    BottomNav,
    FootNote,
    ArrowUpIcon
  }
})

export default class DefaultLayout extends Vue {
  showArrowToTop = false;
  webpClass = 'no-webp';

  @State settingActiveTheme;
  @State isShowSidebar;
  @Mutation setShowSidebar;
  @Action initDataFromBrowserStorage;
  @Action setWebshareSupport;

  get isHideBottomNav (): boolean {
    return Boolean(!this.$route.name.includes('surahid'))
  }

  get routeName (): string {
    return this.$route.name
  }

  get isHome (): boolean {
    return this.$route.path === '/'
  }

  hideSidebar (): void {
    this.setShowSidebar(false)
  }

  handleScroll (): void {
    this.showArrowToTop = window.pageYOffset > 2000
  }

  beforeMount () {
    this.initDataFromBrowserStorage()
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll)
    }
    // @ts-ignore: Unreachable code error
    if (window.navigator.share) {
      this.setWebshareSupport(true)
    }
    let clasz = 'no-webp'
    if (isSupportWebp()) { clasz = 'webp' }
    this.webpClass = clasz
  }

  beforeDestroy () {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/main.scss";

.sidebar-cover {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  height: 100%;
  z-index: 19;
}
.arrowtotop {
  position: fixed;
  bottom: 90px;
  right: 10px;
  a {
    color: var(--text-color);
  }
}
.app__content {
  min-height: 90vh;
  margin-bottom: 5em;
}
</style>
