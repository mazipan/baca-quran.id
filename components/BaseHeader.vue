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
          <MdMenuIcon w="30px" h="30px" name="Sidebar Menu" title="Sidebar Menu" />
        </a>
        <a
          v-else
          class="header__hamburger"
          title="Kembali"
          :href="backUrl"
          @click="backToPreviousPage">
          <MdArrowBackIcon w="30px" h="30px" name="Kembali" title="Kembali" />
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
      <nuxt-link v-if="!isHomePage" class="header__nav pointer" to="/settings/">
        <MdSettingsIcon w="30px" h="30px" name="Setelan" title="Setelan" />
      </nuxt-link>
      <div v-else class="header__nav">
        &nbsp;
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State, Mutation } from 'vuex-class'

import MdMenuIcon from 'vue-ionicons/dist/js/md-menu'
import MdArrowBackIcon from 'vue-ionicons/dist/js/md-arrow-back'
import MdSettingsIcon from 'vue-ionicons/dist/js/md-settings'

@Component({
  components: {
    MdMenuIcon,
    MdArrowBackIcon,
    MdSettingsIcon
  }
})

export default class BaseHeader extends Vue {
  @State headerTitle;
  @Mutation setShowSidebar;

  get isHomePage (): boolean {
    return this.$route.path === '/'
  }

  get backUrl (): string {
    if (this.$route.name === 'surahid') {
      return '/all-surah/'
    } else {
      return '/'
    }
  }

  toggleSidebar () {
    this.setShowSidebar(true)
  }

  backToPreviousPage () {
    if (this.$route.name === 'surahid') {
      this.$router.push('/all-surah/')
    } else {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/header.scss";
</style>
