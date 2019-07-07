const http = require('http');
const fs = require('fs');
 
const server = http.createServer((req, res) => {
 
    if (req.url === '/') {
     
        content = fs.readFile('50-contacts.csv', 'utf8', (err, data) => {
 
            if (err) throw err;
            if (data) {
 
                console.log('file reading');
               
                var result = `
                    <html>
                    <table border="1">
                    <thead>
                        <th> First Name </th>
                        <th> Last Name </th>
                        <th> Company Name </th>
                        <th>  Address </th>
                        <th> City </th>
                        <th> County </th>
                        <th> State </th>
                        <th> Zip </th>
                        <th> Phone1 </th>
                        <th> Phone </th>
                        <th> Email </th>
 
                    </thead>
                    <tbody>
                `;
 
                const table = data.split('\n').slice(1);
 
                const headers=table[0].split(",");
 
                for(let i=0;i<table.length-1;i++){
 
                    const currentline=table[i].split(",");
                        const obj = {
                            'firstname': currentline[0],
                            'lastname': currentline[1],
                            'companyname': currentline[2],
                            'address': currentline[3],
                            'city': currentline[4],
                            'county': currentline[5],
                            'state': currentline[6],
                            'zip': currentline[7],
                            'phone1': currentline[8],
                            'phone': currentline[9],
                            'email': currentline[10],
                        };
 
                        result += `
                        <tr>
                            <td> ${obj['firstname']} </td>
                            <td> ${obj['lastname']} </td>
                            <td> ${obj['companyname']} </td>
                            <td> ${obj['address']} </td>
                            <td> ${obj['city']} </td>
                            <td> ${obj['county']} </td>
                            <td> ${obj['state']} </td>
                            <td> ${obj['zip']} </td>
                            <td> ${obj['phone1']} </td>
                            <td> ${obj['phone']} </td>
                            <td> ${obj['email']} </td>
 
                        </tr>
                        `;
             
                }
 
                result += `
                    </tbody>
                    </table>
                    
<div style="text-align:right;position:fixed;bottom:3px;right:3px;width:100%;z-index:999999;cursor:pointer;line-height:0;display:block;"><a target="_blank" href="https://www.freewebhostingarea.com" title="Free Web Hosting with PHP5 or PHP7"><img alt="Free Web Hosting" src="https://www.freewebhostingarea.com/images/poweredby.png" style="border-width: 0px;width: 180px; height: 45px; float: right;"></a></div>
</html>
                `;
 
                // console.log(result);
             
                res.writeHeader(200, {
                    'Content-Type': 'text/html'
                });
 
                res.write(result);
                res.end();
               
            } else {
                res.write('404 error');
            }
        });
 
    }
});
 
server.listen(2000, () => console.log('Server is on and live.'));