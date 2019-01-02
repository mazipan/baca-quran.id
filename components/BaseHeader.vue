<template>
  <header
    id="header"
    class="header">
    <div class="header__sticky">
      <div class="header__nav">
        <a
          v-if="isHomePage"
          class="header__hamburger"
          href="javascript:void(0)"
          title="Open Sidebar"
          @click="toggleSidebar">
          <MdMenuIcon
            w="30px"
            h="30px" />
        </a>
        <nuxt-link
          v-else
          to="/?source=surah"
          class="header__hamburger">
          <MdArrowBackIcon
            w="30px"
            h="30px" />
        </nuxt-link>
      </div>
      <div
        class="header__content">
        <nuxt-link
          v-if="isHomePage"
          to="/"
          class="header__title">
          <h1>{{ headerTitle }}</h1>
        </nuxt-link>
        <h1 v-else>
          {{ headerTitle }}
        </h1>
      </div>
      <div
        v-if="!isHomePage"
        class="header__nav pointer"
        @click="toggleMenuRight">
        <MdMoreIcon
          w="30px"
          h="30px" />
      </div>
      <div
        v-else
        class="header__nav">
        &nbsp;
      </div>
    </div>
    <nav
      v-show="isShowMenu"
      class="menu_right">
      <ul>
        <li>
          <div
            class="menu_link"
            @click="navigateTo('https://github.com/mazipan/quran-offline')">
            Tentang
          </div>
        </li>
        <li>
          <div
            class="menu_link"
            @click="navigateTo('https://github.com/mazipan/quran-offline')">
            Kode Sumber
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import MdMenuIcon from 'vue-ionicons/dist/md-menu'
import MdArrowBackIcon from 'vue-ionicons/dist/md-arrow-back'
import MdMoreIcon from 'vue-ionicons/dist/md-more'

import { AppConstant } from '../constant/index'

export default {
  name: 'BaseHeader',
  components: {
    MdMenuIcon,
    MdArrowBackIcon,
    MdMoreIcon
  },
  data () {
    return {
      isShowMenu: false
    }
  },
  computed: {
    ...mapState([
      'headerTitle'
    ]),
    isHomePage () {
      return this.headerTitle === AppConstant.TITLE
    }
  },
  methods: {
    ...mapMutations([
      'setShowSidebar'
    ]),
    navigateTo: function (link) {
      this.toggleMenuRight()
      if (link.indexOf('http') >= 0) {
        window.location.href = link
      } else {
        this.$router.push(link)
      }
    },
    toggleMenuRight () {
      this.isShowMenu = !this.isShowMenu
      if (this.isShowMenu) {
        setTimeout(() => {
          this.isShowMenu = false
        }, 2000)
      }
    },
    toggleSidebar () {
      this.setShowSidebar(true)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/header.scss';
.menu_right{
  position: fixed;
  top: 50px;
  right: 30px;
  z-index: 99;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li{
      .menu_link{
          display: block;
          background-color: #000000;
          color: $theme;
          text-decoration: none;
          padding: 15px 25px;
          font-size: 16px;
          display: flex;
          align-items: center;
        }
    }
  }
}
</style>
