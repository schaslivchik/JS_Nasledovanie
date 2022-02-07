"use strict";

class Vehicle {
  constructor(dimensions, brand, model, manufactureDate) {
    this.dimensions = dimensions;
    this.brand = brand;
    this.model = model;
    this.manufactureDate = manufactureDate;
  }
  getMaxSize() {
    for (let value in this.dimensions) {
      if (
        Number.isNaN(this.dimensions[value]) ||
        !Number.isInteger(this.dimensions[value]) ||
        typeof this.dimensions[value] !== "number"
      ) {
        throw new TypeError("must be Integer Number");
      }
    }
    for (let value in this.dimensions) {
      if (this.dimensions[value] < 0) {
        throw new TypeError("value must be over 0mm");
      }
    }
    const { length, width, height } = this.dimensions;
    return `length: ${length}mm,  width: ${width}mm,  height: ${height}mm`;
  }
  getAge() {
    return `${
      new Date().getFullYear() - this.manufactureDate.getFullYear()
    } years`;
  }
  set manufactureDate(value) {
    if (!(value instanceof Date)) {
      throw new Error("year must be instans of Date");
    }
    this._manufactureDate = value;
  }
  get manufactureDate() {
    return this._manufactureDate;
  }
  set model(value) {
    if (typeof value !== "string") {
      throw new TypeError("model must be string");
    }
    this._model = value;
  }
  get model() {
    return this._model;
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
    return this.passengersLimit >= this.passengersCount;
  }

  set passengersLimit(value) {
    if (
      typeof value !== "number" ||
      Number.isNaN(value) ||
      !Number.isInteger(value)
    ) {
      throw new TypeError("passengersLimit  must be integer number");
    }
    if (value < 0) {
      throw new RangeError("value must be over 0");
    }
    this._passengersLimit = value;
  }
  get passengersLimit() {
    return this._passengersLimit;
  }

  set passengersCount(value) {
    if (
      typeof value !== "number" ||
      Number.isNaN(value) ||
      !Number.isInteger(value)
    ) {
      throw new TypeError("number of passengers must be integer number");
    }
    if (value < 0 || value > this.passengersLimit) {
      throw new RangeError(
        "value must be over 0 and passengers must be lower then seats on vehicles"
      );
    }
    this._passengersCount = value;
  }
  get passengersCount() {
    return this._passengersCount;
  }
}

class FreightTransport extends Vehicle {
  constructor(dimensions, brand, model, manufactureDate, capacity) {
    super(dimensions, brand, model, manufactureDate);
    this.capacity = capacity;
  }
  checkLoadingPossibility(weight) {
    if(typeof weight!== "number" ||
    Number.isNaN(weight)){
      throw new TypeError("weight must be number");
    }
    if (weight <= 0) {
      throw new RangeError("weight must be greater than 0");
    }
    return this.capacity >= weight;
  }
  set capacity(value) {
    if (
      typeof value !== "number" ||
      Number.isNaN(value) ||
      !Number.isInteger(value)
    ) {
      throw new TypeError("capacity must be integer number");
    }
    if (value < 0) {
      throw new RangeError("value must be over 0");
    }
    this._capacity = value;
  }
  get capacity() {
    return this._capacity;
  }
}
