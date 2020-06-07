import { MutationTree } from 'vuex'

import { StateType } from './state'
import { Types } from './types'
import { Notification } from '~/models/Nofication'
import { Theme } from '~/models/Theme'

export const mutations: MutationTree<StateType> = {
  [Types.SET_SHOW_SIDEBAR] (state: StateType, data: boolean) {
    state.isShowSidebar = data
  },
  [Types.SET_SUPPORT_WEBSHARE] (state: StateType, data: boolean) {
    state.isSupportWebShare = data
  },
  [Types.SET_HEADER_TITLE] (state: StateType, data: string) {
    state.headerTitle = data
  },
  [Types.SET_PAGE] (state: StateType, data: string) {
    state.page = data
  },
  [Types.SET_LAST_READ] (state: StateType, data: any) {
    state.lastReadVerse = data
  },
  [Types.SET_FAVORITE] (state: StateType, data: any[]) {
    state.surahFavorite = data
  },
  [Types.SET_NOTIFICATION] (state: StateType, data: Notification) {
    state.notification = data
  },
  [Types.SET_THEME] (state: StateType, data: Theme) {
    state.settingActiveTheme = data
  },
  [Types.SET_SETTING_TRANSLATION] (state: StateType, data: boolean) {
    state.settingShowTranslation = data
  },
  [Types.SET_SETTING_TAFSIR] (state: StateType, data: boolean) {
    state.settingShowTafsir = data
  },
  [Types.SET_SETTING_MUQADDIMAH] (state: StateType, data: boolean) {
    state.settingShowMuqaddimah = data
  }
}
