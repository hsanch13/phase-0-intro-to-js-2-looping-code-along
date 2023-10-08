const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, events) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
       messages.push (`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
        
    }
    return messages
} 

function countDown(start) { 
    while (start >= 0) {
  console.log(start) 
    start--;
}
}