import { isString } from '@xylabs/typeof'
import { load } from 'cheerio'

const opts = {}
// const opts = { decodeEntities: false }

export const mergeDocumentHead = (destination: string, source: string) => {
  const $destination = load(destination, opts)
  const $source = load(source, opts)

  // For each child node of the source head
  $source('head')
    .children()
    .each((_, element) => {
      const el = $destination(element)

      // Special case for meta tags: We want to match them by the name attribute
      if (el[0].tagName === 'meta') {
        const property = el.attr('property')
        if (isString(property)) {
          const match = $destination(`head meta[property="${property}"]`)

          // If it exists, replace it, otherwise append it
          if (match.length > 0) {
            match.replaceWith(el)
            return
          } else {
            $destination('head').append(el)
          }
        }
        // else {
        //   // For all other elements, just check if the same element exists in the first HTML string
        //   const match = $destination(el[0].tagName)

        //   // If it exists, replace it, otherwise append it
        //   if (match.length > 0) {
        //     match.replaceWith(el)
        //   } else {
        //     $destination('head').append(el)
        //   }
        // }
      }
    })

  // Return the merged HTML
  return $destination.html(opts)
}
