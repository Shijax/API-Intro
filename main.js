const badJoke = () => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: 'https://icanhazdadjoke.com/',
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
  
  const tellJoke = () => {
    badJoke()
      .then(joke => {
        $('#joke').append(`<h2 style="color: purple;">${joke.joke}</h2>`);
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  tellJoke();