<template>
  <aside class="sidebar">
    <div class="sidebar__content">
      <div class="sidebar__head">
        <img
          src="/favicon-96x96.png"
          alt="Logo">
      </div>
      <ul class="sidebar__menu">
        <li class="sidebar__item">
          <router-link
            to="/?source=sidebar"
            class="sidebar__link"
            @click.native="navigateTo" >
            Beranda
          </router-link>
        </li>
        <li class="sidebar__item">
          <router-link
            to="/all-surah"
            class="sidebar__link"
            @click.native="navigateTo" >
            Daftar Surah
          </router-link>
        </li>
        <li class="sidebar__item">
          <router-link
            to="/about"
            class="sidebar__link"
            @click.native="navigateTo" >
            Tentang
          </router-link>
        </li>
        <li class="sidebar__item">
          <a
            href="https://github.com/mazipan/quran-offline"
            target="_blank"
            rel="noopener"
            class="sidebar__link">
            Kode Sumber
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { EventBus } from '../eventbus/index'

export default {
  name: 'BaseSidebar',
  props: {
    surah: {
      type: String,
      default: ''
    }
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
