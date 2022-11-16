const generateEngineer = (member) => {

    return `
    <div class="col-3 card box-shadow">
        <div class="card-header pt-3 pl-4">
            <p>${member.name}</p>
            <p>Engineer</p>
        </div>
        <div class="card-body p-4">
            <div class="border-blue">${member.id}</div>
            <div class="border-blue">${member.email}</div>
            <div class="border-blue">${member.github}</div>
            
        </div>
    </div>
    `
};
const generateIntern = (member) => {

    return `
    <div class="col-3 card box-shadow">
        <div class="card-header pt-3 pl-4">
            <p>${member.name}</p>
            <p>Intern</p>
        </div>
        <div class="card-body p-4">
            <div class="border-blue">${member.id}</div>
            <div class="border-blue">${member.email}</div>
            <div class="border-blue">${member.school}</div>
            
        </div>
    </div>
    `
};
const generateManager = ( member) => {

    return `
    <div class="col-3 card box-shadow">
        <div class="card-header pt-3 pl-4">
            <p>${member.name}</p>
            <p>Manager</p>
        </div>
        <div class="card-body p-4">
            <div class="border-blue">${member.id}</div>
            <div class="border-blue">${member.email}</div>
            <div class="border-blue">${member.officeNumber}</div>
            
        </div>
    </div>
    `
};
// export function to generate entire page
module.exports = templateData => {
    // destructure page data by section
    const { managers, engineers, interns} = templateData;

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header class="flex-row justify-center p-4">
            <h1 class="page-title text-light py-2 px-3">My Team</h1>
        </header>
        <main class="flex-row my-5 justify-space-around">
            ${managers.map(generateManager)}
            ${interns.map(generateIntern)}
            ${engineers.map(generateEngineer)}
        </main>
    </body>
    </html>
    `;
};
  