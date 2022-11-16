// export function to generate entire page
module.exports = templateData => {
    // destructure page data by section
    const { projects, about, ...header } = templateData;

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
        <div class="col-3 card box-shadow">
            <div class="card-header pt-3 pl-4">
                <p>ManagerName</p>
                <p>Role: Manager</p>
            </div>
            <div class="card-body p-4">
                <div class="border-blue">ID</div>
                <div class="border-blue">Email</div>
                <div class="border-blue">OfficeNumber</div>
            </div>
        </div>
        </main>
    </body>
    </html>
    `;
};
  