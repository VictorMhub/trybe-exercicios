let a = 10
let b = 5

let adição = a + b
let subtração = a - b
let multiplicação = a * b
let divisão = a/b
let modulo = a % b 

console.log(adição);
console.log(subtração);
console.log(multiplicação);
console.log(divisão);
console.log(modulo);

let a = 10
let b = 5

if(a < b){
    console.log ("A é o maior numero")
}else{
    console.log("B é o maior número")
}

let a = 1000
let b = 300
let c = 250

if (a > b && a > c){
    console.log("A é o mair número")
}else if (b > a && b > c){
    console.log( "B é o maior número")
}else{
    console.log("C é o maior número")
}

let num = -8

if(num < 0){
    console.log("Negative")
} else if(num > 0){
    console.log("Positive")
}else{
    console.log("Zero")
}

let a = 0
let b = 0
let c = -180

if(a + b + c === 180){
    console.log("true")
}else if (a + b + c < 0){
    console.log("Erro: angulo invalido")
}else{
    console.log("false")
}

let  a = 13
let b = 15
let c = 25

if(a % 2 == 0 || b % 2 == 0 || c % 2 == 0){
    console.log("true")
}else{
    console.log("false")
}


