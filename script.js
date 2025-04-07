document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
      "Cytat 1: „Człowiek jest miarą wszechrzeczy.” – Protagoras",
      "Cytat 2: „Wiedza jest potęgą.” – Francis Bacon",
      "Cytat 3: „Człowiek rodzi się wolny, a wszędzie jest w kajdanach.” – Jean-Jacques Rousseau",
      "Cytat 4: „Myśl, więc jestem.” – René Descartes"
    ];
  
    const quoteText = document.getElementById('quoteText');
    const newQuoteBtn = document.getElementById('newQuote');
  
    function getRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    }
  
    newQuoteBtn.addEventListener('click', function() {
      quoteText.textContent = getRandomQuote();
    });
  });
  