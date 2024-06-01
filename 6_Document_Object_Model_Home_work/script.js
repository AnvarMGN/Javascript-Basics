// 1
const superLinkEl = document.getElementById('super_link');
console.log(superLinkEl);
const superLinkElem = document.querySelector('#super_link');
console.log(superLinkElem);
// 2
const cardLinkEl = document.querySelectorAll('.card-link');
console.log(cardLinkEl);
cardLinkEl.forEach(link => {link.textContent = 'ссылка'});
console.log(cardLinkEl);
// 3
const linkEl = document.querySelectorAll('.card-body .card-link');
console.log(linkEl);
// 4
const attributeEl = document.querySelector('[data-number="50"]');
console.log(attributeEl);
// 5
const titleContent = document.querySelector('title');
console.log(titleContent.textContent);
// 6
const cardTitleEl = document.querySelectorAll('.card-title')[0];
console.log(cardTitleEl.parentNode);
// 7
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Привет';

const classCard = document.querySelector('.card');
console.log(classCard);

classCard.insertBefore(newParagraph, classCard.firstChild);
console.log(classCard);
// 8
const tagH6 = document.querySelector('h6');
console.log(tagH6);
tagH6.remove();