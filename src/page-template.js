const generateMember = ( member, role) => {
    var special = '';

    if(role == 'Manager') {
        special = member.officeNumber;
    } else if (role == 'Intern') {
        special = member.school;
    } else if (role == 'Engineer') {
        special = member.github;
    }

    return `
    <div class="col-3 card box-shadow">
        <div class="card-header pt-3 pl-4">
            <p>${member.name}</p>
            <p>${role}</p>
        </div>
        <div class="card-body p-4">
            <div class="border-blue">${member.id}</div>
            <div class="border-blue">${member.email}</div>
            <div class="border-blue">${special}</div>
            
        </div>
    </div>
    `
};
// export function to generate entire page
module.exports = templateData => {
    // destructure page data by section
    const { managers, engineers, interns} = templateData;
    // console.log(templateData);
    console.log(managers); console.log(managers[0]);
    // console.log(interns);
    // console.log(engineers);

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
            ${generateMember(managers[0], 'Manager')}
            
        </main>
    </body>
    </html>
    `;
};
  