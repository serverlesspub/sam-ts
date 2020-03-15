import { sum } from '../lib/main'

describe('sample tests', () => {
  describe('unit', () => {
    test('should return a sum', async () => {
      const result = await sum({ a: 1, b: 2 })
      expect(result).toBe(3)
    })
  })
})