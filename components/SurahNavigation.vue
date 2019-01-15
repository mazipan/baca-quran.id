<template>
  <div class="surah_nav">
    <nuxt-link
      :to="`/${surahId - 1}`"
      class="surah_nav_item surah_nav_prev">
      <MdArrowBackIcon
        v-if="isHavePrev"
        w="30px"
        h="30px" />
      <span
        v-if="prevSurah">
        {{ prevSurah.arabic }}
      </span>
    </nuxt-link>
    <div class="surah_nav_item surah_nav_center">
      <label for="">
        Pergi ke ayat:
      </label>
      <select
        v-model="selectedVerse"
        name="verse-select"
        class="select">
        <option
          v-for="num in arrayAyah"
          :key="num"
          :value="num">
          {{ num }}
        </option>
      </select>
    </div>
    <nuxt-link
      :to="`/${surahId + 1}`"
      class="surah_nav_item surah_nav_next">
      <span
        v-if="nextSurah">
        {{ nextSurah.arabic }}
      </span>
      <MdArrowForwardIcon
        v-if="isHaveNext"
        w="30px"
        h="30px" />
    </nuxt-link>
  </div>
</template>

<script>
import MdArrowBackIcon from 'vue-ionicons/dist/js/md-arrow-back'
import MdArrowForwardIcon from 'vue-ionicons/dist/js/md-arrow-forward'

export default {
  name: 'SurahNavigation',
  components: {
    MdArrowBackIcon,
    MdArrowForwardIcon
  },
  props: {
    surahId: {
      type: Number,
      default: 0
    },
    surahName: {
      type: String,
      default: ''
    },
    nextSurah: {
      type: Object,
      default: () => ({
        arabic: ''
      })
    },
    prevSurah: {
      type: Object,
      default: () => ({
        arabic: ''
      })
    },
    numberAyah: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      selectedVerse: 1
    }
  },
  computed: {
    isHavePrev () {
      return this.surahId > 1
    },
    isHaveNext () {
      return this.surahId < 114
    },
    arrayAyah () {
      return Array.from({ length: this.numberAyah }, (v, k) => k + 1)
    }
  },
  watch: {
    selectedVerse (newValue) {
      window.location.href = `#verse-${newValue}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/_variables.scss';

.surah_nav {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;
  margin: 0;
  height: 60px;
  text-align: center;
  width: 100%;
  background: $theme;
  color: $foreground;
  &_item {
    display: flex;
    align-items: center;
    color: $foreground;
  }
  &_title {
    font-size: 2rem;
  }
  &_prev,
  &_next {
    text-decoration: none;
    span{
      padding: 0 .25em;
      font-size: 2rem;
    }
  }
}

.select{
  -webkit-appearance: none;
  padding: .5em 1.5rem .5em .5rem;
  outline: none;
  border: none;
  background-color: #fff;
  color: #41b883;
  border: 1px solid #41b883;
  font-size: 1rem;
  border-radius: 4px;
  margin-left: .5em;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAYAAAARx7TFAAAAAXNSR0IArs4c6QAAAJ1JREFUCB1jzMnJCWdkZBSdPHnyFAYk0NDQwPbmzZuVTExMk5iA4p7//v2bDFScC1OzatUqZqCC5f////cHyikwiYiIJAFNWgIUmARSCKQZDx48OAdIBwJNSZ8yZcp8RpBuoNFMQJ0LgRIxQO4hILYFKsgEOmEmSJ4ZRBw4cOC/l5fXxu/fvysDub5Ak3OAJswAyWEAkIm5ublu6BIADTRHW7YWzxEAAAAASUVORK5CYII=");
  background-position: right 7px center;
  background-repeat: no-repeat;
}
</style>
