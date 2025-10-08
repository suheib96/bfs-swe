const {addieren, subtrahieren, dividieren } = require("./math")

test("5 plus 7 equals 12", () => {
    expect(addieren(5,7)).toBe(12)
})

test("18 minus 5 equals 13", () => {
    expect(subtrahieren(18,5)).toBe(13)
})

test("16 divided by 8 equals 2", () => {
    expect(dividieren(16,8)).toBe(2)
})

test("16 divided by 0 throws error", () => {
    expect(() =>dividieren(16,0)).toThrow("Division durch 0 ist nicht erlaubt!!")
})