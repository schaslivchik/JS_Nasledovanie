"use strict";

const vehicleMaxSize = {
  length: 4258,
  width: 1790,
  height: 1492,
};

const passengerTransprotSize = {
  length: 7340,
  width: 1993,
  height: 3030,
};

const freightTransportSize = {
  length: 7370,
  width: 2180,
  height: 4400,
};

try {
  const vehicle = new Vehicle(
    vehicleMaxSize,
    "Volkswagen",
    "Golf",
    new Date(2016, 0, 12, 12, 34, 23)
  );
  console.group("Метод габаритов и возвраста автомобиля");
  console.log("getMaxSize :>> ", vehicle.getMaxSize());
  console.log("getAge :>> ", vehicle.getAge());
  console.groupEnd();

  //пасажирский транспорт
  const passangerTransport = new PassengerTransprot(
    passengerTransprotSize,
    "Volkswagen",
    "Crafter",
    new Date(2015, 11, 10, 11, 11),
    27,
    26
  );

  console.group("Метод добавления пасажира");
  console.log('passangerTransport.addPassenger :>> ', passangerTransport.addPassenger);
  console.groupEnd();

  //грузовой транспорт
  const freightTransport = new FreightTransport(
    freightTransportSize,
    "Hyundai",
    "Mighty",
    new Date(2012, 11, 10, 11, 10),
    5100
  );
  console.group("Метод проверки погрузки массы")
  console.log('freightTransport.checkLoadingPossibility(5100) ', freightTransport.checkLoadingPossibility(5100));

  console.groupEnd()
} catch (e) {
  if (e instanceof RangeError) {
    console.log(e);
  } else if (e instanceof TypeError) {
    console.log(e);
  } else if (e instanceof Error) {
    console.log(e);
  }
}
