// From https://www.youtube.com/watch?v=XxG7vqFecR8

const swiper = new Swiper('.swiper', {
    slidesPerView: 1, 
    spaceBetween: 20, 
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});