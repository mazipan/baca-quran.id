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
          <nuxt-link
            to="/?source=sidebar"
            class="sidebar__link"
            @click.native="navigateTo">
            <MdHomeIcon
              w="2em"
              h="2em" />
            Beranda
          </nuxt-link>
        </li>
        <li class="sidebar__item">
          <nuxt-link
            to="/search"
            class="sidebar__link"
            @click.native="navigateTo">
            <MdSearchIcon
              w="2em"
              h="2em" />
            {{ AppConstant.SEARCH_PAGE }}
          </nuxt-link>
        </li>
        <li class="sidebar__item">
          <nuxt-link
            to="/all-surah"
            class="sidebar__link"
            @click.native="navigateTo">
            <MdBookIcon
              w="2em"
              h="2em" />
            Daftar Surat
          </nuxt-link>
        </li>
        <li class="sidebar__item">
          <nuxt-link
            to="/last-verse"
            class="sidebar__link"
            @click.native="navigateTo">
            <IosBookmarkIcon
              w="2em"
              h="2em" />
            {{ AppConstant.LAST_READ }}
          </nuxt-link>
        </li>
        <li class="sidebar__item">
          <nuxt-link
            to="/favorite"
            class="sidebar__link"
            @click.native="navigateTo">
            <IosStarOutlineIcon
              w="2em"
              h="2em" />
            {{ AppConstant.FAVORITE }}
          </nuxt-link>
        </li>
        <li class="sidebar__item">
          <nuxt-link
            to="/recommendation"
            class="sidebar__link"
            @click.native="navigateTo">
            <IosNavigateIcon
              w="2em"
              h="2em" />
            {{ AppConstant.RECOMMENDATION }}
          </nuxt-link>
        </li>
        <li class="sidebar__item">
          <nuxt-link
            to="/about"
            class="sidebar__link"
            @click.native="navigateTo">
            <MdHelpCircleIcon
              w="2em"
              h="2em" />
            Tentang
          </nuxt-link>
        </li>
        <li class="sidebar__item">
          <a
            href="https://github.com/mazipan/quran-offline"
            target="_blank"
            rel="noopener"
            class="sidebar__link">
            <MdCodeIcon
              w="2em"
              h="2em" />
            Kode Sumber
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { mapMutations } from 'vuex'

import MdHomeIcon from 'vue-ionicons/dist/js/md-home'
import MdBookIcon from 'vue-ionicons/dist/js/md-book'
import MdHelpCircleIcon from 'vue-ionicons/dist/js/md-help-circle'
import MdCodeIcon from 'vue-ionicons/dist/js/md-code'
import MdSearchIcon from 'vue-ionicons/dist/js/md-search'
import IosNavigateIcon from 'vue-ionicons/dist/js/ios-navigate'
import IosStarOutlineIcon from 'vue-ionicons/dist/js/ios-star-outline'
import IosBookmarkIcon from 'vue-ionicons/dist/js/ios-bookmark'

import { AppConstant } from '../constant/index.js'

export default {
  name: 'BaseSidebar',
  components: {
    MdHomeIcon,
    MdBookIcon,
    MdHelpCircleIcon,
    MdCodeIcon,
    MdSearchIcon,
    IosNavigateIcon,
    IosStarOutlineIcon,
    IosBookmarkIcon
  },
  data () {
    return {
      AppConstant
    }
  },
  methods: {
    ...mapMutations([
      'setShowSidebar'
    ]),
    navigateTo: function (e) {
      this.hideSidebar()
      e.preventDefault()
    },
    hideSidebar: function () {
      this.setShowSidebar(false)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/sidebar.scss';
</style>
