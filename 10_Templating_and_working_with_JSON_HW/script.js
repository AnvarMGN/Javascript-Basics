// // 1
// const parseTemp = JSON.parse(data);
// console.log(parseTemp);

// const asterEl = document.querySelector('.content_albums');
// console.log(asterEl);

// parseTemp.forEach(item => {
//     asterEl.insertAdjacentHTML('beforeend', `
//         <span>${item.id}</span>
//         <p>${item.title}</p>`)
// });

// 2
const urlApi = `https://jsonplaceholder.typicode.com/photos`;

const getPhoto = async (urlApi) => {
    try {
        const resp = await fetch(urlApi);
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

const fetchData = await getPhoto(urlApi);
console.log(fetchData);

const imgButton = document.querySelector('.button_img');
const inputEl = document.querySelector('.input_number');

imgButton.addEventListener('click', async () => {
    const fetchDataNew = await getPhoto(urlApi);
    const imgEl = document.querySelector('img');
    imgEl.src = fetchDataNew[inputEl.value - 1].url;
});
