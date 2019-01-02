import ApiPath from '../constant/api-path'

export const getAllSurah = () => {
  return fetch(ApiPath.SURAH_INFO)
    .then(response => response.json())
}

export const getSurahById = (id) => {
  return fetch(ApiPath.SURAH_BY_ID(id))
    .then(response => response.json())
}

export const getAyatKursi = (id) => {
  return fetch(ApiPath.AYAT_KURSI)
    .then(response => response.json())
}

export const getAsmaulHusna = (id) => {
  return fetch(ApiPath.ASMAUL_HUSNA)
    .then(response => response.json())
}
