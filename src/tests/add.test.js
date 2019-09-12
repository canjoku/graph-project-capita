const add = (a, b) => a + b + 1
const generate = (name) => `hello ${name}`

test('should add two numbers', () => {
  const result = add(3,4);
  expect(result).toBe(8)
})

test('should return tony', () => {
  const tony = generate('tony')
  expect(tony).toBe('hello tony')
})