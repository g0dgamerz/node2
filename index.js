const fs = require('fs');
const path= require('path');
var Strings; 

const filelocation = path.join(__dirname,'50-contacts.csv');
fs.readFile(filelocation,'utf8',(err,data)=>{
    if(err) throw err;
    if(data) {
        // console.log(data);
            Strings = data.toString(); 
            var arr = Strings.split('\n'); 
            console.log(arr);
            var jsonString = JSON.stringify(arr);
            console.log(jsonString);
            var obj=JSON.parse(jsonString);
            console.log(obj);
       
    }
    else console.log('empty file');
})

