const padHex = (hex: string, byteCount = 0) => {
  let result = hex
  if (hex.length % 2 !== 0) {
    result = `0${hex}`
  }

  while (result.length / 2 < byteCount) {
    result = `00${result}`
  }

  return result
}

export { padHex }
