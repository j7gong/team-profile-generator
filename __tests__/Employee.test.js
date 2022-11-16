const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    const employee = new Employee('Dave');
  
    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('dave@test.com');
});