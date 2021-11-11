// Questão 1: Crie uma função que receba um número e retorne seu fatorial.
const factorial = number => {
    let result = 1;

    for (let index = 2; index <= number; index += 1) {
        result *= index;
    }

    return result;
}

console.log(factorial(5));

//Questão 2: Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = text => {
    let wordArray = text.split(' ');
    let maxLength = 0; 
    let result = '';
    
    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length
            result = word;
        }
        
    }
    return result;
}

console.log(longestWord("cu foi no banheiro e não sabemos o que aconteceu"));
