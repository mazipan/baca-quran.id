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
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 512 512"
              style="margin-right: .5em;">
              <path d="M258.5 104.1c-1.5-1.2-3.5-1.2-5 0l-156 124.8c-.9.8-1.5 1.9-1.5 3.1v230c0 1.1.9 2 2 2h108c1.1 0 2-.9 2-2V322c0-1.1.9-2 2-2h92c1.1 0 2 .9 2 2v140c0 1.1.9 2 2 2h108c1.1 0 2-.9 2-2V232c0-1.2-.6-2.4-1.5-3.1l-156-124.8z"/>
              <path d="M458.7 204.2l-189-151.4C265.9 49.7 261 48 256 48s-9.9 1.7-13.7 4.8L160 119.7V77.5c0-1.1-.9-2-2-2H98c-1.1 0-2 .9-2 2v92.2l-42.7 35.1c-3.1 2.5-5.1 6.2-5.3 10.2-.2 4 1.3 7.9 4.1 10.7 2.6 2.6 6.1 4.1 9.9 4.1 3.2 0 6.3-1.1 8.8-3.1l183.9-148c.5-.4.9-.4 1.3-.4s.8.1 1.3.4l183.9 147.4c2.5 2 5.6 3.1 8.8 3.1 3.7 0 7.2-1.4 9.9-4.1 2.9-2.8 4.4-6.7 4.2-10.7-.3-4-2.2-7.7-5.4-10.2z"/>
            </svg>
            Beranda
          </router-link>
        </li>
        <li class="sidebar__item">
          <router-link
            to="/all-surah"
            class="sidebar__link"
            @click.native="navigateTo" >
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 512 512"
              style="margin-right: .5em;">
              <path d="M146 64.1c54.1 0 100 27.9 100 82V446c0 2.2-3.1 2.7-3.8.7v-.1c-10.3-34.2-38.2-67.6-82.3-70.5-34.2-2.2-66.9 12.9-93.1 37.1-1.6 1.5-4.3 2.9-6.6 2.9h-4.5c-3.7 0-7.6-2.7-7.6-6.1V120.2C48 88.1 91.9 64.1 146 64.1zm220-.1c-54.1 0-100 27.9-100 82v299.9c0 2.2 3.1 2.7 3.8.7v-.1c10.3-34.2 39.4-67.9 82.3-70.5 32.9-2 63.9 11 93.1 37.1 1.6 1.4 4.3 2.9 6.6 2.9h4.5c3.7 0 7.6-2.7 7.6-6.1V120c.1-32-43.8-56-97.9-56z"/>
            </svg>
            Daftar Surat
          </router-link>
        </li>
        <li class="sidebar__item">
          <router-link
            to="/about"
            class="sidebar__link"
            @click.native="navigateTo" >
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 512 512"
              style="margin-right: .5em;">
              <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm-4.3 304c-11.8 0-21.4-9-21.4-20.6 0-11.5 9.6-20.6 21.4-20.6 11.9 0 21.5 9 21.5 20.6 0 11.6-9.5 20.6-21.5 20.6zm40.2-96.9c-17.4 10.1-23.3 17.5-23.3 30.3v7.9h-34.7l-.3-8.6c-1.7-20.6 5.5-33.4 23.6-44 16.9-10.1 24-16.5 24-28.9s-12-21.5-26.9-21.5c-15.1 0-26 9.8-26.8 24.6H192c.7-32.2 24.5-55 64.7-55 37.5 0 63.3 20.8 63.3 50.7 0 19.9-9.6 33.6-28.1 44.5z"/>
            </svg>
            Tentang
          </router-link>
        </li>
        <li class="sidebar__item">
          <a
            href="https://github.com/mazipan/quran-offline"
            target="_blank"
            rel="noopener"
            class="sidebar__link">
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 512 512"
              style="margin-right: .5em;">
              <path d="M332 142.7c-1.2-1.1-2.7-1.7-4.1-1.7s-3 .6-4.1 1.7L310 155.9c-1.2 1.1-1.9 2.7-1.9 4.3 0 1.6.7 3.2 1.9 4.3l95.8 91.5-95.8 91.5c-1.2 1.1-1.9 2.7-1.9 4.3 0 1.6.7 3.2 1.9 4.3l13.8 13.2c1.2 1.1 2.6 1.7 4.1 1.7 1.5 0 3-.6 4.1-1.7l114.2-109c1.2-1.1 1.9-2.7 1.9-4.3 0-1.6-.7-3.2-1.9-4.3L332 142.7zm-128 17.5c0-1.6-.7-3.2-1.9-4.3l-13.8-13.2c-1.2-1.1-2.7-1.7-4.1-1.7s-3 .6-4.1 1.7l-114.2 109c-1.2 1.1-1.9 2.7-1.9 4.3 0 1.6.7 3.2 1.9 4.3l114.2 109c1.2 1.1 2.7 1.7 4.1 1.7 1.5 0 3-.6 4.1-1.7l13.8-13.2c1.2-1.1 1.9-2.7 1.9-4.3 0-1.6-.7-3.2-1.9-4.3L106.3 256l95.8-91.5c1.2-1.1 1.9-2.7 1.9-4.3z"/>
            </svg>
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
