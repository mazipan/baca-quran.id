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
      <div>
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
      </div>

      <div>
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

      <div>
        <label for="surah-setting-muqaddimah">Muqaddimah</label>
        <label class="switch">
          <input
            id="surah-setting-muqaddimah"
            :checked="settingShowMuqaddimah"
            type="checkbox"
            name="muqaddimah"
            @change="onChangeSettingMuqaddimah">
          <span class="slider round" />
        </label>
      </div>
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
  @State settingShowMuqaddimah;

  @Action setSettingTranslation;
  @Action setSettingTafsir;
  @Action setSettingMuqaddimah;

  get isAmp (): boolean {
    return this.source.includes('amp')
  }

  onChangeSettingTranslation (e: any) {
    this.setSettingTranslation(e.target.checked)
  }

  onChangeSettingTafsir (e: any) {
    this.setSettingTafsir(e.target.checked)
  }

  onChangeSettingMuqaddimah (e: any) {
    this.setSettingMuqaddimah(e.target.checked)
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/switch.scss";
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
  flex-wrap: wrap;
  margin-top: 1em;

  & > div {
    margin-right: 1em;
    margin-bottom: 1em;
  }
}
</style>
