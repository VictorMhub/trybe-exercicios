  //Questão 1: Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
  const testingScope = escopo => {
      if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} . Ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(false);



//Questão 2:Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente

const oderNumber = array =>{
    array.sort((a,b) => b-a);
    console.log(`Os números ${array} estão ordenados de forma crescente!`);
}

oderNumber([13,3,4,10,7,2]);
    


