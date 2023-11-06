const fs = require("fs");

fs.writeFile(
    "23.2-Native-Modules\\2.2 Native Modules\\message.txt",
    "Hello from NodeJS!",
    (err) => {
        if (err) throw err;
            console.log('The file has been saved!');
    }
);

fs.readFile(
    "23.2-Native-Modules\\2.2 Native Modules\\message.txt",
    "utf8",
    (err, data) => {
        if (err) throw err;
            console.log(data);
    }
);