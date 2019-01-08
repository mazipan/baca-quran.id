<template>
  <div class="container about center">
    <img
      src="/icon-192x192.png"
      alt="Logo">
    <h2>Selamat datang di</h2>
    <h1>{{ appTitle }}</h1>

    <br><br>
    <p>
      Bila Anda menemukan bug atau menginginkan fitur baru, silahkan isi <a href="https://github.com/mazipan/quran-offline/issues/new">
        disini.
      </a>
    </p>

    <footer class="footer">
      Dibuat oleh Irfan Maulana
      <br>
      dengan
      <a
        href="https://github.com/mazipan/quran-offline"
        target="_blank"
        rel="noopener">
        kode sumber yang terbuka
      </a>
      <br>

      <br><br>
      Copyright © 2018
    </footer>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import { AppConstant } from '../constant/index'

export default {
  name: 'PageAbout',
  head () {
    return {
      title: 'Tentang | Qur\'an Offline'
    }
  },
  data () {
    return {
      appTitle: AppConstant.TITLE
    }
  },
  mounted () {
    this.setHeaderTitle('Tentang')
  },
  methods: {
    ...mapMutations([
      'setHeaderTitle'
    ])
  }
}
</script>

<style lang="scss" scoped>
.footer{
  margin-top: 100px;
}
</style>
