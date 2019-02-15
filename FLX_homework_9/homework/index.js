const data = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
]

//task 1
 function findTypes() {
   let arg = [];
   for(let i = 0; i < arguments.length; i++) {
     arg[i] = typeof(arguments[i]);
   }
   return arg;
 }
//  console.log(findTypes(null, 5, "hello"));
findTypes(null, 5, "hello");

//task 2
function executeforEach(arr, func) {
  let onEachArray = [];
  for(let i = 0; i < arr.length; i++) {
    onEachArray.push(func(arr[i]));
  }
  return onEachArray;
}
executeforEach([1,2,3], function(el) {
  console.log(el);
});

//task 3
function mapArray(arr, func) {
  return executeforEach(arr, func);
}
// console.log(mapArray([2, 5, 8], function(el){
//   return el + 3;
// }));
mapArray([2, 5, 8], function(el){
  return el + 3;
});

//task 4
function filterArray(arr, func) {
  let transformArray = [];
  executeforEach(arr, function(item) {
    if(func(item)) {
      transformArray.push(item);
    }
  })
  return transformArray;
}
// console.log(filterArray([2, 5, 8], function(el){
//   return el > 3;
// }));
filterArray([2, 5, 8], function(el){
  return el > 3;
})

//task 5
function getAmountOfAdultPeople(arr) {
  let overEighteen = [];
  filterArray(arr, function(item) {
    if(item["age"] > 18) {
      overEighteen.push(item["age"]);
    }
  })
  return overEighteen.length;
}
// console.log(getAmountOfAdultPeople(data));
getAmountOfAdultPeople(data);

//task 6
function getGreenAdultBananaLovers(arr) {
  let peopleNames = [];
  let greenAdultBananaLovers = filterArray(arr, function(item) {
      return item["age"] > 18 && item["favoriteFruit"] === "banana" && item["eyeColor"] === "green";
    })
  mapArray(greenAdultBananaLovers, function(item) {
    return peopleNames.push(item["name"]);
  })
  return peopleNames;
}
// console.log(getGreenAdultBananaLovers(data));
getGreenAdultBananaLovers(data);

//task 7
function keys(obj) {
  let objKeys = [];
  for(let keys in obj) {
    objKeys.push(keys);
  }
  return objKeys;
}
// console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));
keys({keyOne: 1, keyTwo: 2, keyThree: 3})

//task 8
function values(obj) {
  let values = [];
  for(let keyValue in obj) {
    values.push(obj[keyValue]);
  }
  return values;
}
// console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));
values({keyOne: 1, keyTwo: 2, keyThree: 3})

//task 9
const months = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"];

function showFormattedDate(Date) {
  let dayOfMonth = Date.getDate();
  let monthOfYear = months[Date.getMonth()].substring(0,3);
  let fullYear = Date.getFullYear();
  return `Date: ${dayOfMonth} of ${monthOfYear}, ${fullYear}`
}
// console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));
showFormattedDate(new Date('2019-01-27T01:10:00'));

//task 10
function isEvenYear(Date) {
  let year = Date.getFullYear();
  return year % 2 === 0;
}
// console.log(isEvenYear(new Date('2019-01-27T01:10:00')));
isEvenYear(new Date('2019-01-27T01:10:00'));

//task 11
function isEvenMonth(Date) {
  let month = Date.getMonth();
  month++
  return month % 2 === 0;
}
// console.log(isEvenMonth(new Date('2019-02-27T01:10:00')));
isEvenMonth(new Date('2019-02-27T01:10:00'));