// Reading input 

// UI stuff
window.onload = function() {

var computeButton = document.getElementById("compute_button");
computeButton.addEventListener("click", function () {
  var num1 = document.getElementById('number1').value;
  var num2 = document.getElementById('number2').value;
  var computed = num1 * num2;
  document.getElementById('computed').innerHTML = "<pre>"+computed+"</pre>";
});

}

// Objects:

var pet_cat =
{type: ‘cat’, name: ‘Kallisti’}

var example_char =
{name: "Chris",
  age: 31,
  pets: [pet_cat],
  interests: ["computer science", "vegetarian food", "running"]
}

function describeCharacter(c) {

  var desc = "";

  desc += c.name + " is "+ age +" years old ";
  if(c.pets.length > 0) {
   desc += " and has a "+c.pets[0].type+" named "+c.pets[0].name;
  }

}


