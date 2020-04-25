<template>
  <section class="container">
    <div class="home">
      <div class="slideshow-container">
        <div class="slides fade" :style="{ display: currentIdx === 1 ? 'block' : 'none' }">
          <div class="hero-image" :style="{ 'background-image': 'url(/illustration_1.jpg)'}" />
        </div>
        <div class="slides fade" :style="{ display: currentIdx === 2 ? 'block' : 'none' }">
          <div class="hero-image" :style="{ 'background-image': 'url(/illustration_2.jpg)'}" />
        </div>
        <div class="slides fade" :style="{ display: currentIdx === 3 ? 'block' : 'none' }">
          <div class="hero-image" :style="{ 'background-image': 'url(/illustration_3.jpg)'}" />
        </div>
      </div>

      <div class="home__wrapper">
        <div class="item">
          <nuxt-link to="/all-surah" class="item__link has-shadow">
            <img src="/icon_quran.svg">
            Daftar Surat
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link to="/daily-doa" class="item__link has-shadow">
            <img src="/icon_prayer.svg">
            {{ AppConstant.DAILY_DOA }}
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link to="/asmaul-husna" class="item__link has-shadow">
            <img src="/icon_allah.svg">
            {{ AppConstant.ASMAUL_HUSNA }}
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link to="/ayat-kursi" class="item__link has-shadow">
            <img src="/icon_rosary.svg">
            {{ AppConstant.AYAT_KURSI }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State, Mutation } from 'vuex-class'

import MdBookIcon from 'vue-ionicons/dist/js/md-book'
import MdGridIcon from 'vue-ionicons/dist/js/md-grid'
import MdWifiIcon from 'vue-ionicons/dist/js/md-wifi'
import IosColorWandIcon from 'vue-ionicons/dist/js/ios-color-wand'

import { AppConstant } from '../constant'

@Component({
  components: {
    MdBookIcon,
    MdGridIcon,
    MdWifiIcon,
    IosColorWandIcon
  }
})
export default class PageIndex extends Vue {
  AppConstant = AppConstant;
  intervalObj = null;
  currentIdx = 1;

  @State settingActiveTheme;
  @Mutation setHeaderTitle;
  @Mutation setPage;

  get metaHead () {
    const title =
      "Baca Al-Qur'an dimana saja, langsung dari web browser Anda | Qur'an Web"
    const description = "Baca ayat-ayat Al-Qur'an beserta terjemahan dan tafsir dimana saja, langsung dari web browser Anda, tanpa iklan, tanpa analitik, gratis sepenuhnya"
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        {
          hid: 'theme-color',
          name: 'theme-color',
          content: this.settingActiveTheme.bgColor
        }
      ]
    }
  }

  head () {
    return this.metaHead
  }

  mounted () {
    this.setHeaderTitle(AppConstant.TITLE)
    this.setPage('home')
    const _self = this
    this.intervalObj = setInterval(() => {
      _self.currentIdx += 1
      if (_self.currentIdx === 4) {
        _self.currentIdx = 1
      }
    }, 5000)
  }

  activated () {
    this.setHeaderTitle(AppConstant.TITLE)
    this.setPage('home')
  }

  deactivated () {
    clearInterval(this.intervalObj)
  }

  destroyed () {
    clearInterval(this.intervalObj)
  }
}
</script>

<style lang="scss" scoped>
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}
.slides {
  display: none;
  width: 100%;
  height: 220px;
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

.hero-image {
  width: 100%;
  height: 220px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  transition: all 2s ease-in;
}

.home__wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1em;
}

.item {
  width: 40%;
  margin: 0.5em;

  &__link {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1em;
    border-radius: 4px;
    font-size: 0.8rem;
    background: var(--bg-card-color);
    color: var(--text-color);

    img {
      width: 48px;
      height: 48px;
      margin-bottom: 1em;
    }
  }
}
</style>
