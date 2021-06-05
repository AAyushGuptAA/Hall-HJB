// No need for the nav-bar in hcm-page
// const toggler = document.querySelector('.ham');
// const nav = document.querySelector('nav');
// const anchors = document.querySelectorAll('a');
// toggler.addEventListener('click', () => {
//     nav.classList.toggle('toggle');
//     toggler.classList.toggle('reverse');
// })

// anchors.forEach(a => {
//     a.addEventListener('click', () => {
//         nav.classList.toggle('toggle');
//         toggler.classList.toggle('reverse');
//     })
// })
const all_hcms = [{
    year: 21,
    imgSrc: "../assets/hcm21/aDeep.jpg",
    name: "Anubhav Deep",
    position: "Hall President",
    f_link: "https://www.facebook.com/anubhav.deep1",
    in_link: "https://www.linkedin.com/in/anubhav-deep",
    email_link: "mailto:anubhavdeep.singh.karnal@gmail.com"
}, {
    year: 21,
    imgSrc: "../assets/hcm21/sTidke.jpg",
    name: "Samadhan Tidke",
    position: "Second Senate Member",
    f_link: "https://www.facebook.com/samadhan.tidke.10",
    in_link: "https://www.linkedin.com/in/samadhan-tidke-1baa3a169",
    email_link: "mailto:samadhantidke54@gmail.com"
}, {
    year: 21,
    imgSrc: "../assets/hcm21/akSingh.jpg",
    name: "Anuj Kumar Singh",
    position: "General Secretary Social and Cultural",
    f_link: "https://www.facebook.com/anuj.kumar.1999",
    in_link: "https://www.linkedin.com/in/singhkumaranuj",
    email_link: "mailto:anujsharanamu@gmail.com"
}, {
    year: 21,
    imgSrc: "../assets/hcm21/aDachepally.jpg",
    name: "Abhilash Dachepally",
    position: "General Secretary Sports and Games",
    f_link: "https://www.facebook.com/abhilashvarma0",
    in_link: "https://www.linkedin.com/in/abhilash-dachepally-b60259170",
    email_link: "mailto:abhilashdachepally@gmail.com"
}, {
    year: 21,
    imgSrc: "../assets/hcm21/mGupta.jpg",
    name: "Mudit Gupta",
    position: "General Secretary Technology",
    f_link: "https://www.facebook.com/mudit.gupta.1800",
    in_link: "https://www.linkedin.com/in/mudit-gupta-b5a206180",
    email_link: "mailto:muditgupta140@gmail.com"
}, {
    year: 21,
    imgSrc: "../assets/hcm21/tNaik.jpg",
    name: "Tharun Naik",
    position: "General Secretary Student's Welfare",
    f_link: "https://www.facebook.com/tharun.naik.589",
    in_link: "https://www.linkedin.com/in/tharunnaik",
    email_link: "mailto:itistheinventor@gmail.com"
}];
let currentYear = new Date();
const hcmSection = document.querySelector('.hcm-current');
hcmSection.innerHTML = get_HCMs();

const btns = document.querySelectorAll('.year');
let activeBtn = document.querySelector('.active')
btns.forEach((btn, index) => {
    btn.innerHTML = `${currentYear.getFullYear() - index - 1}-${(currentYear.getFullYear() - index)%100}`;
    btn.addEventListener('click', (e) => {
        activeBtn.classList.remove('active');
        e.currentTarget.classList.add('active');
        activeBtn = e.currentTarget;
        let tenure = e.currentTarget.innerHTML;
        let year = parseInt(tenure.slice(tenure.length - 2));
        hcmSection.innerHTML = get_HCMs(year);
    });
})

function get_HCMs(year = currentYear.getFullYear() % 100) {
    // filter the all_hcms, so as to get only HCM of year = year.
    const template = []
    let card = ``;
    for (let i = 0; i < all_hcms.length; i++) {
        card = `<div class="card">
        <img src=${all_hcms[i].imgSrc} alt="">
        <div class="card-content">
        <h2 class="name">${all_hcms[i].name}</h2>
        <h3 class="position">${all_hcms[i].position}</h3>
        <div class="icons">
            <ul>
                <li><a href=${all_hcms[i].f_link} target="_blank"><i class="bi bi-facebook"></i></a></li>
                <li><a href=${all_hcms[i].in_link} target="_blank"><i class="bi bi-linkedin"></i></a></li>
                <li><a href=${all_hcms[i].email_link} target="_blank"><i class="bi bi-envelope-fill"></i></a></li>
            </ul>
        </div>
        </div>
    </div>`;
        template.push(card);
    }
    const completeTemplate = template.join('');
    return completeTemplate
}