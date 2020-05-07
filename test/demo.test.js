/**
 * @description test demo
 * @author Uni
 */

function sum(a,b) {
    return a+b;
}

test('10 plus 20 should equle 30', () => {
    expect(sum(10,20)).toBe(30)
})