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
            to="/"
            class="sidebar__link"
            @click.native="navigateTo" >
            Home
          </router-link>
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
      this.hideSidebar();
      e.preventDefault()
    },
    hideSidebar: function () {
      EventBus.$emit('toggleSidebar', false);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/sidebar.scss';
</style>
