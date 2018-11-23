<template>
  <header class="header">
    <div class="header__sticky">
      <div class="header__nav">
        <a
          class="header__hamburger"
          href="javascript:void(0)"
          title="Open Sidebar"
          @click="toggleSidebar">
          <svg
            viewBox="0 0 512 512"
            width="30px"
            height="30px"
            fill="#fff">
            <path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"/>
          </svg>
        </a>
      </div>
      <div
        class="header__content">
        <nuxt-link
          to="/"
          class="header__title">
          <h1>{{ appTitle }}</h1>
        </nuxt-link>
      </div>
      <div class="header__nav pointer">
        <svg
          viewBox="0 0 512 512"
          width="30px"
          height="30px"
          fill="#fff">
          <path d="M296 136c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0 240c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0-120c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40z"/>
        </svg>
      </div>
    </div>
  </header>
</template>

<script>
import { EventBus } from '../eventbus/index'
import { AppConstant } from '../constant/index'

export default {
  name: 'BaseHeader',
  components: {},
  data() {
    return {
      appTitle: AppConstant.TITLE
    };
  },
  methods: {
    toggleSidebar: function() {
      EventBus.$emit('toggleSidebar');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/header.scss';
</style>
