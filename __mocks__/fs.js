const path = require('path');
const fs = jest.genMockFromModule('fs');

let mockFiles = Object.create(null); // ?
function __setMockFiles(newMockFiles) {
  mockFiles = Object.create(null);
  for (const file in newMockFiles) {
    const dir = path.dirname(file); // ?
    console.log(dir);
    if (!mockFiles[dir]) {
      mockFiles[dir] = [];
    }
    mockFiles[dir].push(path.basename(file) /*?*/);
  }
}

function readdirSync(directoryPath) {
  return mockFiles[directoryPath] || []; // ?
}

function readFileSync(path, unicode) {
  return 'file';
}

fs.__setMockFiles = __setMockFiles;
fs.readdirSync = readdirSync;
fs.readFileSync = readFileSync;

module.exports = fs;
