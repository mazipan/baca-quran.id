<template>
  <section class="container">
    <div
      class="home">
      <div class="hero-image" />
      <div class="home__wrapper">
        <div class="item">
          <nuxt-link
            to="/all-surah"
            class="item__link has-shadow">
            <MdBookIcon
              w="2em"
              h="2em" />
            Daftar Surat
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link
            to="/daily-doa"
            class="item__link has-shadow">
            <MdWifiIcon
              w="2em"
              h="2em" />
            {{ AppConstant.DAILY_DOA }}
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link
            to="/asmaul-husna"
            class="item__link has-shadow">
            <MdGridIcon
              w="2em"
              h="2em" />
            {{ AppConstant.ASMAUL_HUSNA }}
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link
            to="/ayat-kursi"
            class="item__link has-shadow">
            <IosColorWandIcon
              w="2em"
              h="2em" />
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

  @State settingActiveTheme;
  @Mutation setHeaderTitle
  @Mutation setPage

  get metaHead () {
    const title = "Baca Al-Qur'an dimana saja, langsung dari web browser Anda | Qur'an Offline"
    return {
      title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'theme-color', name: 'theme-color', content: this.settingActiveTheme.bgColor }
      ]
    }
  }

  head () {
    return this.metaHead
  }

  mounted () {
    this.setHeaderTitle(AppConstant.TITLE)
    this.setPage('home')
  }
}
</script>

<style lang="scss" scoped>
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/read-quran.svg");
  height: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.home__wrapper{
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1em;
}

.item {
  width: 40%;
  margin: .5em;

  &__link{
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2em 1em;
    border-radius: 4px;
    font-size: .8rem;
    background: var(--bg-card-color);
    color: var(--text-color);
  }
}
</style>
