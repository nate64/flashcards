$(document).ready( function() {

var button1 = 'test' //$('#random key/value pair');
var button2 = 'two' //$('#random key/value pair');
var button3 = 'huh' //$('#random key/value pair');

var data = { this: "current execution context of a function", key2: "value2", 
        key3: "value3" };

function pickRandom(data) {
  var result;
  var count = 0;
  for (var prop in data)
    if (Math.random() <1/++count)
    result = prop;
    return result;
    console.log(result);
}






});





//need flashcard material - array of key/values pairs? (front & back)
//randomly select from array to present set number of cards to user
//user can edit
//user can delete
//user can add

// jquery onclick to flip card, reveal answer
// -put in actual JS knowledges
