const cart = JSON.parse(localStorage.getItem('cart')) || [];
const container = document.getElementById('container');
const total = document.getElementById('total');
let sum = 0;

cart.forEach(async (product) => {
    const response = await fetch(`https://dummyjson.com/products/${product.id}`);
    const data = await response.json();
    console.log(data);

    if(data.id === product.id) {
        container.innerHTML += `
            <div class="card">
                <img src="${data.images[0]}" alt="${data.title}" style="width: 200px; height: 200px;">
                <h2>${data.title}</h2>
                <p>Price: ${data.price}</p>
                <p>Quantity: ${product.quantity}</p>
                <button onclick="remove(${data.id})">Remove</button>
                <button onclick="increase(${data.id})">Increase</button>
                <button onclick="decrease(${data.id})">Decrease</button>
            </div>
        `;
    }

    sum += data.price * product.quantity;
    total.innerHTML = `Total: ${sum}`;
});

const remove = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    localStorage.setItem('cart', JSON.stringify(newCart));
    location.reload();
}

const increase = (id) => {
    const newCart = cart.map((product) => {
        if(product.id === id) {
            product.quantity += 1;
        }
        return product;
    });
    localStorage.setItem('cart', JSON.stringify(newCart));
    location.reload();
}

const decrease = (id) => {
    const newCart = cart.map((product) => {
        if(product.id === id && product.quantity > 1) {
            product.quantity -= 1;
        }
        return product;
    });
    localStorage.setItem('cart', JSON.stringify(newCart));
    location.reload();
}
