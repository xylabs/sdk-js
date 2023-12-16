import { AND_SYMBOL, NOT_SYMBOL, OR_SYMBOL } from './config'
import { AND_REGX, BAD_REGX, GOOD_REGX, OR_REGX, PLAIN_REGX } from './regexps'

// f.e. tag1 !tag2
// tag1 && tag2 && !tag3
// tag1 || tag2 || !tag3

//ATTENTION!!: cases with () not handled: f.e. (tag1 && tag2) || tag3 won`t work

export const matchFilter =
  (strParam = '') =>
  (tags: string[]) => {
    const str = strParam.trim()
    if (typeof tags === 'string') {
      tags = [tags]
    }
    if (str.includes(OR_SYMBOL)) {
      const include = goodTags(str.split(OR_REGX))
      const exclude = badTags(str.split(OR_REGX))
      if (exclude.length === 0) {
        return include.length === 0 || include.some((s) => tags.includes(s))
      }
      if (include.length === 0 && exclude.length > 0) {
        return exclude.some((s) => !tags.includes(s))
      }
      return include.length === 0 || include.some((s) => tags.includes(s)) || exclude.some((s) => !tags.includes(s))
    }
    if (str.includes(AND_SYMBOL)) {
      const include = goodTags(str.split(AND_REGX))
      const exclude = badTags(str.split(AND_REGX))

      return include.every((s) => tags.includes(s)) && !exclude.some((s) => tags.includes(s))
    }
    const include = goodTags(str.split(PLAIN_REGX))
    const exclude = badTags(str.split(PLAIN_REGX))

    return (include.length === 0 || include.some((s) => tags.includes(s))) && !exclude.some((s) => tags.includes(s))
  }

const goodTags = (arr: string[]) => {
  return arr.filter((s) => s.match(GOOD_REGX))
}

const badTags = (arr: string[]) => {
  return arr.filter((s) => s.match(BAD_REGX)).map((s) => s.replace(NOT_SYMBOL, ''))
}
