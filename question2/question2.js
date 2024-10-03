// Method to resolve after 500ms
function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolved after 500ms");
        }, 500);
    });
}

function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Rejected after 500ms");
        }, 500);
    });
}

resolvedPromise()
    .then(message => console.log(message))
    .catch(error => console.log(error));

rejectedPromise()
    .then(message => console.log(message))
    .catch(error => console.log(error));
