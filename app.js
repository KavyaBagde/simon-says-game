let gameSeq = [];
let userSeq = [];

let btns = ["red" , "green" , "yellow" , "blue"];


let started = false;
let level = 0;

let heighScore = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function (key) {
    // console.log(key);
 if(key.code == "Space"){
    if (started == false) {
        started = true;
        levelUp();
    }
  
}
});

function btnFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   } , 250)
}


function levelUp(){
    userSeq = [];
    level++;

    if(level > heighScore){
        heighScore = level;
        document.querySelector("h3").innerHTML = `Heigh score : ${heighScore - 1}`;
    }

    h2.innerText =  `Level ${level}`;

    let randomIdx = Math.floor(Math.random()*4);
    let gameColor = btns[randomIdx];
    let randBtn = document.querySelector(`.${gameColor}`)
    gameSeq.push(gameColor);
    // console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){
//    let idx = level - 1;
   if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length === gameSeq.length){
        setTimeout(function(){
            levelUp();
        } , 1000)
        
    }
   }else{
    h2.innerHTML = `Game Over Your Score Is ${level - 1} <br> press space bar to restart the game`;
    let error = document.querySelector(".game-container");
    error.classList.add("error");
    setTimeout(function(){
        error.classList.remove("error" )
    } , 500)
    reset();
   }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id")
    userSeq.push(userColor);
    // console.log(userSeq);
    checkAns(userSeq.length-1);
}

let buttons = document.querySelectorAll(".btn");
for(button of buttons){
    button.addEventListener("click" , btnPress);
}

function reset(){
    started = false;
    gameSeq =[];
    userSeq = [];
    level = 0;
}



