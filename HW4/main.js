//AJAX особливо корисний в JS, бо з ним можна отримати доступ до даних з сервера, зберігати дані без перезавантаження сторінки, оновлювати частини сторінки, використовуючи DOM, і купа іншого

function getFilms() {
    fetch('https://ajax.test-danit.com/api/swapi/films')
      .then(response => response.json()) 
      .then(data => {
        const wrapper = document.querySelector('.wrapper');
        data.forEach(film => {
          // Виводимо список 
          const filmDiv = document.createElement('div');
          filmDiv.classList.add('film');
  
          const filmEpisode = document.createElement('div');
          filmEpisode.textContent = `Episode ${film.episodeId}`;
          filmDiv.appendChild(filmEpisode);
  
          const filmTitle = document.createElement('div');
          filmTitle.textContent = film.title;
          filmDiv.appendChild(filmTitle);
  
          const filmDescription = document.createElement('div');
          filmDescription.textContent = film.openingCrawl;
          filmDiv.appendChild(filmDescription);
  
          wrapper.appendChild(filmDiv);
  
          // Отримуємо і виводимо персів
          film.characters.forEach(characterUrl => {
            fetch(characterUrl)
              .then(response => response.json())
              .then(characterData => {
                
                const characterDiv = document.createElement('div');
                characterDiv.classList.add('character');
  
                const characterName = document.createElement('div');
                characterName.textContent = characterData.name;
                characterDiv.appendChild(characterName);
  
                const characterGender = document.createElement('div');
                characterGender.textContent = `Gender: ${characterData.gender}`;
                characterDiv.appendChild(characterGender);
  
                const characterBirthYear = document.createElement('div');
                characterBirthYear.textContent = `Birth Year: ${characterData.birthYear}`;
                characterDiv.appendChild(characterBirthYear);
  
                filmDiv.appendChild(characterDiv);
              });
          });
        });
      })
      .catch(error => console.error(error));
  }
  
  getFilms();
  
  