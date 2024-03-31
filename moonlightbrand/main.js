let most_selling_product_list = document.querySelector('.most_selling_product_list');


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
        price:22
    },
    {
        id:3,
        name:'Red Heart Ring',
        photo:'../photos/r1.jpg',
        price:22
    },
    {
        id:4,
        name:'Gold Rings',
        photo:'../photos/r2.jpg',
        price:22
    }
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
        <button>add to cart</button> 
        `;
        most_selling_product_list.appendChild(newDiv);
    });
}
initApp();