



// Storing data
localStorage.setItem('username', 'john_doe');

// Retrieving data
var username = localStorage.getItem('username');
console.log(username); // Output: john_doe

// Removing data
// localStorage.removeItem('username');

// Clearing local storage
// localStorage.clear();




// // Storing an object
// var user = { name: 'John', age: 30 };
// localStorage.setItem('user', JSON.stringify(user));

// // Retrieving and parsing the object
// var storedUser = JSON.parse(localStorage.getItem('user'));
// console.log(storedUser.name); // Output: John
