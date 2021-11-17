const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
  //Questão 1:
  const addNewKey = (obj, key, value) => {
    obj[key] = value;
  };
  addNewKey(lesson2, 'turno', 'noite');


  //Questão 2  
const objectList = (object) => Object.keys(object)
console.log(objectList(lesson3)); 

//Questão 3
const objectLength = (object) => Object.keys(object).length
console.log(objectLength(lesson3))

//Questão 4 
const objectValue = (object) => Object.values(object)
console.log(objectValue(lesson3));

//Questão 5
const allLessons = Object.assign({},{lesson1, lesson2,lesson3});
console.log(allLessons);

//Questão 6 
const getNumberOfStudents = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (index in array) {
      total += obj[array[index]].numeroEstudantes;
    }
    return total;
  };
  console.log(getNumberOfStudents(allLessons));

//Questão 7
const getValueByNumber = (object, index) => Object.values(object)[index];

console.log(getValueByNumber(lesson3, 2))
