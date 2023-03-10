import {peeps, comments} from './data.js'

// EASIER CHALLENGES (using the peeps array) //

// 1. Count the number of people in the people array.
// const numberOfPeeps = peeps.length;
// console.log('number of people:', numberOfPeeps);
// console.log('=================================');

// // 2. List full names of people in a new array.
// const fullNamesArray = peeps.map(p => `${p.name.first} ${p.name.last}`);
// console.log('full names of people:', fullNamesArray);
// console.log('=================================');

// // 3. Return “true” if everyone is older than 24.
// console.log('older than 24:', peeps.every(p => p.age > 24));
// console.log('=================================');

// // 4. Return “true” if at least one person is younger than 26.
// console.log('at least one person is younger than 26:', peeps.some(p => p.age < 26));
// console.log('=================================');

// // 5. Return a new array called “young peeps” of all peeps less than 30.
// const youngPeeps = peeps.filter(p => p.age < 30);
// console.log('peeps less than 30:', youngPeeps);
// console.log('=================================');

// // 6. Sort the peeps by age from oldest to youngest in an array called “sortedPeeps”.
// const sortedPeeps = peeps.sort((a, b) => b.age - a.age);
// console.log('Sorted Peeps', sortedPeeps);
// console.log('=================================');

// // 7. Create a new array called “firstNamePeeps” with only the first names of the peeps.
// const firstNamePeeps = peeps.map(P => P.name.first);
// console.log('first names of the peeps', firstNamePeeps);
// console.log('=================================');

// HARDER CHALLENGES (using the comments object and peeps array) //

// 1. List all the comments in an array of strings called “commentsArray”
const commentsArray = Object.values(comments).map(com => com.text);

console.log('List all the comments', commentsArray);
console.log('======================================================');

// 2. Return all comments with the word “love” in the comment in a new array called “loveComments”
const loveComments = Object.values(comments).filter(com => com.text.includes('love'));

console.log('comments with the word “love”', loveComments);
console.log('======================================================');

// 3. List all the comments in an array of strings called “sortedCommentsArray" from lowest rating to highest rating. Ignore comments without a rating.
const sortedCommentsArray = Object.values(comments)
    .filter(com => com.rating)
    .sort((a, b) => a.rating - b.rating);

console.log('Comments from lowest rating to highest', sortedCommentsArray);
console.log('======================================================');

// 4. Return a new object called “commentObj” with the comment id as a key and the comment text as the value.
const commentObj = Object.entries(comments).reduce((acc, com) => ({...acc, [com[0]]: com[1].text}), {});
    // const [key, value] = com;
    // return {...acc, [key]: value.text};
    // return {...acc, [com[0]]: com[1].text};
// }, {});
console.log('Comment id as a key and the comment text as the value', commentObj);
console.log('======================================================');

// 5. Return a new object called “groupedRatings” with the rating as a key and an array of comments with that rating as the value. Ignore comments without a rating.
const groupedRatings = Object.values(comments).reduce((acc, com) => {
    if (!com.rating) return acc;

    const key = com.rating;
    const currentGroup = acc[key] || [];

    return {...acc, [key]: [...currentGroup, com]};
}, {});

console.log('rating as a key and an array of comments with that rating as the value', groupedRatings);
console.log('======================================================');

// 6. Return the average rating of all comments.
const averageRating = Object.values(comments).reduce((acc, com) => {
    return acc += com.rating || 0;
}, 0) / Object.values(comments).filter(c => c.rating).length;

console.log('Average rating:', averageRating);
console.log('======================================================');

// 7. Group all comments by the user who made the comment. Return a new object called “groupedPeepComments” with the user’s first and last name as a string key. The value of each object should be an array of comment objects by the person.
const groupedPeepComments = Object.values(comments).reduce((acc, com) => {
    const peep = peeps.find(p => p.id === com.userId);
    const key = `${peep.name.first} ${peep.name.last}`;
    const currentGroup = acc[key] || [];
    return {...acc, [key]: [...currentGroup, com]}
}, {});

console.log('grouped Peep Comments', groupedPeepComments);
console.log('======================================================');