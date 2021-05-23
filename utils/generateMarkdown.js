// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
licenseDescr = ""; 
function renderLicenseBadge(license) {
  switch (license) {
    case "GNU AGPLv3":
      licenseDescr =
        "[**GNU AGPLv3**](https://choosealicense.com/licenses/agpl-3.0/) - Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.";
      return "![License: AGPL v3](https://img.shields.io/badge/License-AGPLv3-blue.svg)";
    case "GNU GPLv3":
      licenseDescr =
        "[**GNU GPLv3**](https://choosealicense.com/licenses/gpl-3.0/) - Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.";
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    case "GNU LGPLv3":
      licenseDescr =
        "[**GNU LGPLv3**](https://choosealicense.com/licenses/lgpl-3.0/) - Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.";
      return "![License: LGPL v3](https://img.shields.io/badge/License-LGPLv3-blue.svg)";
    case "Mozilla Public License 2.0":
      licenseDescr =
        "[**Mozilla Public License 2.0**](https://choosealicense.com/licenses/mpl-2.0/) - Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.";
      return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL-blue.svg)";
    case "Apache License 2.0":
      licenseDescr =
        "[**Apache License 2.0**](https://choosealicense.com/licenses/apache-2.0/) - A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
      return "![License: Apache License 2.0](https://img.shields.io/badge/License-Apache2.0blue.svg)";
    case "MIT License":
      licenseDescr = "[**MIT License**](https://choosealicense.com/licenses/mit/) - A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
      return "![License: MIT License](https://img.shields.io/badge/License-MIT-blue.svg)";
    case "Boost Software License 1.0":
      licenseDescr =
        "[**Boost Software License 1.0**](https://choosealicense.com/licenses/bsl-1.0/) - A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
      return "![License: Boost Software License 1.0](https://img.shields.io/badge/License-BSL1.0-lightblue.svg)";
    case "The Unlicense":
      licenseDescr = "[**The Unlicense**](https://choosealicense.com/licenses/unlicense/) - A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.";
      return "![License: The Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)";
    default:
      return "";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
  ${licenseDescr}`;
  }
  return "";
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description 
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.test}
  ## Questions
  Please visit my [GitHub page](https://github.com/${data.github}). ${data.github}
  For any addtional questions, please email me [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
