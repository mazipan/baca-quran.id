<template>
  <nav class="bottom-nav">
    <ul>
      <li>
        <nuxt-link to="/">
          <MdHomeIcon w="2em" h="2em" />
          <span>Beranda</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/last-verse/">
          <IosBookmarkIcon w="2em" h="2em" />
          <span>Terakhir</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/favorite/">
          <IosStarOutlineIcon w="2em" h="2em" />
          <span>Favorit</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/recommendation/">
          <IosNavigateIcon w="2em" h="2em" />
          <span>Rekomendasi</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import MdHomeIcon from 'vue-ionicons/dist/js/md-home'
import MdBookIcon from 'vue-ionicons/dist/js/md-book'
import MdHelpCircleIcon from 'vue-ionicons/dist/js/md-help-circle'
import MdCodeIcon from 'vue-ionicons/dist/js/md-code'
import MdSettingsIcon from 'vue-ionicons/dist/js/md-settings'
import IosNavigateIcon from 'vue-ionicons/dist/js/ios-navigate'
import IosStarOutlineIcon from 'vue-ionicons/dist/js/ios-star-outline'
import IosBookmarkIcon from 'vue-ionicons/dist/js/ios-bookmark'

@Component({
  components: {
    MdHomeIcon,
    MdBookIcon,
    MdHelpCircleIcon,
    MdCodeIcon,
    MdSettingsIcon,
    IosNavigateIcon,
    IosStarOutlineIcon,
    IosBookmarkIcon
  }
})
export default class BaseHeader extends Vue {}
</script>

<style lang="scss" scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: initial;
  width: 100%;
  max-width: 500px;
  z-index: 10;
  height: 50px;
  display: flex;
  align-items: center;
  background: var(--bg-card-color);
  color: var(--text-color);
  box-shadow: 0px -5px 5px 1px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);

  ul {
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li > a {
    display: block;
    color: var(--text-color);
    text-decoration: none;
    padding: 0 25px;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;

    span{
      font-size: 10px;
    }
  }
}
</style>
