const rightArrow = document.getElementById('right-arrow')
const leftArrow = document.getElementById('left-arrow')
const sliderImage = document.getElementsByClassName('slider-image')
const element=document.getElementById('slider-image1')
rightArrow.addEventListener('click', (e) => {
    console.log('clicked')
})
let click=false;
let translate = 0;

const handleTranslate=(sliderImage)=>{
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
    click=true
    translate = translate - 100
    handleTranslate(sliderImage)
})

leftArrow.addEventListener('click', (e) => {
    click=true
    translate = translate + 100
    handleTranslate(sliderImage)
})


    const interval=setInterval(()=>{
        translate = translate - 100
        handleTranslate(sliderImage)
        if(click){
            clearInterval(interval)
        }
    },5000)

    
