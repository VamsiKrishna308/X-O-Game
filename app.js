let boxes = document.querySelectorAll(".box");
let playerX=false;
let msg = document.querySelector(".info");
let players = document.querySelector(".info1");
let game = document.querySelector(".game");
let newgame = document.querySelector(".new-btn");
let winningpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
]
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (playerX == false) {
      box.innerText = "X";
      players.innerText = "O Turn";
      playerX = true;
    } else if(playerX == true) {
      box.innerText = "O";
      players.innerText = "X Turn";
      playerX = false;
    }
    box.disabled = true;
    checkwin();
  });
})
const checkwin = () => {
  for(pattern of winningpatterns){
    let a = boxes[pattern[0]];
    let b = boxes[pattern[1]];
    let c = boxes[pattern[2]];
    if(a.innerText == b.innerText && b.innerText == c.innerText && a.innerText != "" && b.innerText != "" && c.innerText != ""){
      a.classList.add("winning-box");
      b.classList.add("winning-box");
      c.classList.add("winning-box");
      players.innerHTML = "";
      newgame.classList.remove("hide");
      msg.classList.remove("hide");
      msg.innerText = "Congratulations\n Winning the Tic Tac Toe Game Player " + a.innerText;
      disabledboxes();
    }
  }
}
const disabledboxes = () =>{
  for(let box of boxes){
    box.disabled= true;
}
}
newgame.addEventListener("click", () => {
   for(let box of boxes){
  box.disabled= false;
  box.innerText ="";
  newgame.classList.add("hide");
  msg.classList.add("hide");
  box.classList.remove("winning-box");
   }
})
