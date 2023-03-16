// успадкування властивостей та методів
// для виклику батьківського конструктору, бо у класів може бути тільки 1 конструктор


//1. Створити клас Employee, у якому будуть такі характеристики - name (ім'я), age (вік), salary (зарплата). Зробіть так, щоб ці характеристики заповнювалися під час створення об'єкта.

class Employee {

    constructor (name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    
//2. Створіть гетери та сеттери для цих властивостей.

get name() {
    return this.name;
  }
  
  set name(name) {
    this.name = name;
  }
  
  get age() {
    return this.age;
  }
  
  set age(age) {
    this.age = age;
  }
  
  get salary() {
    return this.salary;
  }
  
  set salary(salary) {
    this.salary = salary;
  }

} 

//3. Створіть клас Programmer, який успадковуватиметься від класу Employee, і який матиме властивість lang (список мов).

class Programmer extends Employee {

    constructor (name, age, salary, lang) {
        super(name,age,salary);
        this.lang = lang;
    }

    get lang() {
        return this.lang;
    }

    set lang(lang) {
        this.lang = lang;
    }

//4. Для класу Programmer перезапишіть гетер для властивості salary. Нехай він повертає властивість salary, помножену на 3.

    get salary() {
        return this.salary * 3;
    }

}


//5. Створіть кілька екземплярів об'єкта Programmer, виведіть їх у консоль.

const programmer1 = new Programmer('Polina', 26, 500, ['JS']);
const programmer2 = new Programmer('Maksym', 29, 3500, ['C++']);

console.log(programmer1);
console.log(programmer2);