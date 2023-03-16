// Наведіть кілька прикладів, коли доречно використовувати в коді конструкцію try...catch.
// Відпрацювання випадків коли дані не прийдуть, або прийдуть помилков. + можна вберегти код від падіння на помилці, він піде далі

const books = [
    { 
      author: "Люсі Фолі",
      name: "Список запрошених",
      price: 70 
    }, 
    {
     author: "Сюзанна Кларк",
     name: "Джонатан Стрейндж і м-р Норрелл",
    }, 
    { 
      name: "Дизайн. Книга для недизайнерів.",
      price: 70
    }, 
    { 
      author: "Алан Мур",
      name: "Неономікон",
      price: 70
    }, 
    {
     author: "Террі Пратчетт",
     name: "Рухомі картинки",
     price: 40
    },
    {
     author: "Анґус Гайленд",
     name: "Коти в мистецтві",
    }
  ];

const rightKeys = ["author", "name", "price"];

  function generateList(data, element) {
    const list = document.createElement("ul");
  
    data.forEach(item => {
      const hasAllKeys = rightKeys.every(key => item.hasOwnProperty(key));
      if (hasAllKeys) {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.author}, ${item.name}, ${item.price} грн`;
        list.appendChild(listItem);
      } else {
        const missingKey = rightKeys.find(key => !item.hasOwnProperty(key));
        console.error(`Помилка: відсутня властивість "${missingKey}" у об'єкті ${JSON.stringify(item)}`);
      }
    });
  
    element.appendChild(list);
  }
  
const rootElement = document.getElementById("root");
generateList(books, rootElement);
  
  