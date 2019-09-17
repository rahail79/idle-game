var score = 0;

postToPage(score); // Print to the page

createButton('Plus', btnPress); // Make a button
changeTitle('Clicker Game');
createButton('Minus', btnPress); // Make a button
setInterval(btnPress, 1000);

function btnPress() {
  score++;
  postToPage(score);

}
