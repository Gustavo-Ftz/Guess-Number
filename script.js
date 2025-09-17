const computerNumber = Math.floor(Math.random() * 11)
let userLifes = 3

function guessNumber() {
    const userNumber = window.parseInt(document.getElementById('userNumber').value)
    const result = window.document.getElementById('result')

    if (isNaN(userNumber) || userNumber < 0 || userNumber > 10) {
        window.alert('Insira um número entre 0 e 10')
    } else {
        if (userNumber === computerNumber) {
            window.alert(`Você VENCEU! O número é ${computerNumber}`)
            window.location.reload()
        
        } else {
            userLifes -= 1

            if (userLifes === 0) {
                window.alert(`GAME OVER! O número era ${computerNumber}`)
                window.location.reload()
            }

            result.innerHTML = `Você errou! `

            if (userNumber < computerNumber) {
                result.innerHTML += `É um número maior! Chances restantes: ${userLifes}`
            } else {
                result.innerHTML += `É um número menor! Chances restantes: ${userLifes}`
            }
        }
    }
}