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

// ! Outputs:
const error = document.querySelector("header p");
const moviesOutput = document.querySelector(".movie-container");

// ! veränderbare Variable für das array:
// damit die Suchergebnisse bzw. sortierten Filme auch angezeigt werden können
let allMovies = movies;

// ! jeden Film in einem eigenen Div ausgeben:
// const displayMovies = movies.map((movieInfo) => {
//   return (moviesOutput.innerHTML += `<div>
//     <h2>${movieInfo[0]}</h2>
//     <p>${movieInfo[1]}</p>
//     <h3>${movieInfo[2]}</h3>
//     <p>${movieInfo[3]}</p>
//     <p>${movieInfo[4].map((genre) => genre).join(`<br>`)}</p>
//     <p>${movieInfo[5]}</p>
//     </div>`);
// });

//* das gleiche wie oben nur als Funktion, damit wiederverwendbar auch für die Suchergebnisse bzw. sortierten Filme:
function showMovies(array) {
  array.forEach((movieInfo) => {
    return (moviesOutput.innerHTML += `<div>
          <h2>${movieInfo[0]}</h2>
          <p>${movieInfo[1]}</p>
          <h3>${movieInfo[2]}</h3>
          <p>${movieInfo[3]}</p>
          <p>${movieInfo[4].join(`<br>`)}</p>
          <p>${movieInfo[5]}</p>
          </div>`);
  });
}
showMovies(allMovies);

// # noch eine Fehlermeldung einbauen
// ! Filtern nach Suchwort
function search(event) {
  event.preventDefault();
  // input-Value auslesen in Kleinbuchstaben:
  const searchInput = document
    .querySelector("input[type='text']")
    .value.toLowerCase();

  // Suchfunktion, durchsucht jeden Index der Arrays im Array:
  allMovies = movies.filter(
    (title) =>
      title[0].toLowerCase().includes(searchInput) || // Titel
      title[1].includes(searchInput) || // Jahr
      title[2].toLowerCase().includes(searchInput) || // RegisseurIn
      title[3].toLowerCase().includes(searchInput) || // Dauer
      title[4].join().toLowerCase().includes(searchInput) || // Genre (nested array)
      title[5].includes(searchInput) // Rating
  );
  // die vorherigen Inhalte zuerst löschen:
  moviesOutput.innerHTML = "";
  // dann die gefilterten Filme mittels der showMovies-Funktion anzeigen:
  showMovies(allMovies);
}

// ! Sortieren nach year up
function sortYearUp() {
  allMovies.sort((movie1, movie2) => {
    return movie1[1] - movie2[1];
  });
  moviesOutput.innerHTML = "";
  showMovies(allMovies);
}

// ! Sortieren nach year down
function sortYearDown() {
  allMovies.sort((movie1, movie2) => {
    return movie2[1] - movie1[1];
  });
  moviesOutput.innerHTML = "";
  showMovies(allMovies);
}

// ! Sortieren nach best rate
function sortBestRate() {
  allMovies.sort((movie1, movie2) => {
    return movie2[5] - movie1[5];
  });
  moviesOutput.innerHTML = "";
  showMovies(allMovies);
}

// ! Sortierung rückgängig machen, zurück zum Urzustand:
function sortOriginal() {
  showMovies(movies);
}
