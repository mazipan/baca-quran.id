<template>
  <div
    :class="theme"
    class="app quran-offline">
    <div
      v-show="isShowSidebar"
      class="sidebar-cover"
      @click="hideSidebar" />
    <BaseSidebar :class="{'sidebar--open': isShowSidebar}"/>
    <BaseHeader/>
    <nuxt class="app__content"/>
    <BaseToast/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import BaseHeader from '../components/BaseHeader.vue'
import BaseSidebar from '../components/BaseSidebar.vue'
import BaseToast from '../components/BaseToast.vue'

import { __isNotNull } from '../utils/index'
import { EventBus } from '../eventbus/index'

export default {
  name: 'DefaultLayout',
  components: {
    BaseHeader,
    BaseSidebar,
    BaseToast
  },
  data () {
    return {
      isShowSidebar: false
    }
  },
  computed: {
    ...mapState([
      'theme'
    ])
  },
  mounted () {
    this.initSidebarAction()
    this.readDataFromStorage()
  },
  methods: {
    ...mapActions([
      'readDataFromStorage'
    ]),
    hideSidebar () {
      EventBus.$emit('toggleSidebar')
    },
    initSidebarAction () {
      EventBus.$on('toggleSidebar', param => {
        if (__isNotNull(param)) {
          this.isShowSidebar = param
        } else {
          this.isShowSidebar = !this.isShowSidebar
        }
      })
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
