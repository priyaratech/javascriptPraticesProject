const input = document.getElementById('input');
const list = document.getElementById('list');
const hiddenbtn = document.getElementById('hiddenbtn');
const addbutton = document.getElementById('addbutton');


function add() {
    if (input.value === '') {
        alert('Please enter a task');
    } else {
        const li = document.createElement('li');
        li.textContent = input.value;
        list.appendChild(li);
        input.value = '';
        hiddenbtn.style.display = 'block';
    }
}

function remove() {
    hiddenbtn.style.display = 'none';
    list.innerHTML = ''; 
    input.value = '';
}