const path = require('path');
const fs = require('fs');
const http = require('http');
var json = {
    data: []
};
const server = http.createServer((req, res) => {
    if (req.url === '/api') {
        const filelocation = path.join(__dirname, '50-contacts.csv');
        fs.readFile(filelocation, 'utf8', (err, data) => {
            if (err) throw err;
            if (data) {
                arr = data.split('\n');
                arr.forEach(value => {
                    let data = value.split(',');
                    let first = data[0];
                    let last = data[1];
                    let companay = data[2];
                    let add = data[3];
                    let city = data[4];
                    let country = data[5];
                    let state = data[6];
                    let zip = data[7];
                    let p1 = data[8];
                    let p2 = data[9];
                    let email = data[10];
                    json.data.push({
                        'firstname': first,
                        'lastname': last,
                        'companay name': companay,
                        'address': add,
                        'city': city,
                        'country': country,
                        'state': state,
                        'zip code': zip,
                        'phone no.': p1,
                        'alternate no': p2,
                        'email': email
                    });
                });
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify(json));
                res.end();

                // console.log(json);

            }
            else console.log('empty files');
        });
    }
    if (req.url === '/apiintable') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.readFile('./index.html', 'utf-8', (err, data) => {
            if (err) throw err;
            // if(data) {
            // table();
            // async function table(){
            //     const response = await fetch('http://localhost:3000/api');
            //     const jsondata = await response.json();

            // ({firstname,address,email}=jsondata);
            // console.log(jsondata);
            // function tableCreate() {
            //     var body = document.getElementsByTagName('body')[0];
            //     var tbl = document.createElement('table');
            //     tbl.style.width = '100%';
            //     tbl.setAttribute('border', '1');
            //     var tbdy = document.createElement('tbody');
            //     for (var i = 0; i < 3; i++) {
            //       var tr = document.createElement('tr');
            //       for (var j = 0; j < 2; j++) {
            //         if (i == 2 && j == 1) {
            //           break
            //         } else {
            //           var td = document.createElement('td');
            //           td.appendChild(document.createTextNode('\u0020'))
            //           i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
            //           tr.appendChild(td)
            //         }
            //       }
            //       tbdy.appendChild(tr);
            //     }
            //     tbl.appendChild(tbdy);
            //     body.appendChild(tbl)
            //   }
            //   tableCreate();
            // }


            else console.log('empty file');
            res.write(data);
            res.end();
        })


    }
    
    else {
        res.write('<h1> 404 Page Not Found</h1>');
        res.end();
    }

})
server.listen(3000, () => console.log("server is up and runnug"));