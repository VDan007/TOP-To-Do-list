function makeToDo(title,description,duedate,priority){
    return {
        title: title,
        description: description,
        duedate:duedate,
        priority:priority,
    }
};
const listOfToDos = [];
const a = 152;
const aa = makeToDo('asd','asdfasd',2022,'asd');
const nf = makeToDo('NF','valami',2023,'urgent');

listOfToDos.push(aa);
listOfToDos.push(nf);

console.log(listOfToDos);