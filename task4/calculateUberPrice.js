//write a class to calculate the Uber price.
class CalculateUberPrice {//create a class to calculate the Uber price named as CalculateUberPrice
  constructor(baseFare, costPerKM) {// create Constructor with base fare and costPerKM
    this.baseFare = baseFare;
    this.costPerKM = costPerKM;
  }

  calculatePrice(distance) {//create calculatePrice method with distance argument
    const price = this.baseFare + this.costPerKM * distance;
    return price;
  }
}

let calculator = new CalculateUberPrice(3,1.25);//Proceed with baseFare as 3 and costPerKM 1.25
const price = calculator.calculatePrice(10); // Calculate price for 10 Kilo Meters
console.log("Your Price for the Ride is : $"+price+"\nThank you!!!");// Printing the Price
