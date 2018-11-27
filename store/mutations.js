export default {
  setTheme (state, data) {
    state.theme = data
  },
  setThemeText (state, data) {
    state.themeTextColor = data
  },
  setSurahList (state, data) {
    state.allSurahList = data
  },
  setSurahDetail (state, data) {
    console.log('before mutations', state, data)
    state.surahDetail = data
    console.log('after mutations', state, data)
  },
  setLastReadVerse (state, data) {
    state.lastReadVerse = data
  },
  setSurahFavorite (state, data) {
    state.surahFavorite = data
  }
}
