
const urlData = "./data.json";

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
            <div class="items_block">
                <a href="${itemEl.hrefLinkProduct}" class="items_block_link">
                    <img class="items_block_img" src="${itemEl.imgSrc}" alt="${itemEl.imgAlt}">
                    <div class="items_block_text">
                        <h5 class="items_block_item_title">${itemEl.title}</h5>
                        <p class="items_block_item_price">${itemEl.price}</p>
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


