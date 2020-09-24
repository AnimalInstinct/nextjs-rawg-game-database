export const buildQuery = (obj = {}) => {
  const cleanObj = clean(obj)
  const pairs = Object.keys(cleanObj)
    .map((k) => k + '=' + obj[k])
    .join('&')
  if (!!pairs) {
    return `?${pairs}`
  }
  return ''
}

const clean = (obj) => {
  const result = {}
  Object.keys(obj).forEach((key) => {
    if (!!obj[key]) {
      result[key] = obj[key]
    }
  })
  return result
}
