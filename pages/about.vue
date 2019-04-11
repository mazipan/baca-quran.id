<template>
  <div class="container about center">
    <div
      class="wrapper"
      style="line-height: 1.5;">
      <img
        src="/icon-192x192.png"
        alt="Logo">
      <h3>Baca Al-Qur'an dimana saja, langsung dari web browser Anda, tidak perlu lagi install Apps. Tanpa iklan, tanpa analitik dan GRATIS sepenuhnya...</h3>
      <br><br>
      <p>Berikut beberapa sumber data untuk Quran Offline:</p>
      <ul style="text-align: left;">
        <li>
          <a
            href="https://github.com/rioastamal/quran-json"
            target="_blank"
            rel="noopener">
            Quran Json
          </a>
          oleh Rio Astamal: merupakan data berbentuk JSON yang dikumpulkan oleh developer Indonesia bernama Rio Astamal bersumber dari situs resmi Kementrian Agama Republik Indonesia yang dapat diakses di <a href="https://quran.kemenag.go.id/">
            quran.kemenag.go.id
          </a>
        </li>
        <li>
          <a
            href="https://jagad.id/99-asmaul-husna-latin-arab-dan-terjemahan-indonesia-inggris/"
            target="_blank"
            rel="noopener">
            Jagad.id
          </a>
          : untuk data Asmaul Husna
        </li>
        <li>
          <a
            href="http://www.doaharianislami.com/2017/06/kumpulan-doa-sehari-hari-lengkap-dalam-bahasa-arab-latin-dan-artinya.html"
            target="_blank"
            rel="noopener">
            Doa Harian Islami
          </a>
          : untuk data doa-doa harian
        </li>
        <li>
          <a
            href="https://quran.kemenag.go.id/"
            target="_blank"
            rel="noopener">
            quran.kemenag.go.id
          </a>
          : untuk data mp3 murotal dari setiap ayat
        </li>
      </ul>

      <div class="bug">
        Bila Anda ingin menyampaikan saran, kritik atau menemukan kesalahan pada aplikasi ini, silahkan isi penjelasan detailnya <a
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'

import { AppConstant } from '../constant/index'

@Component
export default class PageAbout extends Vue {
  appTitle = AppConstant.TITLE

  @State settingActiveTheme
  @Mutation setHeaderTitle

  get metaHead() {
    const title = 'Tentang | Qur\'an Offline'
    return {
      title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'theme-color', name: 'theme-color', content: this.settingActiveTheme.bgColor }
      ]
    }
  }

  head() {
    return this.metaHead
  }

  mounted() {
    this.setHeaderTitle('Tentang')
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
