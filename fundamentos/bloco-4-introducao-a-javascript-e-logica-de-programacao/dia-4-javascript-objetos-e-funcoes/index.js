// PARTE I DO EXERCICIOS 4.4: Objetos e For/in

let info = {
    charecter: 'Margarida',
    origin: 'Pato Donald',
    note: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'sim',
};

for(let key in info){
    console.log(key);
}

for(let key in info){
    console.log(info[key]);    
}

let info2 = {
    charecter: 'Tio patinhas',
    origin: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    note: 'O ultimo MacPatinhas',
    recorrente: 'sim',
}

console.log(info, info2)