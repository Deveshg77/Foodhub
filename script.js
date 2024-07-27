const menuItemsContainer = document.getElementById('menuItems');
const menuItems = [
    {
        "title": "Cheese Burger",
        "price": "$5.99/-",
        "image": "https://tse2.mm.bing.net/th?id=OIP.JGigDSijh-lKRw6YaZQGVwHaDs&pid=Api&P=0&h=180"
    },
    {
        "title": "Pizza",
        "price": "$8.89/-",
        "image": "https://images7.alphacoders.com/596/596343.jpg"
    },
    {
        "title": "Sushi",
        "price": "$10.99/-",
        "image": "https://i0.wp.com/nypost.com/wp-content/uploads/sites/2/2015/10/sushi-main.jpg?quality=90&strip=all&ssl=1"
    },
    {
        "title": "Tacos",
        "price": "$5.50/-",
        "image": "http://forevertwentysomethings.com/wp-content/uploads/2016/10/tacos.jpg"
    },
    {
        "title": "Club Sandwich",
        "price": "$7.99/-",
        "image": "https://www.deliciousmeetshealthy.com/wp-content/uploads/2021/07/Club-Sandwich-11-768x1156.jpg"
    },
    {
        "title": "Ramen",
        "price": "$11.99/-",
        "image": "https://thehintofrosemary.com/wp-content/uploads/2020/02/ramen-cover-2048x2048.jpg"
    },
    
];

menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.title;
    menuItem.appendChild(image);

    const info = document.createElement('div');
    info.classList.add('menu-item-info');

    const title = document.createElement('h3');
    title.classList.add('menu-item-title');
    title.textContent = item.title;
    info.appendChild(title);

    const price = document.createElement('p');
    price.classList.add('menu-item-price');
    price.textContent = item.price;
    info.appendChild(price);

    const addToCartBtn = document.createElement('button');
    addToCartBtn.classList.add('add-to-cart-btn');
    addToCartBtn.textContent = 'Add to Cart';
    info.appendChild(addToCartBtn);

    menuItem.appendChild(info);
    menuItemsContainer.appendChild(menuItem);
});