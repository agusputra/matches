# Matches
Return multiple matches of matching a string against a 
regular expression.

## Install
`yarn add https://github.com/agusputra/matches`

## Build
1. Run `yarn install`
2. Run `yarn rollup -c`

## Test
1. Run `yarn install`
3. Run `yarn test`

## Usage
```
import matches from 'matches'

const result = matches(/a|b|c/g, 'abcabc')

expect(result[0][0]).toBe('a')
expect(result[1][0]).toBe('b')
expect(result[2][0]).toBe('c')
expect(result[3][0]).toBe('a')
expect(result[4][0]).toBe('b')
expect(result[5][0]).toBe('c')
```