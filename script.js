const rightArrow = document.getElementById('right-arrow')
const leftArrow = document.getElementById('left-arrow')
const sliderImage = document.getElementsByClassName('slider-image')
const menu = document.getElementById('icon')
menu.addEventListener('click', (e) => {
    document.getElementById('menu').style.display = 'flex'
})


var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav-container").style.top = "0";
    } else {
        document.getElementById("nav-container").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos
}

let click = false;
let translate = 0;

const handleTranslate = (sliderImage) => {
    for (let i = 0; i < sliderImage.length; i++) {
        const element = sliderImage[i];

        if (translate < -400) {
            translate = 0;
        }
        element.style.transform = `translateX(${translate}%)`
        element.style.transition = 'all 1s cubic-bezier(0.5, 0.48, 0.61, 0.59)'
    }
}

rightArrow.addEventListener('click', (e) => {
    click = true
    translate = translate - 100
    handleTranslate(sliderImage)
})

leftArrow.addEventListener('click', (e) => {
    click = true
    translate = translate + 100
    handleTranslate(sliderImage)
})

const interval = setInterval(() => {
    translate = translate - 100
    handleTranslate(sliderImage)
    if (click) {
        clearInterval(interval)
    }
}, 8000)



