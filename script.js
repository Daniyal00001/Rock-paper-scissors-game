let rock =document.querySelector("#rock");
let paper =document.querySelector("#paper");
let scissors =document.querySelector("#scissors");
let choices= document.querySelectorAll(".imgs");
let userchoice;
let computerchoice;
let userscore=0;
let computerscore=0;
let winnermsg = document.querySelector(".winnermsg");
let msg_container = document.querySelector(".msg_container");
let compscore=document.querySelector(".compscore");
let yourscore=document.querySelector(".yourscore");
let abc = document.querySelector("#abc");


 rock.addEventListener("click",()=>{
    userchoice = "rock";
    computerturn();
    checkwinner(userchoice);
});
paper.addEventListener("click",()=>{
    userchoice = "paper"
    computerturn();
    checkwinner(userchoice);
});
scissors.addEventListener("click",()=>{
    userchoice = "scissors"
    computerturn();
    checkwinner(userchoice);
});


const computerturn=()=>{
    const options =["rock", "paper", "scissors"];
    const randomindex = Math.floor(Math.random()*3);
    return options[randomindex];
}

let checkwinner = (userchoice)=>{
computerchoice=computerturn();
if(userchoice==="rock" && computerchoice==="paper"){
  msg_container.style.backgroundColor="red";
  winnermsg.innerText=("Computer wins");
  computerscore=computerscore+1;
  compscore.innerText=(computerscore);
  abc.innerText=("Compters choice = Paper");
  abc.classList.remove("hide");
}


if(userchoice==="rock" && computerchoice==="rock"){
    msg_container.style.backgroundColor="#7a2448";
    winnermsg.innerText=("Draw");
    abc.innerText=("Compters choice = Rock");
    abc.classList.remove("hide");
}


if(userchoice==="rock" && computerchoice==="scissors"){
    winnermsg.innerText=("You win");
    msg_container.style.backgroundColor="green";
    userscore=userscore+1;
    yourscore.innerText=(userscore);
    abc.innerText=("Compters choice = Scissors");
    abc.classList.remove("hide");
}

if(userchoice==="paper" && computerchoice==="rock"){
    msg_container.style.backgroundColor="green";
    winnermsg.innerText=("You win");
    userscore=userscore+1;
    yourscore.innerText=(userscore);
    abc.innerText=("Compters choice = ROCK");
    abc.classList.remove("hide");
}


if(userchoice==="paper" && computerchoice==="scissors"){
    msg_container.style.backgroundColor="red";
    winnermsg.innerText=("Computers win");
    computerscore=computerscore+1;
    compscore.innerText=(computerscore);
    abc.innerText=("Compters choice = Scissors");
    abc.classList.remove("hide");
}


if(userchoice==="paper" && computerchoice==="paper"){
    msg_container.style.backgroundColor="#7a2448";
    winnermsg.innerText=("Draw");
    abc.innerText=("Compters choice = Paper");
    abc.classList.remove("hide");
}


if(userchoice==="scissors" && computerchoice==="rock"){
    msg_container.style.backgroundColor="red";
    winnermsg.innerText=("Computers win");
    computerscore=computerscore+1;
    compscore.innerText=(computerscore);
    abc.innerText=("Compters choice = rock");
    abc.classList.remove("hide");
  
}


if(userchoice==="scissors" && computerchoice==="paper"){
    msg_container.style.backgroundColor="green";
    winnermsg.innerText=("You win");
    userscore=userscore+1;
    yourscore.innerText=(userscore);
    abc.innerText=("Compters choice = Paper");
    abc.classList.remove("hide");
}

if(userchoice==="scissors" && computerchoice==="scissors"){
    msg_container.style.backgroundColor="#7a2448";
    winnermsg.innerText=("Draw");
    console.log(computerchoice);
    abc.innerText=("Compters choice = scissors");
    abc.classList.remove("hide");
}
}