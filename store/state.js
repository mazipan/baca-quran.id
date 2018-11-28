import { Theme, AppConstant, SurahDefaultObject } from '../constant/index'

export default () => ({
  theme: Theme.LIGHT,
  headerTitle: AppConstant.TITLE,
  allSurahList: [],
  surahDetail: SurahDefaultObject,
  lastReadVerse: null,
  surahFavorite: []
})
