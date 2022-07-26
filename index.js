// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '12 Broadway',
}

function updateEmployeeWithKeyAndValue (employee, streetAddress, newAddress) {
    const newEmployee = {...employee};
    newEmployee[streetAddress] = newAddress;
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, newAddress){
    employee[streetAddress] = newAddress;
    return employee;

}
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = {...employee};
  delete newEmployee [key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}