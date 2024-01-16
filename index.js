// Declaring a variable in global scope called customerName using the var keyword.
var customerName = 'John';

//  Writing a function that accesses the global customerName variable and uppercases it.
function upperCaseCustomerName() {
  return customerName.toUpperCase();
}

//  Writing a function that, when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
  bestCustomer = 'not bob'; 
}

// Writing a new function that changes the bestCustomer variable.
function overwriteBestCustomer() {
  bestCustomer = 'still not bob'; 
}

// Declaring a constant (using the const keyword) in global scope called leastFavoriteCustomer.
const leastFavoriteCustomer = 'Alice';

//  Writing a function that attempts to change the constant.
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Bob';
}

// Exporting functions for testing
module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  leastFavoriteCustomer,
  changeLeastFavoriteCustomer,
};
