const functions = require('./functions');

test ('checks for equal number value', () =>{
  expect(functions.compare(43)).toBe ('foo');
});
test ('checks for more number value', () =>{
  expect(functions.compare(44)).toBe ('foo');
});
test ('checks for less number value', () =>{
  expect(functions.compare(42)).toBe ('bar');
});
test ('checks for number value one', () =>{
  expect(functions.compare(1)).toBe ('bar');
});
test ('checks for number value of 0', () =>{
  expect(functions.compare(0)).toBe ('bar');
});
test ('checks for number value of -1', () =>{
  expect(functions.compare(-1)).toBe ('bar');
});
test ('checks for empty string', () =>{
  expect(functions.compare(' ')).toBe ('bar');
});
