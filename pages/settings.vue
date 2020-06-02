<template>
  <div class="container">
    <div class="wrapper">
      <div class="settings">
        <div class="settings__group">
          <label
            for="setting-translation">
            Pilih tema aplikasi
          </label>
          <div class="settings__themes">
            <div
              v-for="theme in themesAvailable"
              :key="theme.name"
              :style="{'background-color': theme.bgColor, 'color': theme.fgColor}"
              class="settings__theme"
              :class="{'settings__theme--active': theme.name === settingActiveTheme.name}"
              @click="onSelectTheme(theme)">
              {{ theme.name }}
            </div>
          </div>
        </div>

        <div class="settings__group settings__group--flex">
          <label
            for="setting-translation">
            Tampilkan terjemah
          </label>
          <label class="switch">
            <input
              id="setting-translation"
              v-model="modelSettingTranslation"
              type="checkbox"
              name="translation"
              @change="onChangeSettingTranslation">
            <span class="slider round" />
          </label>
        </div>

        <div class="settings__group settings__group--flex">
          <label
            for="setting-tafsir">
            Tampilkan tafsir
          </label>
          <label class="switch">
            <input
              id="setting-tafsir"
              v-model="modelSettingTafsir"
              type="checkbox"
              name="translation"
              @change="onChangeSettingTafsir">
            <span class="slider round" />
          </label>
        </div>
      </div>
    </div>
    <div class="footnote">
      Dibuat oleh <a href="https://mazipan.space/" target="_blank" rel="noopener noreferrer">Irfan Maulana</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State, Mutation, Action } from 'vuex-class'

import { META_TITLE_SETTING } from '../constant'
import Theme from '../constant/theme'

@Component
export default class SettingsPage extends Vue {
  themesAvailable = Theme.AVAILABLE_THEME
  modelSettingTranslation = true
  modelSettingTafsir = true

  @State settingActiveTheme;
  @State settingShowTranslation;
  @State settingShowTafsir;

  @Mutation setHeaderTitle;
  @Mutation setPage

  @Action setActiveTheme;
  @Action setSettingTranslation
  @Action setSettingTafsir

  get metaHead () {
    return {
      title: META_TITLE_SETTING,
      meta: [
        { hid: 'og:title', property: 'og:title', content: META_TITLE_SETTING },
        { hid: 'twitter:title', name: 'twitter:title', content: META_TITLE_SETTING },
        { hid: 'theme-color', name: 'theme-color', content: this.settingActiveTheme.bgColor }
      ]
    }
  }

  head () {
    return this.metaHead
  }

  setDefaultSetting () {
    this.modelSettingTranslation = this.settingShowTranslation
    this.modelSettingTafsir = this.settingShowTafsir
  }

  onSelectTheme (theme) {
    this.setActiveTheme(theme)
    // @ts-ignore
    window.__setPreferredTheme(theme.name.toLowerCase())
  }

  onChangeSettingTranslation () {
    this.setSettingTranslation(this.modelSettingTranslation)
  }

  onChangeSettingTafsir () {
    this.setSettingTafsir(this.modelSettingTafsir)
  }

  mounted () {
    this.setHeaderTitle('Setelan')
    this.setPage('settings')
    this.setDefaultSetting()
  }

  activated () {
    this.setHeaderTitle('Setelan')
    this.setPage('settings')
    this.setDefaultSetting()
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/switch.scss";
.settings{
  &__themes {
    display: flex;
    align-items: center;
  }
  margin-top: 1em;

  &__group {
    margin-bottom: 2em;

    &--flex{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__theme{
    border: 1px solid #000;
    margin: .5em 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: .5em 1em;
    text-transform: capitalize;
    cursor: pointer;

    &:first-child {
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
      z-index: 0;
    }
    &:nth-child(2) {
      z-index: 1;
    }
    &:last-child {
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
      z-index: 0;
    }

    &--active{
      box-shadow: 0 0 0 0.25em rgba(29, 101, 216, 0.7);
    }
  }
}
</style>
