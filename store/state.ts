import { AppConstant } from '../constant/index'
import { SurahDefaultObject } from '../constant/default-object'
import ThemeItem from '../constant/theme'

import { Notification } from '../models/Nofication'
import { AyatKursi } from '../models/AyatKursi'
import { Theme } from '../models/Theme'
import { Surah } from '../models/Surah'

export interface StateType {
  notification: Notification,
  isShowSidebar: boolean,
  isSupportWebShare: boolean,
  headerTitle: string,
  allSurahList: any[],
  surahDetail: Surah,
  lastReadVerse: any,
  surahFavorite: any[],
  ayatKursi: AyatKursi,
  asmaulHusna: any[],
  dailyDoa: any[],
  settingActiveTheme: Theme,
  settingShowTranslation: boolean,
  settingShowTafsir: boolean
}

// initial state
export const state = (): StateType => ({
  notification: {
    show: false,
    title: '',
    message: ''
  },
  isShowSidebar: false,
  isSupportWebShare: false,
  headerTitle: AppConstant.TITLE,
  allSurahList: [],
  surahDetail: SurahDefaultObject,
  lastReadVerse: null,
  surahFavorite: [],
  ayatKursi: {
    tafsir: '',
    translation: '',
    arabic: '',
    latin: ''
  },
  asmaulHusna: [],
  dailyDoa: [],
  settingActiveTheme: ThemeItem.LIGHT,
  settingShowTranslation: true,
  settingShowTafsir: true
})
