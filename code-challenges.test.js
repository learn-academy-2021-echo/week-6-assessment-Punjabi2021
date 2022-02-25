// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// a describe method that lists the name of the function OR naming of the particular test.
describe("capName", () => {
  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("capName will capitalize the name and join the occupation and return the sentence in an array.", () => {
    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" },
    ];

    expect(capName(people)).toEqual([
      "Ford Prefect is a hitchhiker.",
      "Zaphod Beeblebrox is president of the galaxy.",
      "Arthur Dent is a radio employee.",
    ]);
  });
});

// b) Create the function that makes the test pass.

function capitalizeFirstLetter(string) {
  returncstring.charAt(0).toUpperCase() + string.slice(1).join;}

return capitalizeFirstLetter("foo"));

--------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false];
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true];
// Expected output: [ 2, 1, -1 ]

describe("mixData", () => {
  it("mixData will drop the words in an array the name and only retun numbers.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false];

    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true];

    expect(mixData(hodgepodge1)).toEqual([ 2, 0, -1, 0 ]);
    expect(mixData(hodgepodge2)).toEqual([ 2, 1, -1 ])
// b) Create the function that makes the test pass.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false];

const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true];
const mixData = mixData.map(function(%3).replace(/\/g,’’);{
    return array
});
--------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.



// a describe method that lists the name of the function OR naming of the particular test.

describe("cubed", () => {
  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("the sum of the array will be multiplied ", () => {
    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.

    const cubeAndSum1 = [2, 3, 4];
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10];
    // Expected output: 1125
    expect(cubed(cubeAndSum1)).toEqual(99);
    expect(cubed(cubeAndSum2)).toEqual(1125);
  });
});

// b) Create the function that makes the test pass.
function square(array) {
number.map((element) => element * element);
return square);
