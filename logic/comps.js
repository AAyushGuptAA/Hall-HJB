const cats = document.querySelectorAll('.category');
let activeul = document.querySelector('.active');
cats.forEach(cat => {
    cat.addEventListener('click', () => {
        if (activeul === cat.children[1]) {
            activeul.classList.toggle('active');
        } else if (!cat.children[1].classList.contains('active')) {
            cat.children[1].classList.add('active');
            activeul.classList.remove('active');
            activeul = cat.children[1];
        }

    })
})