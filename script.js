document.addEventListener('DOMContentLoaded', function() {
  const quotes = [
    { text: "Być albo nie być, oto jest pytanie.", author: "Szekspir" },
    { text: "Nic dwa razy się nie zdarza.", author: "Szymborska" },
    { text: "Człowiek jest jedynym stworzeniem, które odmawia bycia tym, czym jest.", author: "Camus" },
    { text: "Mądry człowiek mówi, bo ma coś do powiedzenia; głupi, bo musi coś powiedzieć.", author: "Platon" },
    { text: "Bez muzyki życie byłoby pomyłką.", author: "Nietzsche" },
    { text: "Życie nie polega na czekaniu aż burza minie, ale na nauczeniu się tańczyć w deszczu.", author: "Shaw" },
    { text: "Wszyscy ludzie są tacy sami; różnią się tylko swoimi zwyczajami.", author: "Konfucjusz" },
   
  ];

  const quoteText = document.getElementById('quoteText');
  const newQuoteBtn = document.getElementById('newQuote');
  const authorSelect = document.getElementById('authorSelect');
  const pageTurnSound = document.getElementById('pageTurnSound');

  function getRandomQuote() {
    const selectedAuthor = authorSelect.value;
    const filteredQuotes = selectedAuthor === 'all' ? quotes : quotes.filter(q => q.author === selectedAuthor);
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    return filteredQuotes[randomIndex];
  }

  function displayQuote() {
    const quote = getRandomQuote();
    quoteText.classList.remove('animate-quote');
    void quoteText.offsetWidth;
    quoteText.innerHTML = `„${quote.text}” — <strong>${quote.author}</strong>`;
    quoteText.classList.add('animate-quote');
    pageTurnSound.play();
  }

  newQuoteBtn.addEventListener('click', displayQuote);
});
