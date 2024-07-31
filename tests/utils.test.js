const { sum } = require("../src/utils/calulate.util")
const { encodePayload, decodePayload } = require('../src/utils/jwt.util')

test('should return 4', () => {
    expect(sum(1, 3)).toBe(4)
})

const encodePayloadMock = jest.fn((payload) => encodePayload(payload))
describe('JWT utils', () => {
    it("should encode payload", () => {
        const payload = { id: 1 }
        expect(encodePayloadMock(payload))
    })
})