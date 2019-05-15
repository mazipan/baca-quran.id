import { MutationTree } from 'vuex'

import { Notification } from '../models/Nofication'
import { Surah } from '../models/Surah'
import { AyatKursi } from '../models/AyatKursi'
import { Theme } from '../models/Theme'
import { StateType } from './state'
import { Types } from './types'

export const mutations: MutationTree<StateType> = {
  [Types.SET_SHOW_SIDEBAR](state: StateType, data: boolean) {
    state.isShowSidebar = data
  },
  [Types.SET_SUPPORT_WEBSHARE](state: StateType, data: boolean) {
    state.isSupportWebShare = data
  },
  [Types.SET_HEADER_TITLE](state: StateType, data: string) {
    state.headerTitle = data
  },
  [Types.SET_SURAH_LIST](state: StateType, data: any[]) {
    state.allSurahList = data
  },
  [Types.SET_SURAH_DETAIL](state: StateType, data: Surah) {
    state.surahDetail = data
  },
  [Types.SET_LAST_READ](state: StateType, data: any) {
    state.lastReadVerse = data
  },
  [Types.SET_FAVORITE](state: StateType, data: any[]) {
    state.surahFavorite = data
  },
  [Types.SET_NOTIFICATION](state: StateType, data: Notification) {
    state.notification = data
  },
  [Types.SET_AYAT_KURSI](state: StateType, data: AyatKursi) {
    state.ayatKursi = data
  },
  [Types.SET_ASMAUL_HUSNA](state: StateType, data: any[]) {
    state.asmaulHusna = data
  },
  [Types.SET_DAILY_DOA](state: StateType, data: any[]) {
    state.dailyDoa = data
  },
  [Types.SET_THEME](state: StateType, data: Theme) {
    state.settingActiveTheme = data
  },
  [Types.SET_SETTING_TRANSLATION](state: StateType, data: boolean) {
    state.settingShowTranslation = data
  },
  [Types.SET_SETTING_TAFSIR](state: StateType, data: boolean) {
    state.settingShowTafsir = data
  }
}
