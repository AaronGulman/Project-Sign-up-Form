let gameP = document.querySelector("#layer_1");
let userInp = document.querySelector("#login");

let totalRot = 0;

function inputTrigger() {
	totalRot += 5;
    gameP.style.transform = `translateX(60px) translateY(400px) scale(2) rotate(${totalRotation}deg)`;
    gameP.style.transition = 'transform 2s';

    if(userInp.value == ''){
	totalRot = 0;
	gameP.style.transform = `rotate(${totalRot}deg)`;
    }
}

userInp.addEventListener('input', inputTrigger);
