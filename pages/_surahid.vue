<template>
  <section class="container">
    <div class="detail">
      <div class="detail__header">
        {{ surahDetail.name_latin }}
      </div>

      <div class="detail__content">
        <div 
          v-for="(ayah, index) in surahDetail.text"
          :key="index"
          class="ayah block_content" >
          <div class="ayah__index tag_index">
            {{ index + 1 }}
          </div>
          <div class="divider clearfix">
            <div class="ayah__arabic">
              {{ ayah }}
            </div>
          </div>
          <div class="divider clearfix">
            <div class="ayah__translation">
              {{ getTranslation(index) }}
            </div>
          </div>
        </div>
      </div>

      <div class="detail__footer">
        <nuxt-link 
          :to="`/${surahId - 1}`"
          class="detail__footer_item detail__footer_prev">
          <svg 
            v-if="isHavePrev"
            width="30px" 
            height="30px" 
            viewBox="0 0 512 512">
            <path d="M301.3 147.6c-7.5-7.5-19.8-7.5-27.3 0l-95.4 95.7c-7.3 7.3-7.5 19.1-.6 26.6l94 94.3c3.8 3.8 8.7 5.7 13.7 5.7 4.9 0 9.9-1.9 13.6-5.6 7.5-7.5 7.6-19.7 0-27.3l-79.8-81 81.9-81.1c7.5-7.5 7.5-19.7-.1-27.3z"/><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm124.4 332.4C347.2 413.7 303 432 256 432s-91.2-18.3-124.4-51.6C98.3 347.2 80 303 80 256s18.3-91.2 51.6-124.4C164.8 98.3 209 80 256 80s91.2 18.3 124.4 51.6C413.7 164.8 432 209 432 256s-18.3 91.2-51.6 124.4z"/>
          </svg>
        </nuxt-link>
        <div class="detail__footer_item detail__footer_title">
          {{ surahDetail.name }}
        </div>
        <nuxt-link 
          :to="`/${surahId + 1}`"
          class="detail__footer_item detail__footer_next">
          <svg 
            v-if="isHaveNext"
            width="30px" 
            height="30px" 
            viewBox="0 0 512 512">
            <path d="M210.7 147.6c7.5-7.5 19.8-7.5 27.3 0l95.4 95.7c7.3 7.3 7.5 19.1.6 26.6l-94 94.3c-3.8 3.8-8.7 5.7-13.7 5.7-4.9 0-9.9-1.9-13.6-5.6-7.5-7.5-7.6-19.7 0-27.3l79.9-81.1-81.9-81.1c-7.6-7.4-7.6-19.6 0-27.2z"/><path d="M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm32 0c0-47 18.3-91.2 51.6-124.4C164.8 98.3 209 80 256 80s91.2 18.3 124.4 51.6C413.7 164.8 432 209 432 256s-18.3 91.2-51.6 124.4C347.2 413.7 303 432 256 432s-91.2-18.3-124.4-51.6C98.3 347.2 80 303 80 256z"/>
          </svg>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import { ApiPath } from '../constant/index'

export default {
  name: 'PageSurahDetail',
  data() {
    return {
      surahDetail: {}
    };
  },
  computed: {
    surahId() {
      return Number(this.$route.params.surahid)
    },
    isValidSurah () {
      return this.surahId > 0 && this.surahId <= 114
    },
    isHavePrev() {
      return this.surahId > 1
    },
    isHaveNext() {
      return this.surahId < 114
    }
  },
  mounted() {
    this.fetchSurahById(this.surahId)
  },
  methods: {
    getTranslation(indexAyah) {
      return this.surahDetail.translations.id.text[indexAyah];
    },
    fetchSurahById(id) {
      fetch(ApiPath.SURAH_BY_ID(id))
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.surahDetail = data[this.surahId]
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/_variables.scss';

.detail{
  &__header{
    width: 80%;
    text-align: center;
    background-color: #52e0a1;
    margin: 1em auto;
    padding: .25em;
    border-radius: 4px;
    font-size: 2rem;
  }
  &__content{
    margin-bottom: 100px;
  }
  &__footer{
    position: fixed; bottom: 0; right: 0; left: 0;
    z-index: 10;
    display: table;
    margin: 0;
    height: 60px;
    text-align: center;
    width: 100%;
    background: $theme;
    color: $foreground;
    &_item{
      display: table-cell;
      vertical-align: middle;
    }
    &_title{
      font-size: 2rem;
    }
    &_prev, &_next{
      width: 50px;
    }
  }
}

.ayah{
  &__arabic{
    font-size: 2rem;
    width: 80%;
    float: right;
    text-align: right;
  }
  &__translation{
    font-size: .9rem;
    width: 100%;
    text-align: left;
    font-style: italic;
    margin-top: 1.5em;
  }
}
</style>

