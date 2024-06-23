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


// ДОБАВЛЕНИЕ ТОВАРОВ НА СТРАНИЦУ КОРЗИНЫ

document.addEventListener('DOMContentLoaded', async () => {
    const data = await fetchData(urlData);
    // получить перечень товаров из API(data.json)

    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    // Получить товары из корзины

    const cartElem = document.querySelector('.shopping-cart__block');
    // находим для заполнения корзины карточками товаров

    // сравниваем Id из хранилища(localStorage) c Id из data.json и заполняем соответствующие карточки товаров.
    cart.forEach(cartEl => {
        data.forEach(dataEl => {
            if (cartEl.id == dataEl.id) {
                cartElem.insertAdjacentHTML('beforeend', `
                    <div class="shopping-cart__prod-info" id="${cartEl.id}">
                    <div class="shopping-cart__about-prod">
                        <a href="single_page.html" class="shopping-cart__linkimg">
                            <img src="${dataEl.imgSrc}" alt="photo" class="shopping-cart__img">
                        </a>
                        <a href="single_page.html">
                            <div class="shopping-cart__prod-description">
                                <h1 class="shopping-cart__prod-description_heading">${dataEl.title}</h1>
                                <p class="shopping-cart__color">
                                    Color:
                                    <span class="shopping-cart__prod">Red</span>
                                </p>
                                <p class="shopping-cart__color">
                                    Size:
                                    <span class="shopping-cart__prod">Xll</span>
                                </p>
                            </div>
                        </a>
                    </div>
                    <div class="shopping-cart__about-text">
                        <p class="shopping-cart__price">$${dataEl.price}</p>
                        <input
                            class="shopping-cart__quantity"
                            min="${cartEl.quantity}"
                            type="number"
                            placeholder="1"
                        >
                        <p class="shopping-cart__shipping">free</p>
                        <p class="shopping-cart__subtotal">$${cartEl.quantity * dataEl.price}</p>
                        <div class="shopping-cart__action">
                            <a href="#" class="cart__button-action">
                                <img src="img/cart_del.png" alt="delete">
                            </a>
                        </div>
                    </div>
                </div>   
                `)
            }
        });
    });
});


// УДАЛЕНИЕ БЛОКА, УДАЛЕНИЕ ИЗ LOCALSTORAGE

const cartBlock = document.querySelector('.shopping-cart__block');
// находим блок с товарами

cartBlock.addEventListener('click', function (e) {

    const target = e.target;

    if (target.closest('.cart__button-action')) {
        //при клике находим кнопку удаления товара

        const item = target.closest('.shopping-cart__prod-info');
        //находим блок карточки товара

        const productId = target.closest('.shopping-cart__prod-info').getAttribute('id');
        // получаем Id карточки товара

        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        // выгружаем корзину, готовим к удалению товаров

        if (item) {
            item.remove();
            // удаляем блок товара со страницы

            cart.splice(cart.findIndex((i) => i.id === productId), 1);
            // удаляем выбранный товар из localStorage
            // cart.findIndex((i) => i.id === productId) - определяем индекс удаляемого товара, вторым параметром указываем количество удаляемых позиции в массиве после найденного индекса

            localStorage.setItem('cart', JSON.stringify(cart));
            // Сохраним обновленную корзину в localStorage
        }
    }
});
