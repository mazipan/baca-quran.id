<template>
  <div>
    <nuxt-link class="surah-header" :to="`/${surahNumber}/`">
      <div class="font-arabic" dir="rtl" lang="ar">
        {{ surahName }}
      </div>
      <div class="surah-latin">
        ({{ surahLatin }} - {{ surahTranslation }})
      </div>
      <div v-if="verseCount > 0" class="surah-latin">
        {{ verseCount }} Ayat
      </div>
    </nuxt-link>
    <div v-if="!isAmp" class="settings__group">
      <label for="surah-setting-tafsir">Tafsir</label>
      <label class="switch">
        <input
          id="surah-setting-tafsir"
          :checked="settingShowTafsir"
          type="checkbox"
          name="tafsir"
          @change="onChangeSettingTafsir">
        <span class="slider round" />
      </label>

      <label for="surah-setting-translation">Terjemahan</label>
      <label class="switch">
        <input
          id="surah-setting-translation"
          :checked="settingShowTranslation"
          type="checkbox"
          name="translation"
          @change="onChangeSettingTranslation">
        <span class="slider round" />
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { State, Action } from 'vuex-class'

@Component
export default class SurahHeader extends Vue {
  @Prop({ type: Number, default: 0 }) readonly surahNumber!: number;
  @Prop({ type: String, default: '' }) readonly surahName!: string;
  @Prop({ type: String, default: '' }) readonly surahLatin!: string;
  @Prop({ type: String, default: '' }) readonly surahTranslation!: string;
  @Prop({ type: Number, default: 0 }) readonly verseCount!: number;
  @Prop({ type: String, default: '' }) readonly source!: string;

  @State settingShowTranslation;
  @State settingShowTafsir;

  @Action setSettingTranslation
  @Action setSettingTafsir

  get isAmp (): boolean {
    return this.source.includes('amp')
  }

  onChangeSettingTranslation () {
    this.setSettingTranslation(!this.settingShowTranslation)
  }

  onChangeSettingTafsir () {
    this.setSettingTafsir(!this.settingShowTafsir)
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/switch.scss";
.surah-header {
  width: 90%;
  margin: 1em auto;
  font-size: 2rem;
  text-align: center;
  text-decoration: none;
}
.surah-latin {
  font-size: 1rem;
}
.settings__group{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  & > label[for] {
    padding-right: .5em;
  }
  & > label:not([for]) {
    margin-right: 1em;
  }
}
</style>
