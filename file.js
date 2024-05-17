const fs = require("fs");

fs.writeFileSync('./hello.txt', 'HELLO WORLD');
// fs.writeFile('./hello.txt', 'HELLO WORLD', (err) => { });

// const ans = fs.readFileSync('./hello.txt', "utf-8");
// fs.readFile('./hello.txt', "utf-8", (err, ans) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(ans);
//     }
// });

fs.appendFileSync('./hello.txt', new Date().getDate().toLocaleString());
