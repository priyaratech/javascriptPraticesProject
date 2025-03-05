const input = document.getElementById('input');
const result = document.getElementById('result');
const clear = document.getElementById('clear');
const clear1Number = document.getElementById('clear1Number');
const numbers = document.querySelectorAll('.Number button');
const operators = document.querySelectorAll('.operator button');


clear.addEventListener('click', () => {
    input.value = '';
    result.value = '';
});

clear1Number.addEventListener('click', () => {
    input.value = input.value.slice(0, -1);
    result.value = result.value.slice(0, -1);
});


numbers.forEach((btn) => {
    btn.addEventListener('click', () => {
        input.value += btn.textContent;
        result.value += btn.textContent;
    });
});


operators.forEach((btn) => {
    btn.addEventListener('click', () => {
        input.value += btn.textContent;
        result.value += btn.textContent;
    });
});

result.addEventListener('click', () => {
    try {
        input.value = eval(input.value);
        result.value = input.value;
    } catch (e) {
        result.value = 'Error';
    }
});
