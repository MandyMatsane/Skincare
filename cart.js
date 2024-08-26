let openCart = document.querySelector('.shopping');
let closeCart = document.querySelector('.closeCart');
let list = document.querySelector('.list');
let cartElement = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openCart.addEventListener('click', () => {
    body.classList.add('active');
})

closeCart.addEventListener('click', () => {
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: "Ceramide",
        image: "ceramide.webp",
        price: 250
    },
    {
        id: 2,
        name: "Facewash",
        image: "garnier.webp",
        price: 300
    },
    {
        id: 3,
        name: "Sensation lotion",
        image: "sensation.webp",
        price: 350
    },
    {

        id: 4,
        name: "Suncreen",
        image: "suncreen.webp",
        price: 250
    },
    {
        id: 5,
        name: "Tumeric saop",
        image: "tumeric.jpg",
        price: 250
    },
    {
        id: 6,
        name: "Victoria Lotion",
        image: "victoria.jpeg",
        price: 275
    }
];

let cartItems = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
    <img src="products/${value.image}"/>
    <div class="title">${value.name}</div>
    <div>${value.price.toLocaleString()}</div>
    <button onclick="addToCart(${key})">Add To Cart</button>
    `;
        list.appendChild(newDiv);
    })
}
initApp();

function addToCart(key) {
    if (cartItems[key] == null) {
        cartItems[key] = products[key];
        cartItems[key].quantity = 1;
    }
    reloadCart();

    function reloadCart() {
        cartElement.innerHTML = '';
        let count = 0;
        let totalprice = 0;

        cartItems.forEach((value, key) => {
            totalprice = totalprice + value.price;
            count = count + value.quantity;

            if (value != null) {
                let newDiv = document.createElement('li');
                newDiv.innerHTML = `
                    <div><img src="products/${value.image}"/></div>
                    <div>${value.name}</div>
                    <div>${value.price.toLocaleString()}</div>
                    <div>${value.quantity}</div>

                    <div>
                        <button onclick="changeQauntity(${key}, ${value.quantity - 1})">-</button>
                        <div class="count">${value.quantity}</div>
                        <button onclick="changeQauntity(${key}, ${value.quantity + 1})">+</button>
                    </div>
                `;
                cartElement.appendChild(newDiv);
            }
        })
        total.innerHTML = totalprice.toLocaleString();
        quantity.innerHTML = count;
    }
}

function changeQauntity(key, quantity){
    if(quantity == 0) {
        delete cartItems[key];
    }else{
        cartItems[key].quantity = quantity;
        cartItems[key].price = products[key].price * quantity
    }

    reloadCart
}
