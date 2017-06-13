

window.onload = function() {
  var computeButton = document.getElementById("compute_button");
  computeButton.addEventListener("click", function () {
      var name = document.getElementById("name").value;
      var age = document.getElementById("age").value;
      var interests = parseInterests(document.getElementById("interests").value);
      
      var computed = compute(name, age, interests);
      document.getElementById("computed").innerHTML = "<p>"+computed+"</p>";
    });
}

function compute(name, age, interests) {
  var person = {name: name, age: age, interests: interests, pets: []};
  return (describePerson(person));
}

function parseInterests(interests) {
  return interests.split(/,\s*/);
}

var pet_cat = 
{type: "cat", name: "Kallisti"}

var example_person =
{name: "Chris", 
  age: 31, 
  pets: [pet_cat], 
  interests: 
    ["computer science", "vegetarian food", "books"]
}

function stringArrayToString(sa) {
  var s = ""
  for(var i=0; i<sa.length; i++) {
    if(sa.slice(i).length == 1) {
      if(sa.length == 1) { s += sa[i] + "." }
      else{
        s += "and "+ sa[i] +"."
      }
    }
    else {
      s += sa[i] + ", ";
    }
  }
  return s;
}

function describePet(pet) {
  var s = "a "
  s += pet.type;
  s += " named " + pet.name;
  return s;
}

// describePerson(person) expects person to have the following form:
// name: string
// age: int
// interests: array of strings
// pets: array of pets
function describePerson(person) {
  var description = person.name + " is " + person.age + " years old. ";

  if(person.interests.length > 0) {
    var interests_string = stringArrayToString(person.interests);

    description += person.name + " likes " + interests_string + " ";
  }

  var petDescriptions = [];
  for(var i=0; i<person.pets.length; i++) {
    petDescriptions.push(describePet(person.pets[i]));
  }
  var petsDescription = stringArrayToString(petDescriptions);

  if(person.pets.length > 0){ 
    description += person.name + " has " + petsDescription;
  }

  return description;
}


var myNumber = 42;
var hello = "hello";

function randElt(array) {
    
    var ans = array[Math.floor(Math.random()*array.length)];
    return ans;
};

var test_array = [3, 4, 2, 1]

function addone(array) {
  for(var i=0; i<array.length; i++) {
    array[i]++;
  }
}

var filter_test = ["fox", "racoon", "feline", "rabbit", "dog"]

/*
 * filter_starts_with(filter_test, "f") = ["fox", "feline"]
 * filter_starts_with(filter_test, "c") = []
 * */
// 

function filter_starts_with(a, c) {
  var ans = []

  for(var i = 0; i<a.length; i++) {
    var word = a[i]; // a string
    var first_char = word.charAt(0);
    if(first_char == c) {
      ans.push(word);      
    }
  } // end for loop over "a"

  return ans;
}




