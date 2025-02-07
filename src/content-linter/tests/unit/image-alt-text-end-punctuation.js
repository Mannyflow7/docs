import { jest } from '@jest/globals'
import markdownlint from 'markdownlint'

import { imageAltTextEndPunctuation } from '../../lib/linting-rules/image-alt-text-end-punctuation.js'
import { testOptions } from '../../lib/default-markdownlint-options.js'

const fixtureFile = 'src/content-linter/tests/fixtures/image-alt-text-end-punctuation.md'

describe('image alt text length rule', () => {
  jest.setTimeout(60 * 1000)
  const options = testOptions('MD112', imageAltTextEndPunctuation, fixtureFile)

  const result = markdownlint.sync(options)
  test('image alt text must have an end punctuation', () => {
    const errors = result[fixtureFile]
    expect(Object.keys(result).length).toBe(1)
    expect(errors.length).toBe(2)
    expect(errors.map((error) => error.lineNumber)).toEqual([3, 15])
  })
})
