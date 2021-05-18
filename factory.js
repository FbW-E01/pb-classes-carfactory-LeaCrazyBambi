function Car(make, model, year) {
  this.type = "Car";
  this.make = make;
  this.model = model;
  this.year = year;
}

let audi = new Car("Audi", "AA Cupcake", "2021");
console.log(audi);

let garage = [
  audi,
  new Car("Nata", "Freedom", "1948"),
  new Car("Bird", "Rainbow", "4"),
  new Car("Peace", "Palestine", "2021"),
  new Car("Peace", "Palestine", "2021"),
  new Car("Peace", "Palestine", "2021"),
  new Car("Peace", "Palestine", "2021"),
  new Car("Peace", "Palestine", "2021"),
  new Car("Peace", "Palestine", "2021"),
  new Car("Peace", "Palestine", "2021"),
];

console.log(garage);
