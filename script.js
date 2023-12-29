let gamepad = document.querySelector("#layer_1");
let userInput = document.querySelectorAll('input');

let totalRotation = 0;

function inputTrigger() {
    totalRotation += 5;
    gamepad.style.transform = `translateX(350px) translateY(400px) scale(5) rotate(${totalRotation}deg)`;
    gamepad.style.transition = 'transform 2s';
    userInput.forEach(input =>{
    if(userInput.value == ''){
	totalRotation = 0;
	gamepad.style.transform = `rotate(${totalRotation}deg)`;
    }
})
}

userInput.forEach(input=>{
input.addEventListener('input', inputTrigger)
})
