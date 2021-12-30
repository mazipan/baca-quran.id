<template>
  <div :id="`verse-${verseIndex}`" class="verse block_content has-shadow" :class="{ 'playing' : playing}" :data-source="source">
    <div class="verse__header">
      <div class="verse__index tag_index">
        {{ Number(verseIndex) }}
      </div>
      <div class="verse__header--right">
        <div v-if="!isAmp && !playing" class="verse__header_icon" @click="onClickPlayAudioItem(Number(verseIndex))">
          <MdPlayIcon w="2em" h="2em" />
        </div>

        <div v-if="!isAmp && playing" class="verse__header_icon" @click="onClickPauseAudioItem(Number(verseIndex))">
          <MdPauseIcon w="2em" h="2em" />
        </div>

        <div
          v-if="!isAmp"
          class="verse__header_icon"
          @click="doSetLastReadVerse({ surah: surahId, verse: Number(verseIndex) })">
          <MdBookmarkIcon w="2em" h="2em" />
        </div>

        <div
          v-if="!isAmp && isSupportWebShare"
          class="verse__header_icon"
          @click="shareVerse(verse, Number(verseIndex))">
          <MdShareIcon w="2em" h="2em" />
        </div>

        <nuxt-link
          v-if="!isAmp && !source.includes('verse')"
          class="verse__header_icon"
          :to="`/${surahId}/${verseIndex}/`">
          <MdLinkIcon w="2em" h="2em" />
        </nuxt-link>
      </div>
    </div>
    <div class="divider clearfix">
      <div class="verse__arabic font-arabic" dir="rtl" lang="ar">
        {{ verse.trim() }}
      </div>
    </div>

    <div v-if="!showSettings || settingShowTranslation" class="divider clearfix">
      <div class="verse__bold">
        <b>Terjemah:</b>
      </div>
      <div class="verse__translation">
        {{ getTranslation(verseIndex) }}
      </div>
    </div>

    <div v-if="!showSettings || settingShowTafsir" class="divider clearfix">
      <div class="verse__bold">
        <b>Tafsir dari Kemenag:</b>
      </div>
      <div class="verse__tafsir">
        {{ getTafsir(verseIndex) }}
      </div>
      <div class="verse__small">
        <i>Sumber: Aplikasi Quran Kementrian Agama Republik Indonesia</i>
      </div>
    </div>

    <audio v-if="!isAmp && audioLink" :id="`audioVerseRef${verseIndex}`" class="audio">
      <source :src="audioLink" type="audio/mpeg">
    </audio>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { State, Action } from 'vuex-class'

import MdShareIcon from 'vue-ionicons/dist/js/md-share'
import MdBookmarkIcon from 'vue-ionicons/dist/js/md-bookmark'
import MdPauseIcon from 'vue-ionicons/dist/js/md-pause'
import MdPlayIcon from 'vue-ionicons/dist/js/md-play'
import MdLinkIcon from 'vue-ionicons/dist/js/md-link'
import MurotalConstant from '~/constant/murotal'
import { AppConstant } from '~/constant'

@Component({
  components: {
    MdShareIcon,
    MdBookmarkIcon,
    MdPlayIcon,
    MdPauseIcon,
    MdLinkIcon
  }
})
export default class SingleVerseCard extends Vue {
  AppConstant = AppConstant;
  playing = false;

  @Prop({ type: [Object, Array], default: () => ({}) }) readonly verseArray!:
    | any
    | any[];

  @Prop({ type: Object, default: () => ({}) }) readonly translations!: any;
  @Prop({ type: Object, default: () => ({}) }) readonly tafsir!: any;
  @Prop({ type: Number, default: 1 }) readonly surahId!: number;
  @Prop({ type: String, default: '' }) readonly verse!: string;
  @Prop({ type: String, default: '1' }) readonly verseIndex!: number;
  @Prop({ type: String, default: '' }) readonly source!: string;
  @Prop({ type: Boolean, default: false }) readonly showSettings!: boolean;

  @State surahFavorite;
  @State isSupportWebShare;
  @State settingShowTranslation;
  @State settingShowTafsir;

  @Action setLastReadVerse;
  @Action showNotification;
  @Action shareViaWebshare;

  get isAmp (): boolean {
    return this.source.includes('amp')
  }

  get audioLink (): string {
    return MurotalConstant.getAudioFromKemenag(this.surahId, this.verseIndex)
  }

  onClickPlayAudioItem (verse) {
    const scopeVue = this
    try {
      const player: HTMLAudioElement = document.querySelector(`#audioVerseRef${verse}`)
      scopeVue.playing = true

      player.addEventListener('ended', function () {
        scopeVue.playing = false
      })

      player.addEventListener('pause', function () {
        scopeVue.playing = false
      })

      // @ts-ignore
      if (window.currentAudio) {
        // @ts-ignore
        console.log('window.currentAudio exist', window.currentAudio)
        // @ts-ignore
        const _currentAudio = window.currentAudio
        _currentAudio.pause()

        console.log('window.currentAudio paused')
        player.play()
        // @ts-ignore
        window.currentAudio = player
      } else {
        console.log('window.currentAudio not exist')
        // @ts-ignore
        window.currentAudio = player
        player.play()
      }
    } catch {}
  }

  onClickPauseAudioItem (verse) {
    const scopeVue = this
    try {
      scopeVue.playing = false
      const player: HTMLAudioElement = document.querySelector(`#audioVerseRef${verse}`)
      player.pause()
    } catch {}
  }

  getTranslation (indexVerse) {
    return this.translations.id.text[indexVerse]
  }

  getTafsir (indexVerse) {
    return this.tafsir.id.kemenag.text[indexVerse]
  }

  doSetLastReadVerse (data) {
    this.setLastReadVerse(data)
    this.showNotification({
      title: 'Pesan Sukses',
      message: `QS ${data.surah}:${data.verse} telah ditambahkan ke terakhir dibaca.`
    })
  }

  shareVerse (verse, index) {
    const data = {
      title: `QS ${this.surahId}:${index}`,
      text: `${verse}

        Terjemahan: ${this.getTranslation(index)} (QS ${
        this.surahId
      }:${index})`,
      url: `${AppConstant.PATH}${this.surahId}/${index}/`
    }
    this.shareViaWebshare(data)
  }
}
</script>

<style lang="scss" scoped>
.verse {
  text-align: left;

  &.playing {
    border: 2px solid var(--text-color);
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &--right {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &_icon {
      padding: 0 0.5em;
      position: relative;
      color: var(--text-color);
      cursor: pointer;
    }
  }
  &__arabic {
    font-size: 2rem;
    width: 100%;
    float: right;
    text-align: right;
    margin-top: 0.25em;
  }
  &__translation {
    font-size: 1rem;
    width: 100%;
    font-style: italic;
    margin-top: 1.5em;
  }
  &__tafsir {
    font-size: 1rem;
    width: 100%;
    margin-top: 1.5em;
  }
  &__bold {
    font-weight: bold;
    margin-top: 1.5em;
    line-height: 1.5;
  }
  &__small {
    font-size: 0.8rem;
    margin-top: 1.5em;
    font-style: italic;
  }
}
.audio {
  position: fixed;
  bottom: 70px;
}
</style>
