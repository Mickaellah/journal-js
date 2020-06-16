// This is an array which contains three objects of journals or entries.
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

// A variable which contains all the choices that users can choose.
let menuOfChoice = `
Choose (1) for listing all the entries.
Choose (2) for adding a new entry.
Choose (3) to quit.
Choose (4) to delete the last entry.
Choose (5) to delete a specific entry.
`;

// A prompt for the choices.
let userChoice = Number(prompt(menuOfChoice));

// A while loop which loop through the objects and the choices untill users choose to quit the page.
while (userChoice !== 3) {

// Switch statement that stores all the data and all the conditions for this journal to work.
  switch(userChoice) {
    case 1:
      for (let i = 0; i < journals.length; i++) {
        let entryString = `Title: ${journals[i].title}
Content: ${journals[i].content}`;
        alert(entryString);
      }
      break;
    case 2:
      let userEntryTitle = prompt("Enter your journal title.");
      let userEntryContent = prompt("Enter your journal content.");
      let entry = {
        title: userEntryTitle,
        content: userEntryContent
      }
      journals.push(entry);
      break;
    case 3:
      break;
    case 4:
      let deletedEntry = journals.pop();
      alert(`We deleted the last entry: ${deletedEntry.title}`);
      break;
    case 5:
      let indexToDelete = Number(prompt(`Enter the entry's index to delete (1 to ${journals.length})`));
      let entryDeleted = journals.splice(indexToDelete--, 1);
      alert(`You just deleted ${entryDeleted[0].title}`);
      break;
  }
  userChoice = Number(prompt(menuOfChoice));
}









