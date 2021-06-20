const header = document.querySelector('header');
const toggler = document.querySelector('.ham');
const nav = document.querySelector('.navbar');
const anchors = document.querySelectorAll('a');
toggler.addEventListener('click', () => {
    // header.classList.toggle('hide');
    nav.classList.toggle('toggle');
    toggler.classList.toggle('reverse');
})

anchors.forEach(a => {
    a.addEventListener('click', () => {
        if (!a.parentElement.classList.contains('drop')) {
            // header.classList.toggle('hide');
            nav.classList.toggle('toggle');
            toggler.classList.toggle('reverse');
        }
    })
})


// Image logic
const imageContainers = document.querySelector('.gallery').children;
imageContainers[0].style.display = 'block'
let i = 1;
setInterval(function() {
    if (i == imageContainers.length) {
        imageContainers[i - 1].style.display = 'none'
        imageContainers[0].style.display = 'block'
        i = 0;
    } else {
        imageContainers[i - 1].style.display = 'none'
        imageContainers[i].style.display = 'block'
    }
    i++;
}, 6000);