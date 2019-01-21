<template>
  <div class="surah__root">
    <a
      v-for="surah in surahArray"
      :key="surah.index"
      class="surah block_content has-shadow"
      @click.prevent="goToSurahDetail(surah.index)">
      <div class="surah__header">
        <div class="surah__index tag_index">
          {{ surah.index }}
        </div>
        <div class="surah__header--right">
          <svg
            v-if="!findInFavorite(surah)"
            viewBox="0 0 512 512"
            width="30px"
            height="30px"
            @click.prevent="doAddToFavorite(surah)">
            <path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16zm-127.2 92.5c-10 7.2-14.2 20.2-10.2 31.8l30.1 87.7c1.3 3.7-2.9 6.8-6.1 4.6l-77.4-55.2c-4.9-3.5-10.6-5.2-16.3-5.2-5.7 0-11.4 1.7-16.2 5.2l-77.4 55.1c-3.2 2.3-7.4-.9-6.1-4.6l30.1-87.7c4-11.8-.2-24.8-10.3-32l-81-57.1c-3.2-2.2-1.6-7.3 2.3-7.3H196c12 0 22.7-7.7 26.5-19.1l29.6-88.2c1.2-3.6 6.4-3.6 7.6 0l29.6 88.2c3.8 11.4 14.5 19.1 26.5 19.1h97.3c3.9 0 5.5 5 2.3 7.2l-79.6 57.5z" />
          </svg>
          <svg
            v-if="findInFavorite(surah)"
            viewBox="0 0 512 512"
            width="30px"
            height="30px"
            fill="#f5aa1e"
            @click.prevent="doremoveFromfavorite(surah)">
            <path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z" />
          </svg>
        </div>
      </div>
      <div class="divider clearfix">
        <div
          class="surah__title font-arabic"
          dir="rtl">
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
          ({{ surah.translation }}: {{ surah.ayah_count }} Ayat)
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'SurahCard',
  props: {
    surahArray: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapState([
      'surahFavorite'
    ])
  },
  methods: {
    ...mapActions([
      'addToFavorite',
      'removeFromFavorite',
      'showNotification'
    ]),
    doAddToFavorite (surah) {
      this.addToFavorite(surah)
      this.showNotification({
        title: 'Pesan Sukses',
        message: 'Surat berhasil ditambahkan ke daftar favorit.'
      })
    },
    doremoveFromfavorite (surah) {
      this.removeFromFavorite(surah)
      this.showNotification({
        title: 'Pesan Sukses',
        message: 'Surat berhasil dihapus dari daftar favorit.'
      })
    },
    findInFavorite (surah) {
      const favArray = this.surahFavorite || []
      const isExist = favArray.find(item => item.index === surah.index)
      return isExist
    },
    getSurahDetailUrl (index) {
      return `/${index}`
    },
    goToSurahDetail (index) {
      const path = this.getSurahDetailUrl(index)
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/surah.scss';
</style>
