function getInfo(){
    console.log("works");
const infoBubble = document.createElement("div");
const container = document.querySelector('#container');
container.appendChild(infoBubble);
infoBubble.style.zIndex='5';
infoBubble.style.height='300px';
infoBubble.style.width='300px';
infoBubble.style.backgroundColor='red';
}


export function build(){ 
const container = document.querySelector('#container');
const newToDoBtn = document.createElement('button');
newToDoBtn.textContent ='add ToDo';
newToDoBtn.addEventListener('click',getInfo);
container.append(newToDoBtn);

}