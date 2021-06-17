<template>
  <div>
    <div class="container">
      <div class="feed clearfix">
        <div>
          <h1 v-if="error.statusCode === 404" class="h1">
            404: Page not found
          </h1>
          <h1 v-else class="h1">
            500: An error occurred
          </h1>
        </div>
        <div class="feed__item--margin clearfix">
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
                    <div
                      class="slide-surah__title font-arabic"
                      dir="rtl"
                      lang="ar">
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { State, Mutation } from 'vuex-class'

import Surah from '~/components/Surah.vue'
import { AppConstant } from '~/constant'
import surahRecommendation from '~/constant/surah-recommendation'

@Component({
  components: {
    Surah
  }
})
export default class ErrorPage extends Vue {
  surahRecommendation = surahRecommendation.data;

  @Prop({ type: Object, default: () => ({ statusCode: 500 }) })
  readonly error!: Object;

  @State settingActiveTheme;
  @Mutation setHeaderTitle;
  @Mutation setPage;

  get metaHead () {
    return {
      title: 'Error Page | Baca-Quran.id',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Error Page | Baca-Quran.id'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Error Page | Baca-Quran.id'
        },
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

  beforeMount () {
    this.setHeaderTitle(AppConstant.ERROR)
    this.setPage('Error')
    console.error(this.error)
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
  height: 48px;
  width: 48px;
}
.VueCarousel-navigation-prev {
  left: 60px !important;
}
.VueCarousel-navigation-next {
  right: 60px !important;
}
</style>

<style lang="scss" scoped>
@import "@/assets/feed.scss";
.h1 {
  font-size: 1.3rem;
}
.slide-surah{
    text-decoration: none;
}
.feed__item--margin{
  margin-top: 3em;
}
</style>
