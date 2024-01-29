///1///

var fruits = ['apple' , 'banana' , 'orange'];
console.log(fruits)

fruits.shift();
console.log(fruits)

fruits.push("grape");

fruits[1] = "pear";

console.log(fruits)

///2///

const person = {
    name : "John",
    age: 30,
    city: "New York"
}
console.log(person)

console.log(person.name)

delete person["age"];
console.log(person)

person["job"] = "Engineer";
console.log(person)

person["city"] = "San Francisco";
console.log(person)


///3///

var car =[];
car.push({
    make: "toyota",
    model: "camry",
    year: 2018
});
car.push({
    make: "toyota",
    model: "camry",
    year: 2018
});
car.push({
    make: "toyota",
    model: "camry",
    year: 2018
});
console.log(car);


car.shift();
console.log(car);

car.push({
    make: "honda",
    model: "civic",
    year: 2020
});

car[1]["model"] = "Accord";
console.log(car);