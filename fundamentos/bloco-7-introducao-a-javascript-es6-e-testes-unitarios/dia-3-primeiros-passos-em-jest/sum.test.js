


const sum = require('./sum.js');

describe('testa a função sum', () => {
  it('deve retornar o resultado da soma', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('deve disparar um erro caso receba como parâmetro uma string', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  })
})

const myFizzBuzz = require('./sum.js');

describe('testa a função myFizzBuzz', () => {
  it('verifica, se de acordo com o parâmetro recebido, retorna o valor esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(1)).toBe(1);
    expect(myFizzBuzz('2')).toBe(false);
  })
});
  
const myRemove = require('./sum.js');

describe('testa a função myRemove', () => {
    it('deve retornar um array removendo o item correto', () => {
      expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
      expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
      expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
  });
