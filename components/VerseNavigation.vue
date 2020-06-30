<template>
  <div class="surah_nav">
    <nuxt-link
      :to="`/${isAMP ? 'amp/' : ''}${surahId}/${verseId - 1}/`"
      class="surah_nav_item surah_nav_prev">
      <MdArrowBackIcon
        v-if="isHavePrev"
        w="30px"
        h="30px" />
      <span
        v-if="isHavePrev"
        class="text-nav">
        {{ verseId - 1 }}
      </span>
    </nuxt-link>

    <div v-if="!isAMP" class="surah_nav_item surah_nav_center">
      <select
        :value="verseId"
        name="verse-select"
        class="select"
        @change="onChangeVerse">
        <option
          v-for="num in arrayAyah"
          :key="num"
          :value="num">
          {{ num }}
        </option>
      </select>
    </div>

    <div v-if="isAMP" class="surah_nav_item surah_nav_center">
      <span class="text-nav">{{ verseId }}</span>
    </div>

    <nuxt-link
      :to="`/${isAMP ? 'amp/' : ''}${surahId}/${verseId + 1}/`"
      class="surah_nav_item surah_nav_next">
      <span
        v-if="isHaveNext"
        class="text-nav">
        {{ verseId + 1 }}
      </span>
      <MdArrowForwardIcon
        v-if="isHaveNext"
        w="30px"
        h="30px" />
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

import MdArrowBackIcon from 'vue-ionicons/dist/js/md-arrow-back'
import MdArrowForwardIcon from 'vue-ionicons/dist/js/md-arrow-forward'

@Component({
  components: {
    MdArrowBackIcon,
    MdArrowForwardIcon
  }
})

export default class VerseNavigation extends Vue {
  @Prop({ type: Number, default: 1 }) readonly surahId!: number
  @Prop({ type: Number, default: 1 }) readonly verseId!: number
  @Prop({ type: Number, default: 0 }) readonly verseCount!: number
  @Prop({ type: Function, default: () => {} }) readonly onChangeVerse!: Function

  get isAMP (): boolean {
    return Boolean(this.$route.name.includes('amp'))
  }

  get isHavePrev (): boolean {
    return this.verseId > 1
  }

  get isHaveNext (): boolean {
    return this.verseId < this.verseCount
  }

  get arrayAyah (): number[] {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return Array.from({ length: this.verseCount }, (v, k) => k + 1)
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
  }
}
.text-nav{
  padding: 0 .25em;
  font-size: 2rem;
}
.select{
  -webkit-appearance: none;
  padding: .5em 1.5rem .5em .5rem;
  outline: none;
  border: none;
  font-size: 1rem;
  border-radius: 4px;
  margin-left: .5em;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAYAAAARx7TFAAAAAXNSR0IArs4c6QAAAJ1JREFUCB1jzMnJCWdkZBSdPHnyFAYk0NDQwPbmzZuVTExMk5iA4p7//v2bDFScC1OzatUqZqCC5f////cHyikwiYiIJAFNWgIUmARSCKQZDx48OAdIBwJNSZ8yZcp8RpBuoNFMQJ0LgRIxQO4hILYFKsgEOmEmSJ4ZRBw4cOC/l5fXxu/fvysDub5Ak3OAJswAyWEAkIm5ublu6BIADTRHW7YWzxEAAAAASUVORK5CYII=");
  background-position: right 7px center;
  background-repeat: no-repeat;
  color: var(--bg-color);
  background-color: var(--text-color);
  border: 1px solid var(--bg-color);
}
.text-nav{
  // mobile
  @media screen and (max-width: 480px) {
    display: none;
  }
}
</style>
