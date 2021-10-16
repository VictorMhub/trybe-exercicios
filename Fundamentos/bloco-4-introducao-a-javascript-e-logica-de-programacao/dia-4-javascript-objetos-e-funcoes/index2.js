// Parte II DO EXERCICIOS 4.4: Funções

// QUESTÃO 1
function verificaPalindrome(word){
    for(let key in word){
      if(word[key] != word[(word.length - 1) - key]){
        return false;
      }
    }
    
    return true;
  }
  
console.log(verificaPalindrome('arara'));

// QUESTÃO 2
function indiceMaior(numeros){
    let indiceMaior = 0;
    for(let key in numeros){
        if(numeros[indiceMaior] < numeros[key]){
                indiceMaior = key
                
        }
    }
    console.log(indiceMaior);
}

indiceMaior([2, 3, 6, 77, 100, 1000]);

//QUESTÃO 3
function indiceMenor(numeros){
    let indiceMenor = 0;
    for(let key in numeros){
        if(numeros[indiceMenor] > numeros[key]){
                indiceMenor = key
                
        }
    }
    console.log(indiceMenor);
}

indiceMenor([2, 4, 6, 7, -10, 0, -3]);

//QUESTÃO 4
function maiorNome(nomes){
    let maiorNome = nomes[0];
    for(let key in nomes){
        if(maiorNome.length < nomes[key].length){
            maiorNome = nomes[key]
        }
    }
    return maiorNome
}

console.log(maiorNome(['guto', 'amiltu','caetano']));

//QUESTÃO 5 - Quesstão inconcluida.
function numeroQueSeRepete(numeros){
    let numeroAtual = numeros[0]
    for(let key in numeros){
        if(numeros[key] === numeroAtual){
            numeroAtual === numeros[key]
        }

    }
    return numeroAtual
}

console.log(numeroQueSeRepete([4, 3, 3, 4, 3, 4, 3]));

//QUESTÃO 6
function somaTodosOsNumeros(n){
    let total = 0;
    for(i = 0; i<=n; i += 1){
        total = total + i
    }
    return total;
}

console.log(somaTodosOsNumeros(5));

//QUESTÃO 7 inconclusivo.
function comparaString()