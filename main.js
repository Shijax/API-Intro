const badJoke = () => {
    return new Promise((resolve, reject) => {
    $.ajax('https://icanhazdadjoke.com/')
        .done((data) => {
            resolve(data);
            console.log(data);
        })
        .fail(error => {
            reject(error);
            console.log(error);
        })
    })
}

badJoke();