module.exports = function check(str, bracketsConfig) {
  while (str.length > 2) {
    const conLength = str.length
    let prevLength
    for (let i = 0; i < bracketsConfig.length; i++) {
      str = str.replace(bracketsConfig[i].join(''), '')
      prevLength = str.length
    }
    if (prevLength === conLength) return false
  }

  for (let i = 0; i < bracketsConfig.length; i++) {
    if (str === bracketsConfig[i].join('') || !str) return true
  }
  return false
}
