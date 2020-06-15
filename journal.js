let journals = [
  {
    title: "The best journey",
    content: "Last January is my bestest journey, it was really nice, I got two seats for me, I was not in a pain at all as usual."
  },
  {
    title: "Worst thing",
    content: "This day, everyone discomfort from this virus which is seen all over the world, lots of people died and also suffer in the hospital."
  },
  {
    title: "My favourite sport",
    content: "My favourite sport is handball, I love handball because I only allow to use my hand and I am able to catch or stop the ball from being a goal because I am tall, though I do not love being a goalKeeper."
  }
]
console.log(journals);

let myFirstJournal = prompt("Welcome to my first journal.\nChoose (1) for listing all the entries.\nChoose (2) for adding a new entry.\nChoose (3) to quit.");


for (let i = 0; i <= journals.length; i++) {
  if (journals === 1);
  alert(JSON.stringify(journals[i]));
}


let userEntryTitle = prompt("Enter your journal title.");
let userEntryContent = prompt("Enter your journal content.");

if (journals === 2);
let newEntry = {
  title: "The best time in your life.",
  content: "The time which you live next to your family and your old friends is the time when you feel that you have the priveledge of life than anyone else."
}
journals.push(newEntry);
alert(JSON.stringify(newEntry));


let wantToQuit = prompt("Do you want to show the list of entries again? (yes, no)");
if (journals === 3) {

}









