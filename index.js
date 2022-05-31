// Write your solution in this file!

const employee = {
  name: "Sam",
  address: "111",
};
function updateEmployeeWithKeyAndValue(employee, name, address) {
  return {
    ...employee,
    [name]: address,
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, address) {
  employee[name] = address;
  return employee;
}

function deleteFromEmployeeByKey(employee, name, address) {
  return {
    ...employee,
    [name]: address,
  };
}

function destructivelyDeleteFromEmployeeByKey(employee, name, address) {
  employee[name] = address;
  return employee;
}
