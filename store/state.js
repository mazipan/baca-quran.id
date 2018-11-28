import { Theme, AppConstant, SurahDefaultObject } from '../constant/index'

export default () => ({
  notification: {
    show: false,
    title: '',
    message: ''
  },
  theme: Theme.LIGHT,
  headerTitle: AppConstant.TITLE,
  allSurahList: [],
  surahDetail: SurahDefaultObject,
  lastReadVerse: null,
  surahFavorite: []
})
