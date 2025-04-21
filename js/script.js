const surface = document.querySelector('.surface');
const btnMove = document.getElementById('btn-move');
const btnLight = document.getElementById('btn-light');
const carWrapper = document.querySelector('.car')
const carImage = document.querySelector('.car-image')

let animationSpeed = 14; // مدت زمان انیمیشن به ثانیه
let flagMove = false
let flagLight = false

// تابع برای شروع انیمیشن
function startAnimation() {
    if (flagMove){
        flagMove = false
        btnMove.innerText = 'run'
        surface.style.animationPlayState = 'paused';
        carWrapper.classList.remove('animatedCar')
        btnMove.classList.remove('running');
    }else {
        flagMove = true
        btnMove.innerText = 'stop'
        surface.style.animation = `moveRoad ${animationSpeed}s linear infinite`;
        surface.style.animationPlayState = 'running';
        carWrapper.classList.add('animatedCar')
        btnMove.classList.add('running');
    }
}

function setLightFunc(){
    if (flagLight){
        flagLight = false
        btnLight.innerText = 'light on'
        carImage.setAttribute('src' , 'images/Img_05.png')
        btnLight.classList.add('light-on');
    }else {
        flagLight = true
        btnLight.innerText = 'light off'
        carImage.setAttribute('src' , 'images/Img_06.png')
        btnLight.classList.remove('light-on');
    }
}




// روشن و خاموش کردن چراغ‌ها
btnLight.addEventListener('click', () => {
    setLightFunc()
});


// افزودن رویدادها به دکمه‌ها
btnMove.addEventListener('click', startAnimation);
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        startAnimation()
    }else if (event.key === 'w' || event.key === 'W'){
        setLightFunc()
    }
});