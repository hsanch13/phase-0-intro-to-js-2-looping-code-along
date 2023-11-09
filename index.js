const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
  for (let i = 0; i < gifts.length; i++){
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }
  return gifts;
}

wrapGifts(gifts)

const cardMessages = [];

function writeCards(name, event){
  for (let i = 0; i < name.length; i++){
    cardMessages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
  }
  return cardMessages
}

function countDown(start){
  let countDown = 10; 
  while (countDown > -1){
    console.log(countDown--)
  }
}


// for (let age = 30; age <4-; age++){
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
//   debugger
// }
// debug> 








// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// const names = ["Guadalupe", "Ollie", "Aki"];

// function writeCards(names, events) {
//     let messages = [];
//     for (let i = 0; i < names.length; i++) {
//        messages.push (`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
        
//     }
//     return messages
// } 

// function countDown(start) { 
//     while (start >= 0) {
//   console.log(start) 
//     start--;
// }
// }