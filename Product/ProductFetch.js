const product = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log(data);

        const container = document.getElementById('container');

        data.products.forEach((product) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${product.images[0]}" alt="${product.title}" style="width: 200px; height: 200px;">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Rating: ${product.rating}</p>
                <p>Stock: ${product.stock}</p>
                <p>Brand: ${product.brand}</p>
            `;

            container.appendChild(card);
            
        });
    } catch (error) {
        console.log(error);
    }
}

window.onload = product;
