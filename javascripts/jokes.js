// Begin API Call from ICanHasDadJoke.com
const badJoke = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'https://icanhazdadjoke.com/',
            // Headers Neccessary To Pass API
            headers: {
                accept: 'application/json'
            }
        })
            .done(randomJoke => {
                resolve(randomJoke);
            })
            .fail(error => {
                reject(error);
            });
    });
};
// End API Call from ICanHasDadJoke.com

// Begin Function to Call API and PTD
const tellJoke = () => {
    badJoke()
        .then(joke => {
            $('#joke').append(`<h2 style="color: violet;">${joke.joke}</h2>`);
        })
        .catch(error => {
            console.error(error);
        });
};
// End Function to Call API and PTD

// Export Function
export {
    tellJoke
};