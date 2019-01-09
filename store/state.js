import { Theme, AppConstant } from '../constant/index'
import { SurahDefaultObject } from '../constant/default-object'

export default () => ({
  notification: {
    show: false,
    title: '',
    message: ''
  },
  theme: Theme.LIGHT,
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
  dailyDoa: []
})
