const Intern = require('../lib/Intern');

test('creates a intern object', () => {
    const intern = new Intern('Dave');
  
    expect(intern.name).toBe('Dave');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('dave@test.com');

    expect(intern.school).toEqual('stevens');
});