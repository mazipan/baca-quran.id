import { AppConstant } from '~/constant/index'
import ThemeItem from '~/constant/theme'

import { Notification } from '~/models/Nofication'
import { Theme } from '~/models/Theme'

export interface StateType {
  notification: Notification,
  isShowSidebar: boolean,
  isSupportWebShare: boolean,
  headerTitle: string,
  page: string,
  lastReadVerse: any,
  settingActiveTheme: Theme,
  settingShowTranslation: boolean,
  settingShowTafsir: boolean,
  settingShowMuqaddimah: boolean,
  surahFavorite: any[],
}

// initial state
export const state: StateType = {
  notification: {
    show: false,
    title: '',
    message: ''
  },
  isShowSidebar: false,
  isSupportWebShare: false,
  headerTitle: AppConstant.TITLE,
  page: 'home',
  lastReadVerse: null,
  settingActiveTheme: ThemeItem.DARK,
  settingShowTranslation: false,
  settingShowTafsir: false,
  settingShowMuqaddimah: true,
  surahFavorite: []
}
