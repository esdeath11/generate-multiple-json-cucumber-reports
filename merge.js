const cucumberHtmlReporter = require('cucumber-html-reporter');
const path = require('path');
const fs = require('fs');

const reportFolders = fs.readdirSync('./reports');

const reportOptions = {
  theme: 'bootstrap',
  jsonDir: path.join(__dirname, 'reports'),
  output: path.join(__dirname, 'merged-report', 'merged-report.html'),
  reportSuiteAsScenarios: true,
  launchReport: false,
};

reportFolders.forEach((folder) => {
  const filePath = path.join(__dirname, 'reports', folder, 'cucumber_report.json');
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(fileContent);
    reportOptions.jsonFile = jsonData;
    cucumberHtmlReporter.generate(reportOptions);
  }
});
