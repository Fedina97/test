const arrow = document.querySelector('.arr-up');

document.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
        arrow.style.display = "flex";
    } else {
        arrow.style.display = "none";
    }
});

const like = document.querySelectorAll('.fa-heart');

like.forEach(function (item) {
    item.addEventListener('click', function (e) {
        if (e.target.classList.contains('fa-heart')) {
            item.classList.toggle('white');
            if (item.classList.contains('white')) {
                document.body.insertAdjacentHTML('afterbegin', `<div class="info-modal">Товар добавлен в избранное</div>`);
                window.setTimeout(function () {
                    document.querySelector('.info-modal').style.display = "none";
                }, 3000);
            } else {
                document.body.insertAdjacentHTML('afterbegin', `<div class="info-modal">Товар удален из избранного</div>`);
                window.setTimeout(function () {
                    document.querySelector('.info-modal').style.display = "none";
                }, 3000);
            }
        }
    });
});

let btnClose = document.querySelector('.fa-times');
let menu = document.querySelector('.menu-block');
let btnMenu = document.querySelector('.menu');

btnMenu.addEventListener('click', function (e) {
    menu.style.display = "block";
});

btnClose.addEventListener('click', (e) => {
    menu.style.display = "none";
    e.stopPropagation();
});