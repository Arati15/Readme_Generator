// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.licenseBadge}


  ## Description

  ${data.description}


  ## Table Of Contents:

  *[Description](#description)
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#License)
  *[Contributing](#Contribution)
  *[Tests](#Tests)
  *[Questions](#Contact)


  ## Installation:
  
  ${data.installation}


  ## Usage:

  ${data.usage}


  ## License

  License used for thos project - ${data.license}


  ## Contributing:

  ${data.contribution}


  ## Tests:

  ${data.test}


  ## Contact
  *GitHub : ${data.userName}
  *Email : ${data.userEmail}


`;
}

module.exports = generateMarkdown;