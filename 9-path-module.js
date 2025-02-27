// To find the path separator'\'
const path = require('path');
console.log(path.sep);

// To join paths
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath);
// To find the last flie
const base =  path.basename(filePath);
console.log(base);
// To return an absolute PATH