document.addEventListener('DOMContentLoaded', function() {
  const quotes = [
    { text: "Tyle o sobie wiemy, ile nas sprawdzono.", author: "Wisława Szymborska", category: "Literatura", info: "Polska poetka, laureatka Nobla." },
    { text: "Być albo nie być – oto jest pytanie.", author: "William Shakespeare", category: "Literatura", info: "Angielski dramatopisarz i poeta." },
    { text: "Człowiek jest jedynym stworzeniem, które odmawia bycia tym, czym jest.", author: "Albert Camus", category: "Filozofia", info: "Francuski filozof egzystencjalista." },
    { text: "Wiem, że nic nie wiem.", author: "Sokrates", category: "Filozofia", info: "Grecki filozof, twórca metody sokratycznej." },
    { text: "Nie bój się doskonałości – i tak jej nie osiągniesz.", author: "Salvador Dalí", category: "Sztuka", info: "Hiszpański malarz surrealistyczny." },
    { text: "Wyobraźnia jest ważniejsza od wiedzy.", author: "Albert Einstein", category: "Nauka", info: "Fizyk teoretyczny, twórca teorii względności." },
    { text: "Największą chwałą nie jest nigdy nie upaść, ale powstać za każdym razem, gdy upadamy.", author: "Konfucjusz", category: "Filozofia", info: "Chiński filozof i mędrzec." },
    { text: "Kto walczy z potworami, winien baczyć, by samemu nie stać się potworem.", author: "Friedrich Nietzsche", category: "Filozofia", info: "Niemiecki filozof i poeta." },
    { text: "Życie bez muzyki byłoby pomyłką.", author: "Friedrich Nietzsche", category: "Filozofia", info: "Niemiecki filozof i poeta." },
    { text: "Cokolwiek możesz zrobić lub marzysz, że możesz – zacznij to.", author: "Johann Wolfgang von Goethe", category: "Literatura", info: "Niemiecki pisarz i poeta." },
    // ... jeszcze 40 cytatów! ✨
  ];

  const quoteText = document.getElementById('quoteText');
  const quoteAuthor = document.getElementById('quoteAuthor');
  const quoteInfo = document.getElementById('quoteInfo');
  const newQuoteBtn = document.getElementById('newQuote');
  const categorySelect = document.getElementById('categorySelect');
  const pageSound = document.getElementById('pageSound');

  function getRandomQuote(filteredQuotes) {
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    return filteredQuotes[randomIndex];
  }

  function displayQuote() {
    pageSound.play();

    const selectedCategory = categorySelect.value;
    const filteredQuotes = selectedCategory === 'all' ? quotes : quotes.filter(q => q.category === selectedCategory);

    const randomQuote = getRandomQuote(filteredQuotes);

    quoteText.textContent = `"${randomQuote.text}"`;
    quoteAuthor.textContent = `— ${randomQuote.author}`;
    quoteInfo.textContent = `(${randomQuote.category}, ${randomQuote.info})`;
  }

  newQuoteBtn.addEventListener('click', displayQuote);
});

