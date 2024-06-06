class Employee {
  constructor(id, value, children) {
    this.id = id;
    this.value = value;
    this.children = children;
  }
}

function buildEmployeeMap(employees) {
  const employeeMap = new Map();
  for (const employee of employees) {
    employeeMap.set(employee.id, employee);
  }
  return employeeMap;
}

function calculateImpValue(employeeMap, id) {
  let importantValue = 0;
  const queue = [id];

  while (queue.length > 0) {
    const currentId = queue.shift();
    const currentEmployee = employeeMap.get(currentId);

    if (currentEmployee) {
      importantValue += currentEmployee.value;
      queue.push(...currentEmployee.children);
    }
  }

  return importantValue;
}

const employee1 = new Employee(1, 5, [2, 3]);
const employee2 = new Employee(2, 3, []);
const employee3 = new Employee(3, 3, []);

const employees = [employee1, employee2, employee3];
const employeeMap = buildEmployeeMap(employees);
console.log(calculateImpValue(employeeMap, 1)); // Output: 11
