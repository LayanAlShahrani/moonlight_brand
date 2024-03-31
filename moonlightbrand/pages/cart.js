let product_list = document.querySelector('.product_list');


let product=[
    {
        id:1,
        name:'Crescent Erring',
        photo:'../photos/e1.jpg',
        price:22
    },
    {
        id:2,
        name:'Gold Necklace',
        photo:'../photos/n1.jpg',
        price:13
    },
    {
        id:3,
        name:'Red Heart Ring',
        photo:'../photos/r1.jpg',
        price:16
    },
    {
        id:4,
        name:'Gold Rings',
        photo:'../photos/r2.jpg',
        price:23
    },
    {
        id:5,
        name:'Gold&selver Erring',
        photo:'../photos/e2.jpg',
        price:22
    },
    {
        id:6,
        name:'flowe Erring',
        photo:'../photos/e3.jpg',
        price:8
    },
    {
        id:7,
        name:'Gold Erring',
        photo:'../photos/e4.jpg',
        price:10
    },
    {
        id:8,
        name:'gold Ring',
        photo:'../photos/r3.jpg',
        price:30
    },
    {
        id:9,
        name:'pearl Ring',
        photo:'../photos/r4.jpg',
        price:22
    },
    {
        id:10,
        name:'Gold Rings',
        photo:'../photos/r5.jpg',
        price:10
    },
    {
        id:11,
        name:'Selver Rings',
        photo:'../photos/r6.jpg',
        price:9
    },
    // {
    //     id:12,
    //     name:'Gold Rings',
    //     photo:'../photos/b1.jpg',
    //     price:22
    // }
];


function initApp(){
    let newDiv;
    product.forEach((value,key) =>{
        newDiv = document.createElement('div');
        newDiv.classList.add('item_card');
        newDiv.innerHTML=`
        <img src="${value.photo}" alt="">
        <div class="info">
         <div class="title">${value.name}</div>
         <div class="price">${value.price}$</div>  
        </div>
        <button onclick = "addToCard(${key})">Add To Card</button>
        `;
        product_list.appendChild(newDiv);
    });
}
initApp();


const openShopping = document.querySelector(".shopping"),
      closeShopping = document.querySelector(".closeShopping"),
      body = document.querySelector("body"),
      listCard = document.querySelector(".listCard"),
      total = document.querySelector(".total"),
      quantity = document.querySelector(".quantity"),
      opencart = document.querySelector('.opencart')


openShopping.addEventListener("click", () => {
    body.classList.add("active");
})

opencart.addEventListener("click", () => {
    body.classList.add("active");
})

closeShopping.addEventListener("click", () => {
    body.classList.remove("active")
})


let listCards = [];
const addToCard = key => {
    if (listCards[key] == null) {
        listCards[key] = Object.assign({}, product[key]);
        listCards[key].quan = 1;
    }

    reloadCard();
}

const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {
        if (value != null) {
            totalPrice += value.price * value.quan;
            count += value.quan;

            let newDiv = document.createElement("li");
            newDiv.classList.add('item');
            newDiv.innerHTML = `
                <div><img src="${value.photo}"></div>
                <div class="iteminfo">
                    <div class="cardTitle">${value.name}</div>
                    <div class="cardPrice">${value.price.toLocaleString()}$</div>
                </div>
                <div class="changeinquantity">
                    <button class="cardButton" onclick="changeQuantity(${key}, ${value.quan + 1})">+</button>
                    <button class="cardButton" onclick="changeQuantity(${key}, ${value.quan - 1})">-</button>
                    <div class="count">${value.quan}</div>
                </div>
            `;
            listCard.appendChild(newDiv);
        }
    });

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

const changeQuantity = (key, newQuantity) => {
    if (newQuantity === 0) {
        delete listCards[key];
    } else {
        listCards[key].quan = newQuantity;
        listCards[key].price = newQuantity * product[key].price;
    }
    reloadCard();
}



