export const AppConstant = {
  TITLE: "Qur'an Offline"
}

export const ApiPath = {
  SURAH_INFO: '/data/surah-info.json',
  SURAH_BY_ID: (id) => `/data/surah/${id}.json`
}

export const Theme = {
  BG_COLOR: '#41b883',
  TEXT_COLOR: '#000'
}

export const storageKey = {
  ALL_SURAH: 'ALL_SURAH',
  SURAH_BY_ID: (id) => `SURAH_${id}`
}

export const SurahDefaultObject = {
  number: 0,
  name: '',
  name_latin: '',
  number_of_ayah: '',
  text: [],
  translations: {
    id: {
      name: '',
      text: ''
    }
  }
}
