asyncOperation()
.then((result) => {
// Handle result
return anotherAsyncOpera􀆟on(result);
})
.then((result) => {
// Handle result of anotherAsyncOpera􀆟on
})
.catch((error) => {
// Handle any errors
});