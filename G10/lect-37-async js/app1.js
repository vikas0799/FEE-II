let promise = new Promise((resolve, reject) => {
    // Asynchronous opera􀆟on
    if (/ opera􀆟on successful /) {
    resolve("Success");
    } else {
    reject("Error");
    }
    });

    promise.then(
        (result) => {
        // Handle success
        console.log(result);
        },
        (error) => {
        // Handle error
        console.error(error);
        }
        );