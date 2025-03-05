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
                <a href="./ProductPages.html?id=${product.id}">
                <img src="${product.images[0]}" alt="${product.title}" style="width: 200px; height: 200px;">
                <h2>${product.title}</h2>
                <p>Price: ${product.price}</p>
                </a>
            `;

            container.appendChild(card);
        });
    } catch (error) {
        console.log(error);
    }
}

window.onload = product;

const ProductNotfound = () => {
    const container = document.getElementById('container');
    container.innerHTML = `<h2>Product Not Found</h2>`;
}

const search = () => {
    try {
        const searchText = document.getElementById('search').value.toLowerCase();
        const cards = document.querySelectorAll('.card');
        let found = false;

        cards.forEach((card) => {
            const title = card.querySelector('h2').textContent.toLowerCase();
            if (title.includes(searchText)) {
                card.style.display = 'block';
                found = true;
            } else {
                card.style.display = 'none';
            }
        });

        if (!found) {
            ProductNotfound();
            document.getElementById('btn-goback').style.display = 'block';
        } else {
            document.getElementById('btn-goback').style.display = 'none';
        }
    } catch (error) {
        console.log(error);
    }
}

const goBack = () => {
    location.reload();
}
