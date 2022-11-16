const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    const employee = new Employee('Dave');
  
    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('dave@test.com');
});

test('gets employee name', () => {
    const employee = new Employee('Dave');
  
    expect(employee.getName()).toBe(employee.name);
});

test('gets employee id', () => {
    const employee = new Employee('Dave');
  
    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test('gets employee email', () => {
    const employee = new Employee('Dave');
  
    expect(employee.getEmail()).toBe(employee.email);
});