let deck = [];
let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let suits = ["S", "C", "H", "D"];
let playerhand = [];
let dealerhand = [];
let randomCard = null;
let addPCards;
let addDCards;
let addHit = {count:0, hit:0};
let addHitD = {count: 0, hit:0};
let pTag = document.getElementById('pTag');
let p1c1 = document.getElementById('p1c1');
let p1c2 = document.getElementById('p1c2');
let p1c3 = document.getElementById('p1c3');
let p1c4 = document.getElementById('p1c4');
let p1c5 = document.getElementById('p1c5');
let p2c1 = document.getElementById('p2c1');
let p2c2 = document.getElementById('p2c2');
let p2c3 = document.getElementById('p2c3');
let p2c4 = document.getElementById('p2c4');
let p2c5 = document.getElementById('p2c5');



const setItOff = () => {

const buildDeck = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      let card = {
        num: arr1[i],
        suit: arr2[j],
        value: i + 2,
        imgSRC: `<img src= "images/png/${arr1[i]}${
          arr2[j]
        }.png" width="150px">`
      };
      deck.push(card);
    }
  }
  return deck;
};
buildDeck(values, suits);


const drawRandomCard = () => {
  let randoNum = Math.floor(Math.random() * deck.length);
  let randomCard = deck[randoNum];
  if (
    randomCard.num === "J" ||
    randomCard.num === "Q" ||
    randomCard.num === "K"
  ) {
    randomCard.value = 10;
  }
  if (randomCard.num === "A") {
    randomCard.value = 11;
  }
  return randomCard;
};



let addCards = (cardValArr) => {

       let redce = (a, c) => a + c
       return cardValArr.reduce(redce)
   }

   const dealCards = () => {

       const hand = [drawRandomCard(), drawRandomCard()];
       document.getElementById('p1c1').innerHTML = hand[0].imgSRC;
       p1c2.innerHTML = hand[1].imgSRC;
       return addCards([hand[0].value, hand[1].value]);

   }

   const dealCardss = () => {

       const hand = [drawRandomCard(), drawRandomCard()];
       p2c1.innerHTML = hand[0].imgSRC;
       p2c2.innerHTML = hand[1].imgSRC
       return addCards([hand[0].value, hand[1].value]);

   }

   const restart = () => {
       location.reload();
   }

   addPCards = dealCards();
   addDCards = dealCardss();

   const player1win = () => {
       pTag.innerText = "You win dude... -Chauncey";
       setTimeout(restart, 2000);


   }
   const player1bust = () => {
       pTag.innerText = "You bust man, chill!.  - Chauncey";
       setTimeout(restart, 2000);

   }
   const player2win = () => {
       pTag.innerText = "I won!  - Chauncey";
       setTimeout(restart, 2000);

   }
   const player2bust = () => {
       pTag.innerText = "You only won out of luck!. -Chauncey";
       setTimeout(restart, 2000);

   }

   const tie = () => {
       pTag.innerText = "It's a tie!.   -Chauncey";
       setTimeout(restart, 2000);

   }

   const hitPlayer = () => {

       if (addPCards == '21'){
           player1win()

       } else if (addHit.count === 0){

           let carrd = [drawRandomCard()];
           addHit.hit = addPCards + carrd[0].value;
           p1c3.innerHTML = carrd[0].imgSRC;

       } else if (addHit.count === 1){

           let carrd = [drawRandomCard()];
           addHit.hit += carrd[0].value;
           p1c4.innerHTML = carrd[0].imgSRC;

       } else if(addHit.count === 2){

           let carrd = [drawRandomCard()];
           addHit.hit += carrd[0].value;
           p1c5.innerHTML = carrd[0].imgSRC;

       }
           addHit.count ++

       if (addHit.hit == '21') {
           player1win();
       }
       if (addHit.hit > '21') {
           player1bust();
       }
       return addHit.hit;
   }


   document.getElementById('p1h').addEventListener('click', hitPlayer);

   const hitDealer = () => {

       if (addDCards == '21'){
           player2win();

       } else if (addHitD.count === 0){

           let carrd = [drawRandomCard()];
           addHitD.hit = addDCards + carrd[0].value;
           p2c3.innerHTML = carrd[0].imgSRC;

       } else if (addHitD.count === 1){

           let carrd = [drawRandomCard()];
           addHitD.hit += carrd[0].value;
           p2c4.innerHTML = carrd[0].imgSRC;

       } else if(addHitD.count === 2){

           let carrd = [drawRandomCard()];
           addHitD.hit += carrd[0].value
           p2c5.innerHTML = carrd[0].imgSRC;
       }
           addHitD.count ++

       if (addHitD.hit == '21') {
           player2win();
       }

       if (addHitD.hit > '21') {
           player2bust();
       }

       return addHitD.hit;
   }
   document.getElementById('p2h').addEventListener('click', hitDealer);

   const callTheGame = () => {
       if (addPCards > addDCards){
           player1win();
       } else if (addPCards < addDCards){
           player2win();
       } else if (addPCards == addDCards){
           tie();
       } else if (addHit.hit > addHitD.hit){
           player1win();
       } else if (addPCards > addHitD.hit){
           player1win();
       } else if (addHit.hit < addDCards){
           player2win();
       } else if (addHit.hit == addDCards){
           tie();
       } else if (addHit.hit < addHitD.hit){
           player2win();
       } else {
           tie();
       }
   }
   document.getElementById('call').addEventListener('click', callTheGame);
}
document.getElementById('deal').addEventListener('click', setItOff);
