/* eslint-disable camelcase */
export interface Surah {
  number: number,
  name: string,
  name_latin: string,
  number_of_ayah: string,
  text: string[],
  translations: {
    id: {
      name: string,
      text: any
    }
  },
  tafsir: {
    id: {
      kemenag: {
        name: string,
        source: string,
        text: any
      }
    }
  }
}
