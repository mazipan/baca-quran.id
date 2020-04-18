import { AppConstant } from '../constant/index'
import ThemeItem from '../constant/theme'

import { Notification } from '../models/Nofication'
import { Theme } from '../models/Theme'

export interface StateType {
  notification: Notification,
  isShowSidebar: boolean,
  isSupportWebShare: boolean,
  headerTitle: string,
  lastReadVerse: any,
  settingActiveTheme: Theme,
  settingShowTranslation: boolean,
  settingShowTafsir: boolean,
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
  lastReadVerse: null,
  settingActiveTheme: ThemeItem.LIGHT,
  settingShowTranslation: true,
  settingShowTafsir: true,
  surahFavorite: []
}
