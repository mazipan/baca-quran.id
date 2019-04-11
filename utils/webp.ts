export const isSupportWebp = () => {
  let isSupportWebp = false
  if (process.env.NODE_ENV !== 'test') {
    const webpDummy = document.createElement('canvas').toDataURL('image/webp')
    if (webpDummy) {
      isSupportWebp = (webpDummy.indexOf('data:image/webp') === 0)
    }
  }
  return isSupportWebp
}
