
const sum = require('./sum')

it('A função recebe 4 e 5 e retorna 9',()=>{
    expect(sum(4,5)).toBe(9);
})

it('A função recebe 0 e 0 e retorna 0',()=>{
   expect(sum(0,0)).toBe(0);
})

test("Verificar se a função sum retorna 'parameters must be numbers' quando recebe 4 e '5'", () => {
    // Uso da Arrow Function para pegar a quebra do fluxo da chamada da função
    expect(() => {
      sum(4,'5');
    }).toThrow('parameters must be numbers');
  });
