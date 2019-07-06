const fs = require('fs');
const http = require('http');
// const dataHTML="";
// fs.writeFile('index.html','<h1 style="color:red"> this homepage</h1>',(err)=>console.log(err));
// console.log('before the file')

// console.log('after the file')

const server = http.createServer((req,res)=>{
console.log(req);
if (req.url === '/'){
   var jsondata={
       data:[]
   };
   fs.readFile('50-contacts.csv','utf8',(err,data)=>{
       if(err)  throw err;
       if(data) {
           arr=data.split('\n');
           res.write(arr[1]);
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
           res.end();
       }
       else console.log('empty files');
   })
}else{
    res.write('<h1> 404 Page Not Found</h1>')
}


})
server.listen(3000, ()=> console.log("server is up and runnug"))