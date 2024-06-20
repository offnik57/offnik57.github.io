const dino = document.querySelector('.dino'),
    car = document.querySelector('.car');

document.addEventListener('keypress', (event) => {jump()})

function jump() {
    if (!dino.classList.contains('jump')) {
        dino.classList.add('jump')
    }
    setTimeout(() => {
        dino.classList.remove('jump')
    }, 1000)
}

let game = setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    let carLeft = parseInt(window.getComputedStyle(car).getPropertyValue('left'))

    if(carLeft < 10 && carLeft > 0 && dinoTop > 205) {
        alert('GAME OVER !')
    }
}, 10)