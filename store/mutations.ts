import { MutationTree } from 'vuex'
import { Types } from './types'
import { State } from './state'

export const mutations: MutationTree<State> = {
  [Types.SET_SHOW_SIDEBAR](state, data) {
    state.isShowSidebar = data
  },
  [Types.SET_SUPPORT_WEBSHARE](state, data) {
    state.isSupportWebShare = data
  },
  [Types.SET_HEADER_TITLE](state, data) {
    state.headerTitle = data
  },
  [Types.SET_SURAH_LIST](state, data) {
    state.allSurahList = data
  },
  [Types.SET_SURAH_DETAIL](state, data) {
    state.surahDetail = data
  },
  [Types.SET_LAST_READ](state, data) {
    state.lastReadVerse = data
  },
  [Types.SET_FAVORITE](state, data) {
    state.surahFavorite = data
  },
  [Types.SET_NOTIFICATION](state, data) {
    state.notification = data
  },
  [Types.SET_AYAT_KURSI](state, data) {
    state.ayatKursi = data
  },
  [Types.SET_ASMAUL_HUSNA](state, data) {
    state.asmaulHusna = data
  },
  [Types.SET_DAILY_DOA](state, data) {
    state.dailyDoa = data
  },
  [Types.SET_THEME](state, data) {
    state.settingActiveTheme = data
  },
  [Types.SET_SETTING_TRANSLATION](state, data) {
    state.settingShowTranslation = data
  },
  [Types.SET_SETTING_TAFSIR](state, data) {
    state.settingShowTafsir = data
  }
}
