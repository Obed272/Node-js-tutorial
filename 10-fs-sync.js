//   FS MODULE - Synchronous Programming / blocking

const { readFileSync, writeFileSync } = require('fs')
console.log('start');


const first = readFileSync('./content/first.txt', 'UTF8')
const second = readFileSync('./content/second.txt', 'UTF8')

// console.log(first, second);

// To create a new file From a file when you are inside another file
writeFileSync(
    './content/result-sync.txt',
     `Here is the result: ${first} ${second}`, 
    //  Flag which is = to a Will create a new value  of line 16
    { flag: `a` })
console.log('Done with this task');
console.log('starting the next one');

