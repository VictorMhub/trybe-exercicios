const btn = document.querySelector('button');
const conter = document.querySelector('p');
const resetBtn = document.getElementById('reset-button')
let number = 0;
btn.addEventListener('click',()=> {
    number += 1
    conter.innerText = number
})

resetBtn.addEventListener('click', () => {
    number = 0
    conter.innerText = number
})