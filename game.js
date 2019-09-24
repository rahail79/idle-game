var score = 1; // Create a variable to store the score in

var title = new Title('Survival'); // Create a title element
var button = new Button('hello', btnPress);
var button = new Button('Knife🔪', btnPress);     // Create a button element
var hidden = new Button('Boo!');
hidden.hide();
var scr = new Text(score);                    // Create a text element

setInterval(btnPress, 1000);   // Set up a loop

function btnPress() {
  score++;
  scr.edit(score);
}
