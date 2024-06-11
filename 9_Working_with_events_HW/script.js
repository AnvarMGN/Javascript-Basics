// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

// 1
const inputFromEl = document.querySelector('#from');
const spanEl = document.querySelector('span');
console.log(inputFromEl, spanEl);

inputFromEl.addEventListener('input', function () {
    spanEl.textContent = inputFromEl.value;
});

// 2
const messageBtnEl = document.querySelector('.messageBtn'); 
const messageEl = document.querySelector('.message');
console.log(messageBtnEl, messageEl);

messageBtnEl.addEventListener('click', function () {
    messageEl.classList.add('animate_animated', 'animate_fadeInLeftBig');
    messageEl.style.visibility = 'visible';
    messageEl.style.color = 'green';
});

// 3
const formEl = document.querySelector('form');

const formButtonEl = formEl.querySelector('button');
const inputEl = document.querySelectorAll('.form-control');

console.log(formButtonEl, inputEl);

formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    inputEl.forEach(element => {
        if (element.value === '') {
            element.classList.add('error')
            element.placeholder = 'Обязательное поле'
        } else {
            element.classList.remove('error')
            formEl.submit();
        }
    });
});


