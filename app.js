// npm - global command, comes with node
// mpm --version

// local dependency - use it only in this particular poject
// npm i <packageeName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)


// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step-by-step, press enterto skip)
// npm Init -y (everything default)


const local = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = local.flattenDeep(items);
console.log(newItems);

