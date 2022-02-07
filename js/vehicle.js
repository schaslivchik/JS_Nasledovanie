'use strict'

const vehicleMaxSize = {
  length: 42.58,
  width: 1790,
  height: 1492,
};


const passangerTransport = new PassengerTransprot(
  vehicleMaxSize,
  "geely",
  "ck2",
  2018,
  25,
  21
);

const freightTransport = new FreightTransport(
  vehicleMaxSize,
  "geely",
  "ck2",
  2018,
  3500
);

try{
  const vehicle = new Vehicle(vehicleMaxSize, "Volkswagen", "Golf", 2016);
  vehicle.getMaxSize();
  console.log(vehicle.getAge());
}catch(e){
  console.log('e :>> ', e);
}
