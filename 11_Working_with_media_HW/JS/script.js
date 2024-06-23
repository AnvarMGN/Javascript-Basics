
const urlData = "./JS/data.json";

async function fetchData(url) {
    try {
        const responce = await fetch(url);
        const data = await responce.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const data = await fetchData(urlData);
    const itemsEl = document.querySelector('.items_display_flex');
    // console.log(itemsEl);
    data.forEach(itemEl => {
        itemsEl.insertAdjacentHTML('beforeend', `
            <div class="items_block" id="${itemEl.id}">
                <a href="${itemEl.hrefLinkProduct}" class="items_block_link">
                    <img class="items_block_img" src="${itemEl.imgSrc}" alt="${itemEl.imgAlt}">
                    <div class="items_block_text">
                        <h5 class="items_block_item_title">${itemEl.title}</h5>
                        <p class="items_block_item_price">$${itemEl.price}.00</p>
                    </div>
                </a>
                <div class="items_block_box">
                    <a href="${itemEl.hrefLinkAdd}" class="items_block_box_add">
                        <img class="items_block_box_add_img" src="${itemEl.imgSrcAdd}" alt="${itemEl.imgAltAdd}">
                        <p class="add-txt">${itemEl.titleAdd}</p>
                    </a>
                </div>
            </div>
        `)
    });
});

// ДОВАВЛЕНИЕ ТОВАРОВ В КОРЗИНУ

const prodEl = document.querySelector('.items_display_flex');
// находим блок товаров

prodEl.addEventListener('click', function (e) {
    const target = e.target;

    target.closest('.items_block_box_add');
    //позволяет искать по ДОМдереву ближайший подходящий элемент
    // ищем кнопку добавления товара

    const id = target.closest('.items_block').getAttribute('id');
    // получаем Id товара

    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    // создаём пустой массив c ключом cart

    let inTheCart = cart.find((item) => item.id == id);
    // ишем товар который хотим добавить или существующий в корзине

    (inTheCart) ? inTheCart.quantity++ : cart.push({ id, quantity: 1 });
    // добавляем новый товар, либо увеличиваем количество существующего с помощью тернарного оператора

    localStorage.setItem('cart', JSON.stringify(cart));
    // сохраняем массив
});