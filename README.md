# Matches
Return multiple matches of matching a string against a 
regular expression.

## Build
1. Run `yarn install`
2. Run `yarn rollup -c`

## Test
1. Run `yarn install`
2. Run `yarn rollup -c`
3. Run `yarn test`

## Usage
```
const result = matches(/a|b|c/g, 'abcabc')

expect(result[0][0]).toBe('a') //true
expect(result[1][0]).toBe('b') //true
expect(result[2][0]).toBe('c') //true
expect(result[3][0]).toBe('a') //true
expect(result[4][0]).toBe('b') //true
expect(result[5][0]).toBe('c') //true
```