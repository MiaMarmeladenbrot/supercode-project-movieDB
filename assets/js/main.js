// - In dieser Übung wirst du eine Movie-Datenbank mithilfe von JavaScript erstellen, sortieren und filtern.
// - Für diese Aufgabe benötigst du möglicherweise die folgenden Methoden:
//     - sort()
//     - filter()
//     - forEach()
//     - map()
// - Das Movie-Array ist vorgegeben (siehe Code-Snippet).

// console.log(movies);

// 1. Formular mit input-text, submit, 3 Auswahlfeldern für Sortierung
// 2. Such-Funktion verknüpfen
// 3. values auslesen
// 4. Klassen bauen, um die Kacheln zu stylen
// 5. Klasse zu jedem Element des array hinzufügen (div mit h2, h3 etc.)
// 6. array im HTML ausgeben
// 7. container im HTML, in den dann alle divs reinlaufen sollen

// ! Outputs
const error = document.querySelector("header p");
const moviesOutput = document.querySelector(".movie-container");

// ! jeden Film in einem eigenen Div ausgeben:
// const displayMovies = movies.map((movieInfo) => {
//     return (moviesOutput.innerHTML += `<div>
//     <h2>${movieInfo[0]}</h2>
//     <p>${movieInfo[1]}</p>
//     <h3>${movieInfo[2]}</h3>
//     <p>${movieInfo[3]}</p>
//     <p>${movieInfo[4].map((genre) => genre).join(`<br>`)}</p>
//     <p>${movieInfo[5]}</p>
//     </div>`);
//   });

const displayMovies = movies.map((movieInfo) => {
  return (moviesOutput.innerHTML += `<div>
  <h2>${movieInfo[0]}</h2>
  <p>${movieInfo[1]}</p>
  <h3>${movieInfo[2]}</h3>
  <p>${movieInfo[3]}</p>
  <p>${movieInfo[4].map((genre) => genre).join(`<br>`)}</p>
  <p>${movieInfo[5]}</p>
  </div>`);
});

// ! Filtern nach Suchwort

function search(event) {
  event.preventDefault();
  const searchInput = document.querySelector("input[type='text']").value;
  const moviesLowerCase = movies.toLowerCase();
  console.log(moviesLowerCase);

  const filteredMovies = movies.filter((title) => {
    return title.includes(searchInput);
  });
  console.log(filteredMovies);

  // nur gefilterte Filme dann anzeigen mit displayMovies(filteredMovies???)
}

// ! Sortieren nach year up, year down, best rate
