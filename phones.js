if (window.innerWidth <= 600) {
let gameP = document.querySelector("#realPad");
let userInp = document.querySelectorAll("input");

let totalRot = 0;

function inputTrigger() {
	totalRot += 5;
    gameP.style.transform = `translateX(60px) translateY(400px) scale(2) rotate(${totalRot}deg)`;
    gameP.style.transition = 'transform 2s';
    userInp.forEach(input =>{
    if(userInp.value == ''){
	totalRot = 0;
	gameP.style.transform = `rotate(${totalRot}deg)`;
    }
})
}

userInp.forEach(input=>{
    input.addEventListener('input', inputTrigger)
    })
}