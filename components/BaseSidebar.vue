<template>
  <aside class="sidebar">
    <div class="sidebar__content">
      <div class="sidebar__head">
        <img
          src="/icon-nosquare50.png"
          alt="Logo">
      </div>
      <ul class="sidebar__menu">
        <li class="sidebar__item">
          <router-link
            to="/?source=sidebar"
            class="sidebar__link"
            @click.native="navigateTo" >
            <MdHomeIcon
              w="2em"
              h="2em"/>
            Beranda
          </router-link>
        </li>
        <li class="sidebar__item">
          <router-link
            to="/all-surah"
            class="sidebar__link"
            @click.native="navigateTo" >
            <MdBookIcon
              w="2em"
              h="2em"/>
            Daftar Surat
          </router-link>
        </li>
        <li class="sidebar__item">
          <router-link
            to="/about"
            class="sidebar__link"
            @click.native="navigateTo" >
            <MdHelpCircleIcon
              w="2em"
              h="2em"/>
            Tentang
          </router-link>
        </li>
        <li class="sidebar__item">
          <a
            href="https://github.com/mazipan/quran-offline"
            target="_blank"
            rel="noopener"
            class="sidebar__link">
            <MdCodeIcon
              w="2em"
              h="2em"/>
            Kode Sumber
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import MdHomeIcon from 'icons/md-home'
import MdBookIcon from 'icons/md-book'
import MdHelpCircleIcon from 'icons/md-help-circle'
import MdCodeIcon from 'icons/md-code'

import { EventBus } from '../eventbus/index'

export default {
  name: 'BaseSidebar',
  components: {
    MdHomeIcon,
    MdBookIcon,
    MdHelpCircleIcon,
    MdCodeIcon
  },
  methods: {
    navigateTo: function (e) {
      this.hideSidebar()
      e.preventDefault()
    },
    hideSidebar: function () {
      EventBus.$emit('toggleSidebar', false)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/sidebar.scss';
</style>
