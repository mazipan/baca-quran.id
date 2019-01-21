import MutationType from './mutation-type'

export default {
  [MutationType.SET_SHOW_SIDEBAR] (state, data) {
    state.isShowSidebar = data
  },
  [MutationType.SET_SUPPORT_WEBSHARE] (state, data) {
    state.isSupportWebShare = data
  },
  [MutationType.SET_HEADER_TITLE] (state, data) {
    state.headerTitle = data
  },
  [MutationType.SET_SURAH_LIST] (state, data) {
    state.allSurahList = data
  },
  [MutationType.SET_SURAH_DETAIL] (state, data) {
    state.surahDetail = data
  },
  [MutationType.SET_LAST_READ] (state, data) {
    state.lastReadVerse = data
  },
  [MutationType.SET_FAVORITE] (state, data) {
    state.surahFavorite = data
  },
  [MutationType.SET_NOTIFICATION] (state, data) {
    state.notification = data
  },
  [MutationType.SET_AYAT_KURSI] (state, data) {
    state.ayatKursi = data
  },
  [MutationType.SET_ASMAUL_HUSNA] (state, data) {
    state.asmaulHusna = data
  },
  [MutationType.SET_DAILY_DOA]  (state, data) {
    state.dailyDoa = data
  },
  [MutationType.SET_THEME] (state, data) {
    state.settingActiveTheme = data
  },
  [MutationType.SET_SETTING_TRANSLATION]  (state, data) {
    state.settingShowTranslation = data
  },
  [MutationType.SET_SETTING_TAFSIR]  (state, data) {
    state.settingShowTafsir = data
  }
}
