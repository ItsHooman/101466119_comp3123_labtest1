function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        try {
            const filteredArr = arr.filter(item => typeof item === 'string').map(item => item.toLowerCase());
            resolve(filteredArr);
        } catch (error) {
            reject(error);
        }
    });
}

lowerCaseWords(['Hello', 123, 'WORLD', true, 'JavaScript'])
    .then(result => console.log(result))
    .catch(err => console.log(err));
