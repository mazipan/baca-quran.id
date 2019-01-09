<template>
  <div class="container about center">
    <img
      src="/icon-192x192.png"
      alt="Logo">
    <h2>Selamat datang di Aplikasi Web</h2>
    <h1>{{ appTitle }}</h1>

    <h5>Baca Al-Qur'an dimana saja, langsung dari web browser Anda, tidak perlu lagi install Apps. Tanpa iklan, tanpa analitik dan GRATIS sepenuhnya...</h5>

    <div class="bug">
      Bila Anda menemukan bug atau menginginkan fitur baru, silahkan isi <a
        href="https://github.com/mazipan/quran-offline/issues/new"
        target="_blank"
        rel="noopener">
        disini.
      </a>
    </div>

    <footer class="footer">
      <p>Dibuat oleh Irfan Maulana</p>
      <p>Copyright © 2018</p>
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
    ...mapMutations(['setHeaderTitle'])
  }
}
</script>

<style lang="scss" scoped>
.bug {
  margin-top: 2em;
}
.footer {
  margin-top: 100px;
}
</style>
