document.addEventListener('DOMContentLoaded', function() {
  const quotes = [
    { text: "Być albo nie być – oto jest pytanie.", author: "Szekspir" },
    { text: "Człowiek jest tyle wart, ile może dać drugiemu człowiekowi.", author: "Szymborska" },
    { text: "Nie ma miłości bez ryzyka utraty.", author: "Camus" },
    { text: "Wiem, że nic nie wiem.", author: "Sokrates" },
    { text: "Człowiek jest miarą wszechrzeczy.", author: "Protagoras" },
    { text: "Wiedza jest potęgą.", author: "Francis Bacon" },
    { text: "Życie bez badań nie jest warte życia.", author: "Sokrates" },
    { text: "Człowiek rodzi się wolny, a wszędzie jest w kajdanach.", author: "Jean-Jacques Rousseau" },
    { text: "Myślę, więc jestem.", author: "René Descartes" },
    { text: "Prawdziwe szczęście kosztuje niewiele.", author: "Sokrates" },
    { text: "Największe rzeczy powstają z cierpliwości.", author: "Leonardo da Vinci" },
    { text: "Jesteśmy tym, co w swoim życiu powtarzamy.", author: "Arystoteles" },
    { text: "Niebo gwiaździste nade mną, prawo moralne we mnie.", author: "Kant" },
    { text: "Nie bój się powolnego rozwoju, obawiaj się bezruchu.", author: "Konfucjusz" },
    { text: "Ten, kto zwycięża samego siebie, jest największym zwycięzcą.", author: "Platon" },
    { text: "Człowiek powinien uczyć się całe życie.", author: "Seneka" },
    { text: "Czasami serce widzi to, co jest niewidoczne dla oczu.", author: "H. Jackson Brown Jr." },
    { text: "Największą mądrością jest znać samego siebie.", author: "Sokrates" },
    { text: "Miłość jest odpowiedzią, niezależnie od pytania.", author: "Camus" },
    { text: "Prawda wyzwala człowieka.", author: "Szymborska" },
    { text: "Życie nie jest problemem do rozwiązania, tylko rzeczywistością do doświadczenia.", author: "Kierkegaard" },
    { text: "Jesteśmy jak motyle, które żyją dzień i myślą, że to wieczność.", author: "Sagan" },
    { text: "Niebo jest granicą.", author: "Amelia Earhart" },
    { text: "Gdzie jest wola, tam jest droga.", author: "Winston Churchill" },
    { text: "Szczęście to jedyna rzecz, która się mnoży, gdy się ją dzieli.", author: "Albert Schweitzer" },
    { text: "Trzeba wiele wytrwałości, aby zdobyć mądrość.", author: "Sofokles" },
    { text: "Nic wielkiego nie zostało osiągnięte bez entuzjazmu.", author: "Ralph Waldo Emerson" },
    { text: "Nie oceniaj każdego dnia po zbiorach, które zebrałeś, ale po nasionach, które posiałeś.", author: "Robert Louis Stevenson" },
    { text: "Wszyscy jesteśmy geniuszami, ale jeśli oceniasz rybę po jej zdolności wspinania się na drzewo, całe życie będzie wierzyć, że jest głupia.", author: "Albert Einstein" },
    { text: "W ciszy odnajdujemy prawdę.", author: "Laozi" },
    { text: "Ten, kto przestaje się uczyć, jest stary, niezależnie od tego, czy ma dwadzieścia czy osiemdziesiąt lat.", author: "Henry Ford" },
    { text: "Nie można odkryć nowych oceanów, jeśli nie ma się odwagi stracić z oczu brzegu.", author: "André Gide" },
    { text: "Nie ma rzeczy niemożliwych, są tylko rzeczy trudne do zrealizowania.", author: "Szymborska" },
    { text: "Człowiek jest tym, co je.", author: "Ludwig Feuerbach" },
    { text: "Nie można być szczęśliwym bez miłości.", author: "Szekspir" },
    { text: "Nie ma nic bardziej praktycznego niż dobra teoria.", author: "Kant" },
    { text: "Człowiek jest istotą społeczną.", author: "Arystoteles" },
    { text: "Nie ma nic bardziej niebezpiecznego niż człowiek, który nie ma nic do stracenia.", author: "Camus" },
    { text: "Mówisz, że kochasz deszcz, a rozkładasz parasolkę, gdy zaczyna padać. Mówisz, że kochasz słońce, a chowasz się w cieniu, gdy zaczyna grzać. Mówisz, że kochasz wiatr, a zamykasz okno, gdy zaczyna wiać. Właśnie dlatego boję się, gdy mówisz, że kochasz mnie.", author: "Szekspir" }
  ];

  const quoteText = document.getElementById('quoteText');
  const newQuoteBtn = document.getElementById('newQuote');
  const authorSelect = document.getElementById('authorSelect');

  function getRandomQuote(author = "all") {
    let filteredQuotes = quotes;
    if (author !== "all") {
      filteredQuotes = quotes.filter(q => 
        q.author.includes(author) || (author === "Inni" && !["Szekspir", "Szymborska", "Camus", "Sokrates"].includes(q.author))
      );
    }
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    return filteredQuotes[randomIndex];
  }

  function showQuote() {
    const selectedAuthor = authorSelect.value;
    const quote = getRandomQuote(selectedAuthor);

    quoteText.style.opacity = 0;

    setTimeout(() => {
      quoteText.textContent = `"${quote.text}" — ${quote.author}`;
      quoteText.style.opacity = 1;
    }, 400);
  }

  newQuoteBtn.addEventListener('click', showQuote);
  authorSelect.addEventListener('change', showQuote);
});
