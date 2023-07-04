//Write a “person” class to hold all the details.
class Person {//create Person class
  constructor(name, age, gender, occupation) {//create a constructor for class Person with name, age, gender, and occupation variables
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.occupation = occupation;
  }
}

var person = new Person("Anandh", 32, "Male", "Software Engineer"); //create an instance for class Person
console.log("Name: "+person.name+"\nAge: "+person.age+"\nGender: "+person.gender+"\nOccupation: "+person.occupation);// display the results


