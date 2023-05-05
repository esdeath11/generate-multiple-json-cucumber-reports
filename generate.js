const { generate } = require('multiple-cucumber-html-reporter');
const path = require('path');
const fs = require('fs');



const jsonFilePath = './json';
const jsonFiles = fs.readdirSync(jsonFilePath);
const jsonChunks = [];
const chunkSize = 1;

jsonChunks.push(jsonFiles.slice(chunkSize));
jsonChunks.forEach((chunk, index)=> {
    const outputDir = `./reports/report-${index + 1}`;

    const options = {
        jsonDir: jsonFilePath,
        reportPath: outputDir,
        metadata: {
          browser: {
            name: 'chrome',
            version: '84',
          },
          device: 'Local test machine',
          platform: {
            name: 'Windows',
            version: '10',
          },
        },
      };
      generate(options);
})  
