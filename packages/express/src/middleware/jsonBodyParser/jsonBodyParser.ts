import type { OptionsJson } from 'body-parser'
import bodyParser from 'body-parser'
import type { NextHandleFunction } from 'connect'

/**
 * The default maximum request body size for the JSON Body Parser
 */
export const DefaultJsonBodyParserOptionsLimit = '100kb'

/**
 * The default MIME types for the JSON Body Parser
 */
export const DefaultJsonBodyParserOptionsTypes = ['application/json', 'text/json']

/**
 * The default options for the JSON Body Parser
 */
export const DefaultJsonBodyParserOptions: OptionsJson = {
  limit: DefaultJsonBodyParserOptionsLimit,
  type: DefaultJsonBodyParserOptionsTypes,
}

/**
 * Gets the default JSON Body Parser options merged with the supplied options
 * with the supplied options taking precedence
 * @param options The options to override the default JSON Body Parser options with
 * @returns The combined JSON Body Parser options with the supplied values taking
 * precedence over the default
 */
export const getJsonBodyParserOptions = (options?: Partial<OptionsJson>): OptionsJson => {
  return options ? { ...DefaultJsonBodyParserOptions, ...options } : DefaultJsonBodyParserOptions
}

/**
 * Get a JSON Body Parser connect middleware handler
 * @param options The options for the JSON Body Parser
 * @returns A middleware function that parses JSON bodies
 */
export const getJsonBodyParser = (options: OptionsJson = DefaultJsonBodyParserOptions): NextHandleFunction => {
  // Create closed instance of bodyParser to prevent instantiation of new instance on every request
  const parser = bodyParser.json(options)

  return (req, res, next) => {
    // If we do not trap this error, then it dumps too much to log, usually happens if request aborted
    try {
      parser(req, res, next)
    } catch (ex) {
      const error = ex as Error
      console.log(`bodyParser failed [${error?.name}]: ${error?.message}`)
    }
  }
}

/**
 * A JSON Body Parser middleware handler initialized with the default options
 */
export const jsonBodyParser = getJsonBodyParser()
