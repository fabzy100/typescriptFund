// Define the Vehicle interface
interface Vehicle {
  make: string;  // The manufacturer of the vehicle (e.g., Toyota, Ford)
  model: string; // The model of the vehicle (e.g., Corolla, Mustang)
  year: number;  // The year the vehicle was made

  // The start method logs a message and doesn't return anything (void).
  start(): void;
}

// Define the Car class that implements Vehicle interface
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  // Constructor to initialize the make, model, and year
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Implementation of the start method
  start(): void {
    console.log("Car engine started");
  }
}

// Create an instance of the Car class
const myCar = new Car("Toyota", "Corolla Sprinter", 2021);

// Call the start method on the instance
myCar.start();