export default {
  setTheme (state, data) {
    state.theme = data
  },
  setHeaderTitle (state, data) {
    state.headerTitle = data
  },
  setSurahList (state, data) {
    state.allSurahList = data
  },
  setSurahDetail (state, data) {
    state.surahDetail = data
  },
  setLastReadVerse (state, data) {
    state.lastReadVerse = data
  },
  setSurahFavorite (state, data) {
    state.surahFavorite = data
  },
  setNotification (state, data) {
    state.notification = data
  }
}
