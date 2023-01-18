const genreButtons = document.querySelectorAll('.genre-button');
const filmsContainer = document.querySelector('.films');

genreButtons.forEach(button => {
  button.addEventListener('click', event => {
    const genre = event.target.dataset.genre;
    // code to fetch films based on genre from a database or API
    // and display them in the filmsContainer element
  });
});
