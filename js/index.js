'use strict';
const documentReady = () => {

    const iconSearch = document.getElementById('iconSearch');
    const inputSearch = document.getElementById('inputSearch');
    const logoContainer = document.getElementById('logoContainer');
    const header = document.getElementById('header');
    const itemGallery = [...document.querySelectorAll('.gallery__item')];

    const windowScroll = () => {
        header.classList.toggle('header--scroll', window.scrollY > 0);

    };
    window.addEventListener('scroll', windowScroll);

    const inputOn = () => {
        inputSearch.classList.toggle('input--on');
    }
    iconSearch.addEventListener('click', inputOn);

    window.onresize = () => {
        logoContainer.classList.toggle('logo--off', window.innerWidth < 700);
    }

    const inputItemGallery = (input, observe) => {
        input.forEach(input => {
            if (input.isIntersecting) {
                input.target.classList.add('gallery__item--input');
            }
        });
    }
    const observer = new IntersectionObserver(inputItemGallery, {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.1
    });

    itemGallery.forEach(element => {
        observer.observe(element);
    })

    Swal.fire({
        title: 'Comer es una necesidad, pero comer de forma inteligente es un arte♥ ♥',
        text: 'Gracias',
        imageUrl: 'https://aprende.com/wp-content/uploads/2020/12/alimentacion-saludable.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    })

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Street Style', 'Publicity', 'Artistic', 'BackStage'],
            datasets: [{
                data: [20, 50, 10, 30],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 205, 86)',
                    'rgb(201, 203, 207)',
                    'rgb(54, 162, 235)'
                ]
            }]
        }
    });

}
document.addEventListener('DOMContentLoaded', documentReady);