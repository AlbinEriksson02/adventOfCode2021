const fs = require('fs');

const data = fs.readFileSync('1.csv');


let text =""
function loopThroughList(){
    for (let i = 0; i < data.length; i++) {
        text += data[i];
        console.log(text)
    }
}
loopThroughList()