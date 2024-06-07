console.log('JavaScript code loaded');
const getQuoteButton = document.getElementById('getQuote');
const quoteTypeSelect = document.getElementById('quoteType');
const quoteDiv = document.getElementById('quote');

getQuoteButton.addEventListener('click', () => {
  let apiEndpoint;
  const quoteType = quoteTypeSelect.value;

  if (quoteType === 'love') {
    apiEndpoint = 'https://api.quotable.io/random?tags=love';
  } 
   else if (quoteType === 'family') {
    apiEndpoint = 'https://api.quotable.io/random?tags=family';
  } else if (quoteType === 'happy') {
    apiEndpoint = 'https://api.quotable.io/random?tags=happiness';
  } else if (quoteType === 'quoteOfDay') {
    apiEndpoint = 'https://api.quotable.io/random?tags=imagination';
  } else if (quoteType === 'motivational') {
    apiEndpoint = 'https://api.quotable.io/random?tags=motivational';
  } else if (quoteType === 'friendship') {
    apiEndpoint = 'https://api.quotable.io/random?tags=friendship';
  }
  else if (quoteType === 'imagination') {
    apiEndpoint = 'https://api.quotable.io/random?tags=imagination';
  }
  else if (quoteType === 'funny') {
    apiEndpoint = 'https://v2.jokeapi.dev/joke/Any?type=funny';
  }

  fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {
      if (quoteType === 'funny') {
        const joke = data.setup ? `${data.setup} - ${data.delivery}` : data.joke;
        quoteDiv.innerHTML = `<p>${joke}</p>`;
      } else {
        const quote = data.content;
        const author = data.author;
        quoteDiv.innerHTML = `<p>${quote} - ${author}</p>`;
      }
    })
    .catch(error => console.error(error));
});