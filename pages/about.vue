<template>
  <div class="container about center">
    <img
      src="/icon-192x192.png"
      alt="Logo">
    <h2>Selamat datang di</h2>
    <h1>{{ appTitle }}</h1>

    <footer class="footer">
      Dibuat oleh Irfan Maulana
      <br>
      dengan
      <a
        href="https://github.com/mazipan/quran-offline"
        target="_blank"
        rel="noopener">kode sumber yang terbuka</a>
      <br>

      <br><br>
      Copyright © 2018
    </footer>
  </div>
</template>

<script>
import { AppConstant } from '../constant/index'
import { EventBus } from '../eventbus/index'

export default {
  name: 'PageAbout',
  data() {
    return {
      appTitle: AppConstant.TITLE
    };
  },
  mounted() {
    EventBus.$emit('changeSurah')
  }
}
</script>

<style lang="scss" scoped>
.footer{
  margin-top: 100px;
}
</style>
