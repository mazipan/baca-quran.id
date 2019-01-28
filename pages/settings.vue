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
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import MutationType from '../store/mutation-type'

import Theme from '../constant/theme'

export default {
  name: 'SettingsPage',
  head () {
    return this.metaHead
  },
  data () {
    return {
      themesAvailable: Theme.AVAILABLE_THEME,
      modelSettingTranslation: true,
      modelSettingTafsir: true
    }
  },
  computed: {
    ...mapState([
      'settingActiveTheme',
      'settingShowTranslation',
      'settingShowTafsir'
    ]),
    metaHead () {
      const title = 'Halaman Setelan | Qur\'an Offline'
      return {
        title,
        meta: [
          { hid: 'og:title', property: 'og:title', content: title },
          { hid: 'twitter:title', name: 'twitter:title', content: title },
          { hid: 'theme-color', name: 'theme-color', content: this.settingActiveTheme.bgColor }
        ]
      }
    }
  },
  mounted () {
    this[MutationType.SET_HEADER_TITLE](this.$t('setting'))
    setTimeout(() => {
      this.modelSettingTranslation = this.settingShowTranslation
      this.modelSettingTafsir = this.settingShowTafsir
    }, 500)
  },
  methods: {
    ...mapMutations([
      MutationType.SET_HEADER_TITLE
    ]),
    ...mapActions([
      'setActiveTheme',
      'setSettingTranslation',
      'setSettingTafsir'
    ]),
    onSelectTheme (theme) {
      this.setActiveTheme(theme)
    },
    onChangeSettingTranslation () {
      this.setSettingTranslation(this.modelSettingTranslation)
    },
    onChangeSettingTafsir () {
      this.setSettingTafsir(this.modelSettingTafsir)
    }
  }
}
</script>

<style lang="scss" scoped>
.settings{
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
    padding: .5em;
    text-transform: capitalize;

    &--active{
      box-shadow: 0 0 0 0.25em rgba(29, 101, 216, 0.7);
    }
  }
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
