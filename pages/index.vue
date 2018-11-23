<template>
  <section class="container">
    <nuxt-link
      v-for="(surah, index) in surahInfoArray"
      :to="getSurahDetailUrl(surah, index)"
      :key="index"
      class="surah block_content">
      <div class="surah__index tag_index">
        {{ index + 1 }}
      </div>
      <div class="divider clearfix">
        <div class="surah__title">
          {{ surah.arabic }}
        </div>
      </div>
      <div class="divider clearfix">
        <div class="surah__title surah__title--latin">
          {{ surah.latin }}
        </div>
      </div>
      <div class="divider clearfix">
        <div class="surah__trans">
          {{ surah.translation }}
        </div>
      </div>
      <div class="divider clearfix">
        <div class="surah__count">
          {{ surah.ayah_count }} Ayat
        </div>
      </div>
    </nuxt-link>
  </section>
</template>

<script>
import { ApiPath } from '../constant/index'

export default {
  name: 'PageIndex',
  data() {
    return {
      surahInfoArray: []
    };
  },
  mounted() {
    this.fetchSurahInfo()
  },
  methods: {
    getSurahDetailUrl(surah, index) {
      return `/${index+1}`
    },
    fetchSurahInfo() {
      fetch(ApiPath.SURAH_INFO)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.surahInfoArray = data.surah_info
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.surah{
  &__title{
    font-size: 2rem;
    width: 80%;
    float: right;
    text-align: right;

    &--latin{
      width: 100%;
      font-size: 1.5rem;
    }
  }
  &__trans{
    text-align: right;
    font-style: italic;
    line-height: 2;
  }
  &__count{
    text-align: right;
  }
}
</style>

