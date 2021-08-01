<template>
  <div :class="`surah_nav amp--${isAMP}`">
    <nuxt-link :to="`/${surahId - 1}/`" class="surah_nav_item surah_nav_prev">
      <MdArrowBackIcon v-if="isHavePrev" w="30px" h="30px" />
      <span v-if="prevSurah" class="text-nav">
        {{ prevSurah.arabic }}
      </span>
    </nuxt-link>
    <div class="surah_nav_item surah_nav_center">
      <select v-model="selectedVerse" name="verse-select" class="select">
        <option v-for="num in arrayAyah" :key="num" :value="num">
          {{ num }}
        </option>
      </select>
    </div>
    <nuxt-link :to="`/${surahId + 1}/`" class="surah_nav_item surah_nav_next">
      <span v-if="nextSurah" class="text-nav">
        {{ nextSurah.arabic }}
      </span>
      <MdArrowForwardIcon v-if="isHaveNext" w="30px" h="30px" />
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'nuxt-property-decorator'

import MdArrowBackIcon from 'vue-ionicons/dist/js/md-arrow-back'
import MdArrowForwardIcon from 'vue-ionicons/dist/js/md-arrow-forward'

@Component({
  components: {
    MdArrowBackIcon,
    MdArrowForwardIcon
  }
})
export default class SurahNavigation extends Vue {
  selectedVerse = 1;

  @Prop({ type: Number, default: 1 }) readonly surahId!: number;
  @Prop({ type: Object, default: () => ({ arabic: '' }) })
  readonly nextSurah!: any;

  @Prop({ type: Object, default: () => ({ arabic: '' }) })
  readonly prevSurah!: any;

  @Prop({ type: Number, default: 0 }) readonly verseCount!: number;

  @Watch('selectedVerse')
  onChildChanged (val: string): void {
    const id = `verse-${val}`
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    })
    setTimeout(() => {
      window.location.href = `#verse-${val}`
    }, 500)
  }

  get isAMP (): boolean {
    return Boolean(this.$route.name.includes('amp'))
  }

  get isHavePrev (): boolean {
    return this.surahId > 1
  }

  get isHaveNext (): boolean {
    return this.surahId < 114
  }

  get arrayAyah (): number[] {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return Array.from({ length: this.verseCount }, (v, k) => k + 1)
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.surah_nav {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  left: initial;
  z-index: 10;
  margin: 0;
  height: 60px;
  text-align: center;
  width: 100%;
  max-width: 500px;
  background: var(--bg-card-color);
  color: var(--text-color);

  &_item {
    display: flex;
    align-items: center;
    color: var(--text-color);
  }
  &_title {
    font-size: 2rem;
  }
  &_prev,
  &_next {
    text-decoration: none;
    span {
      padding: 0 0.25em;
      font-size: 2rem;
    }
  }
}

.select {
  -webkit-appearance: none;
  padding: 0.5em 1.5rem 0.5em 0.5rem;
  outline: none;
  border: none;
  font-size: 1rem;
  border-radius: 4px;
  margin-left: 0.5em;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAYAAAARx7TFAAAAAXNSR0IArs4c6QAAAJ1JREFUCB1jzMnJCWdkZBSdPHnyFAYk0NDQwPbmzZuVTExMk5iA4p7//v2bDFScC1OzatUqZqCC5f////cHyikwiYiIJAFNWgIUmARSCKQZDx48OAdIBwJNSZ8yZcp8RpBuoNFMQJ0LgRIxQO4hILYFKsgEOmEmSJ4ZRBw4cOC/l5fXxu/fvysDub5Ak3OAJswAyWEAkIm5ublu6BIADTRHW7YWzxEAAAAASUVORK5CYII=");
  background-position: right 7px center;
  background-repeat: no-repeat;
  color: var(--bg-color);
  background-color: var(--text-color);
  border: 1px solid var(--bg-color);
}
.text-nav {
  // mobile
  @media screen and (max-width: 480px) {
    display: none;
  }
}
</style>
