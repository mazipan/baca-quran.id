<template>
  <header id="header" class="header">
    <div class="header__sticky">
      <div class="header__nav">
        <a
          v-if="isHomePage"
          class="header__hamburger"
          href="javascript:void(0)"
          title="Open Sidebar"
          @click="toggleSidebar">
          <MdMenuIcon w="30px" h="30px" />
        </a>
        <a
          v-else
          href="javascript:void(0)"
          class="header__hamburger"
          title="Kembali"
          @click="backToPreviousPage">
          <MdArrowBackIcon w="30px" h="30px" />
        </a>
      </div>
      <div class="header__content">
        <nuxt-link v-if="isHomePage" to="/" class="header__title">
          <h1>{{ headerTitle }}</h1>
        </nuxt-link>
        <h1 v-else>
          {{ headerTitle }}
        </h1>
      </div>
      <div v-if="!isHomePage" class="header__nav pointer" @click="toggleMenuRight">
        <MdMoreIcon w="30px" h="30px" />
      </div>
      <div v-else class="header__nav">
&nbsp;
      </div>
    </div>
    <nav v-show="isShowMenu" class="menu_right">
      <ul>
        <li>
          <div class="menu_link" @click="navigateTo('/')">
            Beranda
          </div>
        </li>
        <li>
          <div class="menu_link" @click="navigateTo('/settings')">
            Setelan
          </div>
        </li>
        <li>
          <div class="menu_link" @click="navigateTo('/about')">
            Tentang
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'

import MdMenuIcon from 'vue-ionicons/dist/js/md-menu'
import MdArrowBackIcon from 'vue-ionicons/dist/js/md-arrow-back'
import MdMoreIcon from 'vue-ionicons/dist/js/md-more'

import { AppConstant } from '../constant/index'

@Component({
  components: {
    MdMenuIcon,
    MdArrowBackIcon,
    MdMoreIcon
  }
})

export default class BaseHeader extends Vue {
  isShowMenu = false;

  @State headerTitle;
  @Mutation setShowSidebar;

  get isHomePage(): boolean {
    return this.headerTitle === AppConstant.TITLE
  }

  navigateTo(link): void {
    this.toggleMenuRight()
    if (link.indexOf('http') >= 0) {
      window.location.href = link
    } else {
      this.$router.push(link)
    }
  }

  toggleMenuRight(): void {
    this.isShowMenu = !this.isShowMenu
    if (this.isShowMenu) {
      setTimeout(() => {
        this.isShowMenu = false
      }, 2000)
    }
  }

  toggleSidebar() {
    this.setShowSidebar(true)
  }

  backToPreviousPage() {
    window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/header.scss";
.menu_right {
  position: fixed;
  top: 50px;
  right: 30px;
  z-index: 99;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      border-bottom: 1px solid #41b883;
      .menu_link {
        display: block;
        background-color: #1a1a1a;
        color: $theme;
        text-decoration: none;
        padding: 15px 25px;
        font-size: 16px;
        display: flex;
        align-items: center;
      }
      &:last-child {
        border-bottom: 0;
      }
    }
  }
}
</style>
