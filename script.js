let gamepad = document.querySelector("#realPad");
let userInput = document.querySelectorAll('input');
let gameDiv = document.getElementById('gamepad')
let odin = document.getElementById('odin')
let FPS = 60;

let totalRotation = 0;

let xPosition = 5;
let yPosition = 5;
let xSpeed = 5;
let ySpeed = 5;

function update(){
    odin.style.left = xPosition + 'px'
    odin.style.top = yPosition + 'px'
    console.log('update is working')
}


setInterval(()=>{
    if(xPosition + odin.clientWidth >= gameDiv.clientWidth ||
        xPosition <= 0 ){
        xSpeed = -xSpeed;
    } 
    if (yPosition + odin.clientHeight >= gameDiv.clientHeight || yPosition <= 0){
            ySpeed = -ySpeed;
    }
    xPosition += xSpeed;
    yPosition += ySpeed;
    update()
},1000/FPS)



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
