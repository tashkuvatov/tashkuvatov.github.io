let menuBtn = document.querySelector('.menu-toggle');

menuBtn.onclick = function() {
    this.classList.toggle('_active');
    document.querySelector('.mobile-nav').classList.toggle('_active');
}



let btn_02 = document.getElementsByTagName("button")[0];

btn_02.onclick = function() {
    event.preventDefault(); //Чтобы не переходил на начало страницы
}


//Плавная прокрутка

const anchors = document.querySelectorAll('a[href*="#"]');
console.log(anchors)

for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const blockId = anchor.getAttribute('href').substr(1);

        console.log(blockId);

        document.getElementById(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
}
