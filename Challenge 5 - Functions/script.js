const people = [
	{
		name: "Chris",
		isBlonde: false,
		age: 23,
		favoriteNumbers: [0, 4, 6],
	},
	{
		name: "Carol",
		isBlonde: true,
		favoriteNumbers: [12, 19],
	},
	{
		name: "Nicole",
		age: 15,
		favoriteNumbers: [4, 9],
	},
];

// Highers order functions - are functions that, either, takes in a function as an argument or the one that returns a functions.

// 1. Write your own custom filter method.
//
// Longer description: Write a higher order function returns a new array from the `people` array, but only those who meet your condition. You may not use the built-in `filter` method. Abstract the function to work with any array and condition.
function myFilter(arr, filterFn) {
    let newArr = [];
    for (const item of arr) {
        if (filterFn(item)) {
            newArr.push(item);
        }
    }
    return newArr;
}

const peopleWithAges = myFilter(people, (person) => person.age);
// console.log(peopleWithAges);

// 2. Write your own custom map method.
//
// Longer description: Write a higher order function returns a new array from the `people` array. You may not use the built-in `map` method. Abstract the function to work with any array and condition.
function myMap(arr, mapperFn) {
    let newArr = [];
    for (const item of arr) {
        newArr.push(mapperFn(item));
    }
    return newArr;
}

const peopleNamesInCaps = myMap(people, (person) => person.name.toUpperCase());
// console.log(peopleNamesInCaps);

// 3. Write your own custom reduce method.
//
// Longer description: Write a higher order function returns a single value from the `people` array. You may not use the built-in `reduce` method. Abstract the function to work with any array, condition, and original/return value.
// Bonus: can you add up all numbers in favorite arrays?

// 4. Write your own custom find method.
//
// Longer description: Write a higher order function that returns the first instance of your array that matches your query. You may not use the built-in `find` method. Abstract the function to work with any array and condition.

// 5. Write your own game score tracker that returns a function to track a game's score. Create a few games and track their scores.