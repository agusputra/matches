import matches from '../dist/matches'

test('match /a|b|c/ against abcabcabc', () => {
    const result = matches(/a|b|c/g, 'abcabc')

    expect(result[0][0]).toBe('a')
    expect(result[1][0]).toBe('b')
    expect(result[2][0]).toBe('c')
    expect(result[3][0]).toBe('a')
    expect(result[4][0]).toBe('b')
    expect(result[5][0]).toBe('c')
});