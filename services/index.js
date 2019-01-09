import ApiPath from '../constant/api-path'

export const getAllSurah = () => {
  return fetch(ApiPath.SURAH_INFO)
    .then(response => response.json())
}

export const getSurahById = (id) => {
  return fetch(ApiPath.SURAH_BY_ID(id))
    .then(response => response.json())
}

export const getAyatKursi = () => {
  return fetch(ApiPath.AYAT_KURSI)
    .then(response => response.json())
}

export const getAsmaulHusna = () => {
  return fetch(ApiPath.ASMAUL_HUSNA)
    .then(response => response.json())
}

export const getDailyDoa = () => {
  return fetch(ApiPath.DAILY_DOA)
    .then(response => response.json())
}
