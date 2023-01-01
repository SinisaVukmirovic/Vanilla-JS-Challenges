// DOCS: https://dummyjson.com/docs/
const BASEURL = "https://dummyjson.com";

// use the /products endpoint for #1–4

// 1. Create a fetch function called "customFetch" that hits the "https://dummyjson.com/products" endpoint and console logs and returns the data.

// const customFetch = async () => {
//     const results = await fetch(`${BASEURL}/products`);
//     const data = await results.json();
    
//     console.log(data);
//     return data;
// }

// 2. Update the "customFetch" function to take in a endpoint and handle errors (including a wrong endpoint)

// const customFetch = async (endpoint) => {
//     try {
//         const results = await fetch(`${BASEURL}/${endpoint}`);
//         // console.log(results)
//         if (!results.ok) {
//             throw new Error(`${results.status}: ${results.statusText}`);
//         }
//         const data = await results.json();
    
//         console.log(data);
//         return data;
//     } catch(err) {
//         console.error(err.message);
//     }
// }

// customFetch('sdfsdfsdf');
// customFetch('products');

// 3. Create a function called "getProducts" that returns all the products in an array. Then list all the products in the DOM in an unordered list.

// const getProducts = async () => {
//     const results = await fetch(`${BASEURL}/products`);
//     const data = await results.json();
//     // console.log(data.products);
//     return data.products;
// }

// const addUl = async () => {
//     const ul = document.createElement('ul');
//     const products = await getProducts();
//     // console.log(products);
//     products.map(prod => {
//         const li = document.createElement('li');
//         li.innerText = prod.title;
//         ul.append(li);
//     });
//     document.querySelector('body').append(ul);
// }

// addUl();


// 4. Update the "customFetch" function to handle a delete, add, or update a request.
/*
- Use the updated function to update and then delete a product by it’s ID. (FYI, "https://dummyjson.com/products/1" will access the product with the id of 1)
- Use the updated function to POST a new product to the list of products. (FYI, "https://dummyjson.com/products/add" will allow POST requests)
*/
const customFetch = async (endpoint, options) => {
    try {
        const results = await fetch(`${BASEURL}/${endpoint}`, {...options});
        // console.log(results)
        if (!results.ok) {
            throw new Error(`${results.status}: ${results.statusText}`);
        }
        const data = await results.json();
    
        console.log(data);
        return data;
    } catch(err) {
        console.error(err.message);
    }
}

// customFetch('products/1', {
//     method: 'DELETE'
// });

// customFetch('products/1', {
//     method: 'PUT',
//     body: JSON.stringify({'title': 'UPDATED!'}),
//     headers: { 'Content-type': 'application/json' }
// });

customFetch('products/add', {
    method: 'POST',
    body: JSON.stringify({'title': 'NEW ITEM!'}),
    headers: { 'Content-type': 'application/json' }
});

// use the /users, /posts/, and /comments endpoints for #5–7
// 5. Create a function called "getFilteredUsers" that console logs and returns all the users who are 21 years old in a new array of objects in the following structure:
/*
[
  {
    name: "John Doe", (containing first and last name)
    age: 21,
    email: "email@email.com",
  },
  ...
]
See help documentation for help at https://dummyjson.com/docs/users. You can use the "customFetch" function you created earlier.
*/

// 6. Alter the getFilteredUsers function to return all filtered users in an object with the id as the key and the user object as the value. (See help documentation for help at https://dummyjson.com/docs/users)


// 7. Create a new function called "getCommentsOnUsersPosts" that takes in a user id and returns all comments on any post by that user in an array of objects. Each object should contain two properties, postTitle and comments. Comments should contain the userID of the commentor and the text. Bonus points for filtering out posts without comments. Sample below:

/*
[
  {
    postTitle: "Post Title",
    comments: [
      {
      userId: 1,
      text: "Comment Text"
      },
      {
      userId: 2,
      text: "Comment Again"
      }
    ]
  },
  ...
]
See https://dummyjson.com/docs/users, https://dummyjson.com/docs/posts, and https://dummyjson.com/docs/comments for help.
*/