"use strict";

class Vehicle {
  constructor(dimensions, brand, model, manufactureDate) {
    this.dimensions = dimensions;
    this.brand = brand;
    this.model = model;
    this.manufactureDate = manufactureDate;
  }
  getMaxSize() {
    for(let value in this.dimensions){
      if(Number.isNaN(this.dimensions[value]) || !Number.isInteger(this.dimensions[value]) || typeof this.dimensions[value] !== 'number'){
        throw new TypeError('must be Integer Number')
      }
    }
    for(let value in this.dimensions){
      if(this.dimensions[value] < 0){
        throw new TypeError('value must be over 0mm')
      }
    }
     const { length, width, height } = this.dimensions;
    return `length: ${length}mm,  width: ${width}mm,  height: ${height}mm`;
  }
  getAge() {
    return `${new Date().getFullYear() - this.manufactureDate} years`;
  }
}

class PassengerTransprot extends Vehicle {
  constructor(
    dimensions,
    brand,
    model,
    manufactureDate,
    passengersLimit,
    passengersCount
  ) {
    super(dimensions, brand, model, manufactureDate);
    this.passengersLimit = passengersLimit;
    this.passengersCount = passengersCount;
  }
  get addPassenger() {
    this.passengersCount++;
    this.passengersLimit >= this.passengersCount;
  }
}

class FreightTransport extends Vehicle {
  constructor(dimensions, brand, model, manufactureDate, capacity) {
    super(dimensions, brand, model, manufactureDate);
    this.capacity = capacity;
  }
  checkLoadingPossibility(weight) {
    return this.capacity >= weight;
  }
}



