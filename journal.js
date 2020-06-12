// console.log('it works');
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
    content: "My favourite sport is handball, I love handball because I only allow to use my hand and I am able to catch or stop the ball from being a goal because I am tall, though I do not love to be the goalKeeper."
  }
]

let myFirstJournal = prompt("Welcome to my first journal.\nChoose (1) for listing all the entries.\nChoose (2) for adding a new entry.\nChoose (3) to quit.");

while (myFirstJournal === 1) {
  alert("title :" + journals[0].title + "\n" + "content :" + journals[0].content);
}
while (myFirstJournal === 2) {
  myFirstJournal = prompt("Enter your journal title.");
}



