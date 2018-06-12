var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if ( typeof a === 'number' && typeof b === 'number' ) {
                resolve(a+b);
            } else {
                reject('a and b must be a number');
            }
        }, 1500);
    });
};

asyncAdd(1, 'a').then((result) => {
    console.log('Sum is:', result);
    return asyncAdd(result, 10);
}).then((result2) => {
    console.log('Sum is:', result2);
}).catch((error2) => {
    console.log('Problem 2:', error2);
});

var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked.');
        reject('Unable to fullfil promise')
    }, 2500);
});

// somePromise.then((message) => {
//         console.log('Success:', message);
//     }, (errorMessage) => {
//         console.log('Error:', errorMessage);
//     });

// somePromise.then((message) => {
//         console.log('Success:', message);
//     }).catch((errorMessage) => {
//         console.log('Error:', errorMessage);
//     });