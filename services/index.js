import { ApiPath } from '../constant/index'

export const getAllSurah = () => {
  return fetch(ApiPath.SURAH_INFO)
    .then(response => response.json())
}

export const getSurahById = (id) => {
  return fetch(ApiPath.SURAH_BY_ID(id))
    .then(response => response.json())
}
