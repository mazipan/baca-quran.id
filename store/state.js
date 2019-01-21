import { AppConstant } from '../constant/index'
import { SurahDefaultObject } from '../constant/default-object'
import Theme from '../constant/theme'

export default () => ({
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
  settingActiveTheme: Theme.LIGHT,
  settingShowTranslation: true,
  settingShowTafsir: true
})
