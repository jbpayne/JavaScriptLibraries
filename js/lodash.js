var arr = [1, 4, 5, 12, 55, 24, 69, 13, 5, 8, 12];
var theObj = { "id": 1, "name": "Tom Henry", "state": "KS" };
var arrObj = [
  { "id": 1, "name": "Tom Henry", "state": "TX" },
  { "id": 2, "name": "Sally Newman", "state": "FL" },
  { "id": 3, "name": "Ryan Busch", "state": "CO" },
  { "id": 4, "name": "Brenda Miller", "state": "KS" },
  { "id": 5, "name": "Ed Cage", "state": "NC" },
  { "id": 6, "name": "Will Turner", "state": "KS" },
  { "id": 7, "name": "Dawn Williams", "state": "NC" },
  { "id": 8, "name": "Sean Cunningham", "state": "NC" },
  { "id": 9, "name": "Ted Hardy", "state": "TX" },
  { "id": 10, "name": "Bruce Matthis", "state": "FL" },
  { "id": 11, "name": "Billy Smith", "state": "FL" },
  { "id": 12, "name": "Clara Jarvis", "state": "TX" },
  { "id": 13, "name": "Cindy Fisher", "state": "CO" },
  { "id": 14, "name": "Gino Donovan", "state": "CO" },
  { "id": 15, "name": "Nancy Curtis", "state": "NC" }
];

$(document).ready(function () {

  chunkTest();

// Create arrays with elements:
// 1-20
  rangeAndChunk(1, 21, 1, 10);
// 50-100
  rangeAndChunk(50, 101, 1, 250);
// 1-100, only even
  rangeAndChunk(2, 101, 2, 25);
// 1-100, only odd
  rangeAndChunk(1, 100, 1, 25);
// 1-500, only multiples of 20.
  rangeAndChunk(20, 501, 20, 10);
  
  getCOresidentsNumber();
  getResidentsPerState();
  getLongLastNamePeople();
  printStateCase("lower");
  printStateCase("upper");

});

function chunkTest() {
  console.log("Chunk test");
  _.forEach(newArr, function (value) {
    console.log(value);
  });
  var newArr = _.chunk(arr, 3);
  _.forEach(newArr, arr => {
    console.log(arr);
    arr.forEach(el => console.log(el));
  })
}

// Using the _.range() method, create several new arrays and print out their individual elements.
// Then break them up with the _.chunk() function to create new arrays.

const rangeAndChunk = (start, end, increment, chunk) => {
  _.forEach(_.chunk(_.forEach(_.range(start, end, increment), el => console.log(el)), chunk), arr => console.log(arr));
}

// Using the documentation for the _.filter() function, create a statement that prints the number of
// residents in Colorado.

const getCOresidentsNumber = () => console.log(`Colorado residents = ${_.filter(arrObj, { 'state': 'CO' }).length}`);

// Using the documentation for the _.countBy() function create statements that print out the number
// of residents in each state.

const getResidentsPerState = () => console.log(_.countBy(arrObj, "state"));

// Using the _.filter() function and any necessary string methods, find and display all the people
// who have a last name of 7 or more letters.

const getLongLastNamePeople = () => console.log(`People with last names seven letters or more = ${_.forEach(_.map(_.filter(arrObj, obj => _.split(obj.name, ' ')[1].length >= 7 ), person => person.name), person => person)}`);

// Use the foreach loop and appropriate string function to print the state in all lower case. Then alter
// the function to print it capitalized.

const printStateCase = (lowerOrUpper) => {
  _.forEach(arrObj, obj => console.log(lowerOrUpper == "lower" ? _.toLower(obj.state) : lowerOrUpper == "upper" ? _.toUpper(obj.state) : obj.state));
}

