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
        v-if="prevSurah"
        class="text-nav">
        {{ prevSurah.arabic }}
      </span>
    </nuxt-link>
    <div class="surah_nav_item surah_nav_center">
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
        v-if="nextSurah"
        class="text-nav">
        {{ nextSurah.arabic }}
      </span>
      <MdArrowForwardIcon
        v-if="isHaveNext"
        w="30px"
        h="30px" />
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'

import MdArrowBackIcon from 'vue-ionicons/dist/js/md-arrow-back'
import MdArrowForwardIcon from 'vue-ionicons/dist/js/md-arrow-forward'

@Component({
  components: {
    MdArrowBackIcon,
    MdArrowForwardIcon
  }
})

export default class SurahNavigation extends Vue {
  selectedVerse = 1

  @Prop({ type: Number, default: 0 }) readonly surahId!: number
  @Prop({ type: String, default: '' }) readonly surahName!: string
  @Prop({ type: Object, default: () => ({ arabic: '' }) }) readonly nextSurah!: any
  @Prop({ type: Object, default: () => ({ arabic: '' }) }) readonly prevSurah!: any
  @Prop({ type: Number, default: 0 }) readonly numberAyah!: number

  @Watch('selectedVerse')
  onChildChanged(val: string, oldVal: string): void {
    window.location.href = `#verse-${val}`
  }

  get isHavePrev(): boolean {
    return this.surahId > 1
  }

  get isHaveNext(): boolean {
    return this.surahId < 114
  }

  get arrayAyah(): number[] {
    return Array.from({ length: this.numberAyah }, (v, k) => k + 1)
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
  &_item {
    display: flex;
    align-items: center;
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
  font-size: 1rem;
  border-radius: 4px;
  margin-left: .5em;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAYAAAARx7TFAAAAAXNSR0IArs4c6QAAAJ1JREFUCB1jzMnJCWdkZBSdPHnyFAYk0NDQwPbmzZuVTExMk5iA4p7//v2bDFScC1OzatUqZqCC5f////cHyikwiYiIJAFNWgIUmARSCKQZDx48OAdIBwJNSZ8yZcp8RpBuoNFMQJ0LgRIxQO4hILYFKsgEOmEmSJ4ZRBw4cOC/l5fXxu/fvysDub5Ak3OAJswAyWEAkIm5ublu6BIADTRHW7YWzxEAAAAASUVORK5CYII=");
  background-position: right 7px center;
  background-repeat: no-repeat;
}
.text-nav{
  // mobile
  @media screen and (max-width: 480px) {
    display: none;
  }
}
</style>
