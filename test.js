const fs = require('fs');
var jsondata={
    data:[]
};
fs.readFile('50-contacts.csv','utf8',(err,data)=>{
       if(err) throw err;
       if(data) {
           arr=data.split('\n');
           arr.forEach(value => {
               let data =value.split(',');
               let first = data[0];
               let city = data[4];
               let email=data[12];
               jsondata.data.push({
                       'firstname' : first,
                       'city' : city,
                       'email' : email
                   });

           });
           console.log(jsondata);
       }

       else console.log('empty files');
})  