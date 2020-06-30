<template>
  <section class="container">
    <div class="home">
      <div class="slider-top">
        <client-only>
          <carousel :per-page="1" :pagination-enabled="false" :autoplay="true" :loop="true">
            <slide v-for="item in dataCarousel" :key="item">
              <div class="slide">
                <div class="slide_item" :style="{'background-image': `url(${item})`}" />
              </div>
            </slide>
          </carousel>
        </client-only>
      </div>

      <div class="home__wrapper">
        <div class="item">
          <nuxt-link to="/all-surah/" class="item__link has-shadow">
            <img src="/icon_quran.svg" height="24" width="24">
            Daftar Surat
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link to="/daily-doa/" class="item__link has-shadow">
            <img src="/icon_prayer.svg" height="24" width="24">
            {{ AppConstant.DAILY_DOA }}
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link to="/wirid/" class="item__link has-shadow">
            <img src="/icon_rosary.svg" height="24" width="24">
            {{ AppConstant.WIRID }}
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link to="/asmaul-husna/" class="item__link has-shadow">
            <img src="/icon_allah.svg" height="24" width="24">
            {{ AppConstant.ASMAUL_HUSNA }}
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link to="/tahlil/" class="item__link has-shadow">
            <img src="/icon_mosque.svg" height="24" width="24">
            {{ AppConstant.TAHLIL }}
          </nuxt-link>
        </div>
      </div>

      <template v-if="isHaveFav">
        <client-only>
          <h3 class="text-heading">
            Surat favorit
          </h3>
          <carousel
            :per-page="1"
            :pagination-enabled="false"
            :navigation-enabled="true"
            navigation-next-label=">>"
            navigation-prev-label="<<"
            :autoplay="true"
            :loop="true">
            <slide v-for="item in surahFavorite" :key="item.index">
              <nuxt-link class="slide-surah" :to="`/${item.index}/`">
                <div class="block_content has-shadow">
                  <div class="slide-surah__title font-arabic" dir="rtl" lang="ar">
                    {{ item.arabic }}
                  </div>
                  <div class>
                    {{ item.latin }}
                  </div>
                  <div class>
                    ({{ item.translation }}: {{ item.ayah_count }} Ayat)
                  </div>
                </div>
              </nuxt-link>
            </slide>
          </carousel>
        </client-only>
      </template>

      <client-only>
        <h3 class="text-heading">
          Surat rekomendasi
        </h3>
        <carousel
          :per-page="1"
          :pagination-enabled="false"
          :navigation-enabled="true"
          navigation-next-label=">>"
          navigation-prev-label="<<"
          :autoplay="true"
          :loop="true">
          <slide v-for="item in surahRecommendation" :key="item.index">
            <nuxt-link class="slide-surah" :to="`/${item.index}/`">
              <div class="block_content has-shadow">
                <div class="slide-surah__title font-arabic" dir="rtl" lang="ar">
                  {{ item.arabic }}
                </div>
                <div class>
                  {{ item.latin }}
                </div>
                <div class>
                  ({{ item.translation }}: {{ item.ayah_count }} Ayat)
                </div>
              </div>
            </nuxt-link>
          </slide>
        </carousel>
      </client-only>
    </div>

    <div class="footnote">
      Dibuat oleh <a href="https://mazipan.space/" target="_blank" rel="noopener noreferrer">Irfan Maulana</a>
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

import { AppConstant, META_TITLE, META_DESC } from '~/constant'
import surahRecommendation from '~/constant/surah-recommendation'
import { __isNotEmptyArray } from '~/utils/index'

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
  surahRecommendation = surahRecommendation.data;
  dataCarousel = ['/illustration_1.jpg'];

  @State surahFavorite;
  @State settingActiveTheme;
  @Mutation setHeaderTitle;

  get isHaveFav () {
    return __isNotEmptyArray(this.surahFavorite)
  }

  get metaHead () {
    return {
      title: META_TITLE,
      meta: [
        { hid: 'description', name: 'description', content: META_DESC },
        { hid: 'og:title', property: 'og:title', content: META_TITLE },
        { hid: 'twitter:title', name: 'twitter:title', content: META_TITLE },
        {
          hid: 'theme-color',
          name: 'theme-color',
          content: this.settingActiveTheme.bgColor
        }
      ],
      link: [{ rel: 'canonical', href: `${AppConstant.PATH}` }]
    }
  }

  head () {
    return this.metaHead
  }

  mounted () {
    this.setHeaderTitle(AppConstant.TITLE)
  }

  activated () {
    this.setHeaderTitle(AppConstant.TITLE)
  }
}
</script>

<style lang="scss">
.VueCarousel-navigation-prev,
.VueCarousel-navigation-next {
  z-index: 2;
  background: var(--bg-card-darken-color) !important;
  color: var(--text-color) !important;
  border-radius: 4px;
}
.VueCarousel-navigation-prev {
  left: 60px !important;
}
.VueCarousel-navigation-next {
  right: 60px !important;
}
</style>

<style lang="scss" scoped>
.slider-top{
  height: 250px;
  width: 100%;
}
.slide {
  height: 250px;
  &_item {
    width: 100%;
    height: 250px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    transition: all 2s ease-in;
  }
}

.slide-surah {
  width: 90%;
  margin: 0 auto;
  display: block;
  text-decoration: none;

  &__title {
    font-size: 1.5rem;
  }
}

.home__wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1em 1em 0 1em;
}

.item {
  flex-grow: 1;
  margin: 0.3em;

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
      width: 24px;
      height: 24px;
      margin-bottom: 1em;
    }
  }
}

.text-heading {
  padding: 1em 1em 0;
}
</style>
