// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}
const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
        return gifts;
    }
    let name = ["Guadalupe", "Ollie", "Aki"];
    let eventName = "surprise";
    
    function writeCards(name, eventName) {
      let message = [];
      for (let i = 0; i < name.length; i++) {
        message.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`);
      }
      return message;
    }
function countDown(num) {
    if(!Number.isInteger(num)) {
        console.log(10);
        return;
    } 
    while (num >= 0) {
        console.log(num);
        num--;
    }
}