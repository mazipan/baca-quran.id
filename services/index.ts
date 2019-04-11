import axios from 'axios'
import ApiPath from '../constant/api-path'

export const getAllSurah = () => {
  return axios.get(ApiPath.SURAH_INFO)
}

export const getSurahById = (id) => {
  return axios.get(ApiPath.SURAH_BY_ID(id))
}

export const getAyatKursi = () => {
  return axios.get(ApiPath.AYAT_KURSI)
}

export const getAsmaulHusna = () => {
  return axios.get(ApiPath.ASMAUL_HUSNA)
}

export const getDailyDoa = () => {
  return axios.get(ApiPath.DAILY_DOA)
}
