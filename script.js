
// Creating a key value pair
const handOptions = {
  "rock": "rock.png",
  "paper": "paper.png",
  "scissors":"scissors.png"
}

let pcSCORE = 0; 
let userSCORE = 0;

const pickUserHand = (hand) =>{
  console.log(hand);
  //hide selection page
  let selection = document.querySelector(".selection");
  selection.style.display = "none";

  //To go to next page with results

  let results_page = document.querySelector(".results_page");
  results_page.style.display = "flex";

  // set the user pick
  document.getElementById("userPickOption").src = handOptions[hand]; 

  pickPcHand(hand);

}

const pickPcHand = (hand) =>{
  let hands =["rock","paper","scissors"];
  let pcSelection = hands[Math.floor(Math.random()* 3)];
  console.log(pcSelection); 

  // set the pc pick
  document.getElementById("pcPickOption").src = handOptions[pcSelection]; 
  result_mid(hand, pcSelection);

  // console.log(hands[2]);
}


// Conditons check
const result_mid = (userside, pcside)=>{

  if(userside == "paper" && pcside == "scissors"){
    setDecision("YOU LOST")
    setPcScore(pcSCORE + 1);
  }if(userside == "paper" && pcside == "rock"){
    setDecision("YOU WIN")
    setUserScore(userSCORE + 1) ;
    next_display("YOU WIN");
  }
  if (userside == "paper" && pcside == "paper") {
    setDecision("TIE UP");
  }
  if (userside == "rock" && pcside == "scissors") {
    setDecision("YOU WIN");
    setUserScore(userSCORE + 1);
    next_display("YOU WIN");
  }
  if (userside == "rock" && pcside == "paper") {
    setDecision("YOU LOST");
    setPcScore(pcSCORE + 1);
  }
  if (userside == "rock" && pcside == "rock") {
    setDecision("TIE UP");
  }
  if (userside == "scissors" && pcside == "scissors") {
    setDecision("TIE UP");
  }
  if (userside == "scissors" && pcside == "rock") {
    setDecision("YOU LOST");
    setPcScore(pcSCORE + 1);
  }
  if (userside == "scissors" && pcside == "paper") {
    setDecision("YOU WIN");
    setUserScore(userSCORE + 1);
    next_display("YOU WIN");
  }

}

// results display changes
const setDecision = (result) => {
  if(result === "TIE UP" ){
    document.querySelector(".result h1").innerText = result;
    document.querySelector(".result h2").style.display = "none";
    document.querySelector(".play_again").innerText = "REPLAY";
  }else{
  document.querySelector(".result h1").innerText = result;
  document.querySelector(".result h2").style.display = "block";
  document.querySelector(".play_again").innerText = "PLAY AGAIN";
  }
}

// To display NEXT button only when the user "WINS"
const next_display = (result) =>{
  let next = document.querySelector(".next");
  if(result === "YOU WIN"){
    next.style.display = "flex";
  }else {
    //when PLAY AGAIN is clicked NEXT button will get vanished
    next.style.display = "none";
  }
}



//To play next turn
const restartGame = ()=>{

  //To go to options page
  let selection = document.querySelector(".selection");
  selection.style.display = "flex";

  //To hide results page
  let results_page = document.querySelector(".results_page");
  results_page.style.display = "none";

}

// SCORE GENERATION
const setUserScore = (userScore) => {
  userSCORE = userScore;
  document.querySelector(".your_score h1").innerText = userScore;
}

const setPcScore =(newScore) =>{
  pcSCORE = newScore;
  document.querySelector(".computer_score h1").innerText = newScore;
}




// Rules pop up activation and deactivation
//Activation
const rules =(activation) =>{
  let popup = document.querySelector(".rules-popup");
  popup.style.display = "block";
}

//deactivation
const close_rules = (deactivation)=>{
  let popup = document.querySelector(".rules-popup");
  popup.style.display = "none";

}
