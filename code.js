const input = document.querySelector('.app input');
const submit = document.querySelector('.app_block .smt');
const clear = document.querySelector('.app_block .clear');
const ul = document.querySelector('ul');
const search = document.querySelector('.search');
const liEL = document.querySelectorAll('li');
let task = [];

const clearTask = () =>{
    ul.textContent = "";
    task = [];
}


const remove = (e) => {
    e.target.parentNode.style.animation = 'delete 0.5s';
    task.shift(e.target.parentNode);
    setTimeout(() => {
    e.target.parentNode.remove();
    },400);
}

const changeColor = (e) => {
    e.target.closest('li').classList.toggle('active');
}

const searchTask = (e) => {
    let tasks = task;
    const searchText = e.target.value.toLowerCase();
    tasks = task.filter(li => li.textContent.toLowerCase().includes(searchText));
    ul.textContent = " ";
    tasks.forEach(li => ul.appendChild(li));
}


submit.addEventListener('click', function(e) {
    const inputValue = input.value;
    const li = document.createElement('li');
    const i = document.createElement('i');
    const p = document.createElement('p');

    if(inputValue.trim() !== ""){
        task.push(li);
        ul.appendChild(li);
        li.appendChild(p);
        p.textContent = inputValue;
        li.style.animation = 'push 0.7s';
        li.appendChild(i);
        i.className = 'fas fa-times';
    }
    else{
        alert('Uzupełnij pole');
        return
    }
    input.value = "";

    setTimeout(() =>{
        li.style.animation = null;
    },1000)

    li.querySelector('i').addEventListener('click', remove);
    li.addEventListener('click', changeColor);

})

search.addEventListener('input', searchTask);
clear.addEventListener('click', clearTask);
