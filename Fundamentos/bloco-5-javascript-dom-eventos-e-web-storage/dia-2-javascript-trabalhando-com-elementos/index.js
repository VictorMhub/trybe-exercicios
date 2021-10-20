let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM '
h1.className = 'title'
let bodyParent = document.querySelector('body');

bodyParent.appendChild(h1)

let main = document.createElement('main');
main.className = 'main-content';
bodyParent.appendChild(main);

let section = document.createElement('section');
section.className = 'center-content left-content right-content';

let mainParent = document.querySelector('main');

mainParent.appendChild(section);

let p = document.createElement('p');
p.innerText = 'If you knew i was dying would it change you?'

let sectionParent = document.querySelector('section');
sectionParent.appendChild(p);

let src = document.createElement('src')
src.className = 'small-image'
src.innerHTML = 'https://picsum.photos/200'
sectionParent.appendChild(src);

let ul = document.createElement('ul')
sectionParent.appendChild(ul)


function criaLi(liContent){
    for(i=0; i < liContent.length; i += 1){
        let li = document.createElement('li')
        li.innerText = liContent[i]
        let ulParent = document.querySelector('ul')
        ulParent.appendChild(li)
        
    }
}

criaLi(['um','dois','tres','quatro','cinco','seis','sete','oito','nove','dez']);

let h31 = document.createElement('h3')
h31.className = 'description'
mainParent.appendChild(h31);
h31.innerText = 'eeeeeeeeeee'
let h32 = document.createElement('h3');
h32.className = 'description'
mainParent.appendChild(h32)
h32.innerText = 'aaaaaaaaaaaa'
let h33 = document.createElement('h3');
h33.className = 'description'
mainParent.appendChild(h33)
h33.innerText = 'cause when i fly solo, i fly so high'