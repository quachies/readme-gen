function renderLicenseBadge(license) {
  let badge = '';

  switch (license) {
    case 'The MIT License':
      badge = '[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)';
      break;
    case 'Educational Community License, Version 2.0':
      badge = '[![License: ECL-2.0](https://img.shields.io/badge/License-ECL--2.0-2ea44f)](https://opensource.org/license/ecl-2-0)';
      break;
    case 'Simple Public License':
      badge = '[![License: Artistic-2.0](https://img.shields.io/badge/License-SimPL--2.0-123456)](https://opensource.org/license/simpl-2-0-html)';
      break;
    case 'None':
      badge = '';
      break;
  }

  return badge;
}

function renderLicenseLink(license) {
  switch (license) {
    case 'The MIT License':
      return 'https://opensource.org/licenses/MIT';
    case 'Educational Community License, Version 2.0':
      return 'https://opensource.org/license/ecl-2-0';
    case 'Simple Public License':
      return 'https://opensource.org/license/simpl-2-0-html';
    case 'None':
      return '';
  }
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
}