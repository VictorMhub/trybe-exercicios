const object = (fullName) => {
  const email = `${fullName}@trybe.com`.replace(" ", "_").toLowerCase();
  return { nome: fullName, email };
};

const newEmployees = (callBack) => {
  const employees = {
    id1: callBack("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callBack("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callBack("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

console.log(newEmployees(object));

const check = (bet, odds) => bet === odds // está função está retornando TRUE

const loterry = (bet) => {
    const odds = Math.floor((Math.random()* 5) + 1);
    if (bet === odds) {
        return 'Parabéns, você ganhou!'
    } else {
        return 'Tente Novamente'
    }
    // return callback(bet, odds) ? 'Parabéns, você ganhou!' : 'Tente novamente'
}


console.log(loterry(2,check));


// const hof = (gabarito, studantAnswers,callBack) => {
//     return callBack();
// }

// const rightAnswers = () => {
    
// }

// console.log(hof(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C']),['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'],rightAnswers);

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const repeat = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} corretas`;
};

console.log(repeat(RIGHT_ANSWERS, STUDENT_ANSWERS, (rAnswer, uAnswer) => {
  if (rAnswer === uAnswer) {
    return 1;
  } if (uAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
}));
