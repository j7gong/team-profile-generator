const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Dave');
  
    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('dave@test.com');

    expect(manager.officeNumber).toEqual(expect.any(Number));
});