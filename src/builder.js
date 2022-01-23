
export function build(){ 
const container = document.querySelector('#container');
const newToDoBtn = document.createElement('button');
newToDoBtn.textContent ='Button';
container.append(newToDoBtn);
}