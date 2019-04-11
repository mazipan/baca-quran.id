<template>
  <div :class="`${settingActiveTheme.name} ${webpClass}`" class="quran-offline app js">
    <div v-show="isShowSidebar" class="sidebar-cover" @click="hideSidebar" />
    <BaseSidebar :class="{'sidebar--open': isShowSidebar}" />
    <BaseHeader />
    <nuxt class="app__content" />
    <BaseToast />
    <div v-show="showArrowToTop" class="arrowtotop">
      <a href="#header">
        <ArrowUpIcon w="3em" h="3em" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Mutation, Action } from 'vuex-class'

import ArrowUpIcon from 'vue-ionicons/dist/js/ios-arrow-dropup-circle'

import BaseHeader from '../components/BaseHeader.vue'
import BaseSidebar from '../components/BaseSidebar.vue'
import BaseToast from '../components/BaseToast.vue'

import { isSupportWebp } from '../utils/webp'

require('vue-ionicons/ionicons.css')

@Component({
  components: {
    BaseHeader,
    BaseSidebar,
    BaseToast,
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

  hideSidebar(): void {
    this.setShowSidebar(false)
  }

  handleScroll(): void {
    this.showArrowToTop = window.pageYOffset > 2000
  }

  mounted() {
    this.initDataFromBrowserStorage()
    window.addEventListener('scroll', this.handleScroll)
    // @ts-ignore: Unreachable code error
    if (window.navigator.share) {
      this.setWebshareSupport(true)
    }
    let clasz = 'no-webp'
    if (isSupportWebp()) clasz = 'webp'
    this.webpClass = clasz
  }

  beforedestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss">
@import "@/assets/main.scss";
@import "@/assets/themes.scss";
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
}
.app__content {
  min-height: 100vh;
}
</style>
