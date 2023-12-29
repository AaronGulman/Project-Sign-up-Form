let gamepad = document.querySelector("#realPad");
let userInput = document.querySelectorAll('input');
let gameDiv = document.getElementById('gamepad')
let odin = document.getElementById('odin')

let totalRotation = 0;

let xPosition = 5;
let yPosition = 5;
let xSpeed = 10;
let ySpeed = 10;

function update(){
    odin.style.left = xPosition + 'px'
    odin.style.top = yPosition + 'px'
    console.log('update is working')
}


setInterval(()=>{
    xPosition += xSpeed;
    yPosition += ySpeed;
    // update()
},1000)



function inputTrigger() {
    totalRotation += 5;
    realPad.style.transform = `rotate(${totalRotation}deg)`;
    realPad.style.transition = 'transform 2s';
    userInput.forEach(input =>{
    if(userInput.value == ''){
	totalRotation = 0;
	realPad.style.transform = `rotate(${totalRotation}deg)`;
    }
})
}

userInput.forEach(input=>{
input.addEventListener('input', inputTrigger)
})
