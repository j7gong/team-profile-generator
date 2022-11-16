const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const {writeFile, copyFile} = require('./utils/generateHTML');

const promptUser = () => {
    console.log(`
    =================
    Let's start to add your team info!
    =================
    `);
    // If there's no 'projects' array property, create one
    return inquirer.prompt([
        {
            type: 'input',
            name: 'mgname',
            message: 'What is your manager\'s name? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your manager\'s name!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'mgemail',
            message: 'What is manager\'s email address? (Required)',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter your manager\'s email address?!');
                return false;
              }
            }
          },
        {
          type: 'input',
          name: 'mgnumber',
          message: 'What is manager\'s office number? (Required)',
          validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter your manager\'s office number!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'mgid',
          message: 'Enter your manager\'s employeeID (Required)',
          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter your manager\'s employeeID!');
              return false;
            }
          }
        }
    ])
};

const promptIntern = dataIntern => {
    console.log(`
    =================
    Add a New Intern!
    =================
    `);
    
    if (!dataIntern.interns) {
        dataIntern.interns = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internname',
            message: 'What is your intern\'s name? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your intern\'s name!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'internemail',
            message: 'What is your intern\'s email address? (Required)',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter your intern\'s email address?!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'internid',
            message: 'Enter your intern\'s employeeID (Required)',
            validate: descriptionInput => {
              if (descriptionInput) {
                return true;
              } else {
                console.log('Please enter your intern\'s employeeID!');
                return false;
              }
            }
          }, 
        {
          type: 'input',
          name: 'internschool',
          message: 'What is your intern\'s school? (Required)',
          validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter your intern\'s school!');
              return false;
            }
          }
        },
        {
            type: 'confirm',
            name: 'confirmAddMember',
            message: 'Would you like to enter another team member?',
            default: false
        }
    ])
    .then(data => {
        dataIntern.interns.push(data);
        // console.log(dataIntern);
        if (data.confirmAddMember) {
            return promptType(dataIntern);
        } else {
            return dataIntern;}
    });
};

const promptEng = dataEng => {
    console.log(`
    =================
    Add a New Engineer!
    =================
    `);

    if (!dataEng.engineers) {
        dataEng.engineers = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engname',
            message: 'What is your engineer\'s name? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your engineer\'s name!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'engemail',
            message: 'What is your engineer\'s email address? (Required)',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter your engineer\'s email address?!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'engid',
            message: 'Enter your engineer\'s employeeID (Required)',
            validate: descriptionInput => {
              if (descriptionInput) {
                return true;
              } else {
                console.log('Please enter your engineer\'s employeeID!');
                return false;
              }
            }
          }, 
        {
          type: 'input',
          name: 'engusername',
          message: 'What is your engineer\'s Github username? (Required)',
          validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter your engineer\'s Github username!');
              return false;
            }
          }
        },
        {
            type: 'confirm',
            name: 'confirmAddMember',
            message: 'Would you like to enter another team member?',
            default: false
        }
    ])
    .then(data => {
        dataEng.engineers.push(data);
        // console.log(dataEng);
        if (data.confirmAddMember) {
            return promptType(dataEng);
        } else {
            return dataEng;}
    });
};

const promptType = dataType => {
    console.log(`
    =================
    Add a New Team Member!
    =================
    `);
    if (!dataType.type) {
        dataType.type = [];
    }
    return inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: ' What type of team member you would like to add?',
            choices: ['Intern', 'Engineer']
        }
    ])
    .then(data => {
        dataType.type.push(data);
        // console.log(data);
        if(data.type == 'Intern') {
            return promptIntern(dataType);
        } else {
            return promptEng(dataType);
        }
    });
};

promptUser()
    .then(promptType)
    // .then(res=> {
    //     console.log(res);
    // })
    .then(data => {
      return generatePage(data);
    })
    .then(pageHTML => {
      return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
      console.log(writeFileResponse);
      return copyFile();
    })
    .then(copyFileResponse => {
      console.log(copyFileResponse);
    })
    .catch(err => {
      console.log(err);
    });
