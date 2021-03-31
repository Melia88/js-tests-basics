// Dog Challenges

// Add the following properties to the dog object: name, legs, tail, and likes. 
// The name property should have a value that is a string, the legs property 
// should have a value that is a number, the tail property should have a 
// boolean value, and the likes property should have a value that is an 
// array.Inside the array, include at least 4 values.
let goodDoggo = {
  //your code in here
  name: "Doggo",
  legs: 4,
  tail: true,
  likes: ['treats', 'ball', 'walks', 'bones'],
}


// write a function that returns the value of the legs property on your dog object using dot notation.
function howManyLegs() {
  // your code inside here
  // don't forget to use the return keyword
  return goodDoggo.legs
  // to acces the vales in the property likes w dot notation goodDoggo.likes[index number for what u want]
}

// Cat Challenges

let cat = {
  name: "Pickles",
  legs: 4,
  whiskers: true,
  likes: ["napping", "playing", "running at 2:00am", "pets", "stealing food off the counter"]
}

// Write a function that uses bracket notation to change the cat's name from 
// "Pickles" to "Kevin".Then use either dot or bracket notation to return 
// the value of the name property.
function renameCat() {
  // your code inside here
   cat['name'] = 'Kevin'
  return cat.name
  // says cat at prop name = Kevin. replaces Pickles
}

// Create a function that uses dot or bracket notation to create a property 
// on the cat object called "color" and assign it to any color you'd like. 
// Then return the value of the color property.

function colorTheCat() {
  // your code inside here
  cat.color = 'pink'
  // to add a prop to an existing object(cat) pretend the prop(color) already exists and assign it (=) a value
  return cat['color']
  // now will return the value for color which is pink
}

// Delete the whiskers property off of the cat object. You may use either dot or bracket notation.

delete cat.whiskers

// Write a function that uses dot AND bracket notation to access and return the 
// value of the fourth item in the likes array("pets"). 
// Example: objectName.property[indexNumber]

function returnIndex(cat) {
  // your code inside here
   return cat.likes[3]
//   to acces the values insinde the ['array'] in the property likes use cat.likes[index number for what u want] used dot notation & bracket notation
}