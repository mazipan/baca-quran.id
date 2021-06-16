<template>
  <aside class="sidebar">
    <div class="sidebar__content">
      <ul class="sidebar__menu">
        <li class="sidebar__item">
          <nuxt-link to="/?source=sidebar" class="sidebar__link" @click.native="navigateTo">
            <MdHomeIcon w="2em" h="2em" name="Beranda" title="Beranda" />Beranda
          </nuxt-link>
        </li>
        <li class="sidebar__item">
          <a href="/tulisan" class="sidebar__link" target="_blank" rel="noopener noreferrer">
            <MdPaperIcon w="2em" h="2em" name="Blog" title="Blog" />Blog
          </a>
        </li>
        <li class="sidebar__item">
          <a href="/stories" class="sidebar__link" target="_blank" rel="noopener noreferrer">
            <MdPhotosIcon w="2em" h="2em" name="Stories" title="Stories" />Stories
          </a>
        </li>
        <li class="sidebar__item">
          <nuxt-link to="/settings/" class="sidebar__link" @click.native="navigateTo">
            <MdSettingsIcon w="2em" h="2em" name="Setelan" title="Setelan" />Setelan
          </nuxt-link>
        </li>
        <li class="sidebar__item">
          <a href="https://trakteer.id/mazipan" class="sidebar__link" target="_blank" rel="noopener noreferrer">
            <MdHeartIcon w="2em" h="2em" name="Donasi" title="Donasi" />Donasi
          </a>
        </li>
        <li class="sidebar__item">
          <nuxt-link to="/about/" class="sidebar__link" @click.native="navigateTo">
            <MdHelpCircleIcon w="2em" h="2em" name="Tentang" title="Tentang" />Tentang
          </nuxt-link>
        </li>
        <li class="sidebar__item">
          <a
            href="https://github.com/mazipan/baca-quran.id"
            target="_blank"
            rel="noopener"
            class="sidebar__link">
            <MdCodeIcon w="2em" h="2em" name="Kode sumber" title="Kode sumber" />Kode sumber
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Mutation } from 'vuex-class'

import MdHomeIcon from 'vue-ionicons/dist/js/md-home'
import MdHelpCircleIcon from 'vue-ionicons/dist/js/md-help-circle'
import MdCodeIcon from 'vue-ionicons/dist/js/md-code'
import MdSettingsIcon from 'vue-ionicons/dist/js/md-settings'
import MdHeartIcon from 'vue-ionicons/dist/md-heart.vue'
import MdPaperIcon from 'vue-ionicons/dist/md-paper.vue'
import MdPhotosIcon from 'vue-ionicons/dist/md-photos.vue'

import { AppConstant } from '~/constant'

@Component({
  components: {
    MdHomeIcon,
    MdHelpCircleIcon,
    MdCodeIcon,
    MdSettingsIcon,
    MdHeartIcon,
    MdPaperIcon,
    MdPhotosIcon
  }
})
export default class BaseSidebar extends Vue {
  AppConstant = AppConstant;
  @Mutation setShowSidebar;

  navigateTo (e): void {
    this.hideSidebar()
    e.preventDefault()
  }

  hideSidebar (): void {
    this.setShowSidebar(false)
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/sidebar.scss";
</style>
