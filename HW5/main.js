class Card {
    constructor({ id, title, body, userId, name, surname, email }) {
      this.id = id;
      this.title = title;
      this.body = body;
      this.userId = userId;
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.element = this.createCard();
      this.deleteButton = this.element.querySelector('.delete-button');
      this.deleteButton.addEventListener('click', () => this.deleteCard());
    }
  
    createCard() {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h2>${this.title}</h2>
        <p>${this.body}</p>
        <div class="card-footer">
          <p>${this.name} ${this.surname} (${this.email})</p>
          <button class="delete-button" data-post-id="${this.id}">Delete</button>
        </div>
      `;
      return card;
    }
  
    deleteCard() {
      fetch(`https://ajax.test-danit.com/api/json/posts/${this.id}`, { method: 'DELETE' })
        .then(() => {
          this.element.remove();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

    
    const newsFeed = document.getElementById('news-feed');
    
    fetch('https://ajax.test-danit.com/api/json/users')
    .then((response) => response.json())
    .then((users) => {
    fetch('https://ajax.test-danit.com/api/json/posts')
    .then((response) => response.json())
    .then((posts) => {
    const userMap = users.reduce((map, user) => {
    map[user.id] = user;
    return map;
    }, {});
    posts.forEach((post) => {
        const user = userMap[post.userId];
        const card = new Card({ ...post, ...user });
        newsFeed.appendChild(card.element);
    });
    })
    .catch((error) => {
    console.error(error);
    });
    })
    .catch((error) => {
    console.error(error);
    });