var score = 0; // Create a variable to store the score in

var title = new Title('Escape Riot prison'); // Create a title element
var button = new Button('Start', btnPress);   // Create a button element

var hidden = new Text('You are in a prison riot and this is your chance to Escape!');
hidden.hide();
var hidden2 = new Text('You find key to room');
hidden2.hide();
var hidden3 = new Button('Door 1', nothing);
hidden3.hide();
var hidden33 = new Button('Door 2', lab);
hidden33.hide();
var hidden333 = new Button('Door 3', locked);
hidden333.hide();
var hidden4 = new Button('Door locked');
hidden4.hide();
var hidden5 = new Text('You wear the officers cloth');
hidden5.hide();
var hidden55 = new Text('you sprint for the exit');
hidden55.hide();
var hidden555 = new Text('you hear tear gas being deployed, a tear gas bullet flies past you');
hidden555.hide();
var hidden6 = new Button('You find the right door and make it', door);
hidden6.hide();


var scr = new Text(score);                    // Create a text element


setInterval(btnPress, 1000);   // Set up a loop

function nothing() {
  scr.edit('You find nothing')
}

function lab() {
  scr.edit('You find a gas mask in the lab')
}

function locked() {
  scr.edit('need different key')
}


function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 10) {
    hidden.show();
  }



  if(score > 30) {
    hidden2.show(500);
  }
  if(score > 40) {
    hidden3.show(500);
  }
  if(score > 40) {
    hidden33.show(500);
  }
  if(score > 40) {
    hidden333.show(500);
  }
  if(score > 60) {
    hidden5.show(500);
  }
  if(score > 70) {
    hidden55.show(500);
  }
  if(score > 80) {
    hidden555.show(500);
  }
  if(score > 90) {
    hidden6.show(500);
  }


}
function door() {
  var list = new HTMLElement('ul')
  var listItem1 = new HTMLElement('li', 'Congratulations')
  var listItem1 = new HTMLElement('li', 'you made it,now your free to do what you want.')
list.add(listItem1);
list.add(listItem1);
}
