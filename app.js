let gameSeq=[];
let userSeq=[];
let btns=["red","green","blue","yellow"];
let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
                    if(started==false){
                                        console.log("Game is Started");
                                        started=true;
                                        levelUp();
                    }
});

function gameFlash(btn){
                    btn.classList.add("gameflash");
                    setTimeout(function(){
                                        btn.classList.remove("gameflash");
                    },250);
}

function userFlash(btn){
                    btn.classList.add("userflash");
                    setTimeout(function(){
                                        btn.classList.remove("userflash");
                    },250);
}

function levelUp(){
                    userSeq=[];
                    level++;
                    h2.innerText=`Level ${level}`;
                    let randIdx=Math.floor(Math.random()*3);
                    let randColor=btns[randIdx];
                    let randBtn=document.querySelector(`.${randColor}`);
                    //console.log(randIdx);
                    //console.log(randColor);
                    //console.log(randBtn);
                    gameSeq.push(randColor);
                    console.log(gameSeq);
                    gameFlash(randBtn);
}

function checkColor(idx){
                    if(userSeq[idx]===gameSeq[idx]){
                                        if(userSeq.length==gameSeq.length){
                                                            setTimeout(levelUp,1000);
                                        }
                    }
                    else{
                                        h2.innerHTML=`Game over! <br>Your Score was <b>${level}<b> <br>Press any key to restart`;
                                        document.querySelector("body").style.backgroundColor="red";
                                        setTimeout(function(){
                                                            document.querySelector("body").style.backgroundColor="white";
                                        }, 300);
                                        reset();
                    }
}

function btnPressed(){
                    //console.log(this);
                    let btn=this;
                    userFlash(btn);
                    userColor=btn.getAttribute("id");
                    userSeq.push(userColor);
                    checkColor(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
                    btn.addEventListener("click", btnPressed);
}

function reset(){
                    started=false;
                    gameSeq=[];
                    userSeq=[];
                    level=0;
}
