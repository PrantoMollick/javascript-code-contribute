function Person() {
    this.age = 30;
    this.name = 'Max';
    this.greet = function() {
        console.log('Hi, I am ' + this.name + ' and i am ' + this.age + ' years old.');
    };
}


const person = new Person();
person.greet();