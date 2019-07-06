// const http = require('http');

function Employee(eno, ename, sal) {
 
    this.EmpNo = eno;
    this.EmpName = ename;
    this.Salary = sal;
};
 
//4.
var Employees = [];
obj={ 
Employee:[]
}
//5.
var path = require('path');

obj.from.path('./50-contacts.csv').to.array(function (data) {
    for (var index = 0; index < data.length; index++) {
        Employees.push(new Employee(data[index][0], data[index][1], data[index][2]));
    }
    console.log(Employees);
});
//6.
var http = require('http');
//7.
var server = http.createServer(function (req, resp) {
    resp.writeHead(200, { 'content-type': 'application/json' });
    resp.end(JSON.stringify(Employees));
 
});
 
//8.
server.listen(5050);