var score = 0;

postToPage(score); // Print to the page

createButton('Robel', btnPress); // Make a button
changeTitle('Clicker Game');

setInterval(btnPress, 1000);

function btnPress() {
  score++;
  postToPage(score);
}
