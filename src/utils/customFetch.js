const { data } = require('./products');

let is_ok = false;

const customFetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (is_ok) {
                resolve(data);
            } else {
                reject("KO");
            }
        }, 2000);
    })
}

export default customFetch;