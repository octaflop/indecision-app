class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`
    }
    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if (!!this.homeLocation){
      return greeting += ` I am visiting from ${this.homeLocation}.`
    }
    return greeting
  }
}

const traveller = new Traveller('Faris Chebib', 27.8, 'Vancouver');
console.log(traveller.getGreeting());

const anon_traveller = new Traveller();
console.log(anon_traveller.getGreeting());

const me = new Student('Faris Chebib', 27.8, 'Cognitive Science');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());
