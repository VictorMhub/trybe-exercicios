function mudaParagrafo(){
    let paragrafos = document.getElementsByTagName('p')
    for(i = 0; i < paragrafos.length; i += 1){
        paragrafos[i].innerText = 'como me vejo daqui a dois anos:'
    }
    
}
function mudaCor(){
         let backGround = document.querySelector('.main-content');
         backGround.style.backgroundColor = 'rgb(76,164,109)'
}

function mudaOutraCor(){
    let backGround = document.querySelector('.center-content');
    backGround.style.backgroundColor = 'white'
}

function corrigeTitulo(){
    let titulo = document.querySelector('.title');
    titulo.innerText = 'Exercícios 5.1 - JavaScript';
}

function mudaFonteDoParagrafo(){
    let paragrafos = document.querySelectorAll('p')
    for(i = 0; i < paragrafos.length; i += 1){
        paragrafos[i].style.textTransform = 'uppercase'
    }
}

function mostraParagrafo(){
    let paragrafos = document.querySelectorAll('p')
    
    console.log(paragrafos)
}
    

mudaParagrafo();
mudaCor();
mudaOutraCor();
corrigeTitulo();
mudaFonteDoParagrafo();
mostraParagrafo();
