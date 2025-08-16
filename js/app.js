const startButton = document.getElementById('startButton')
const instructionButton = document.getElementById('instructionButton')
const musicButton = document.getElementById('musicButton')
const openingMusic = new Audio()
openingMusic.src = './sound/opening.mp3'

startButton.addEventListener('click', () => {
    window.location.href = 'game.html'
})

instructionButton.addEventListener('click', () => {
    window.location.href = 'instructions.html'
})

musicButton.addEventListener('click', () => {
    if (openingMusic.paused) {
        openingMusic.play()
        openingMusic.loop = true
    } else {
        openingMusic.pause()
        openingMusic.currentTime = 0 
    }
})

