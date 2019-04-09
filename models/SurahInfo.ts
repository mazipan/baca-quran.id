/* eslint-disable camelcase */
export interface SurahInfo {
  translation: string,
  arabic: string,
  latin: string,
  ayah_count: number,
  index: number,
  opening: string,
  closing: string,
}

export const defaultSurahInfo: SurahInfo = {
  translation: '',
  arabic: '',
  latin: '',
  ayah_count: 0,
  index: 0,
  opening: '',
  closing: ''
}
