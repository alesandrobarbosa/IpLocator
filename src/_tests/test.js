const sum = (num, num2) => num + num2 
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});