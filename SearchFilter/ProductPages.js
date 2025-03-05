const url = window.location.search.split('=')[1];

const ProductNotfound = () => {
   const container = document.getElementById('container');
   container.innerHTML = `<h2>Product Not Found</h2>`;
}

const product = async () => {
    try {
       const response = await fetch('https://dummyjson.com/products/' + url);
       const data = await response.json();
       console.log(data);

       const container = document.getElementById('container');

       if (data && data.id === parseInt(url)) {
           container.innerHTML = `
           <div class="card">
               <img src="${data.images[0]}" alt="${data.title}" style="width: 200px; height: 200px;">
               <h2>${data.title}</h2>
               <p>Price: ${data.price}</p>
               <p>Rating: ${data.rating}</p>
               <p>Stock: ${data.stock}</p>
               <p>Brand: ${data.brand}</p>
               <p>Category: ${data.category}</p>
               <p>Discount Percentage: ${data.discountPercentage}</p>
               <p>Description: ${data.description}</p>
           </div>
           `;
       } else {
           ProductNotfound();
       }

    } catch (error) {
        console.log(error);
        ProductNotfound();
    }
}

window.onload = product;

const addtocart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productId = parseInt(url);

    const productInCart = cart.find(item => item.id === productId);

    if (productInCart) {
        productInCart.quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart');
}