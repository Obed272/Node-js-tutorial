//   FS MODULE -ASynchronous Programming // Non-blocking

const { readFile, writeFile } = require('fs')

console.log('start');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result;
       writeFile('./content/result-async..txt', 
             `Here is the result: ${first} ${second}`,
             { flag : `a` },
             (err, result) => {
                if (err) {
                   console.log(err);
                    return
                }
                console.log('done with this task');
             }
       ) 
    })
})
console.log('Starting the next one');
/*
this logs
start
Starting the next one
done with this task  :meaning that it when a task starts,
it offloads the task and another can start while the first is running 
so the keeps running instead of waiting for the first to run 
before sarting the next*/


















