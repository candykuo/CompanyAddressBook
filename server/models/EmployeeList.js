var fs = require('fs');
var {Employee} = require('./Employee.js')


class EmployeeList {
  constructor () {
    this.allEmployees = [];
    this.loadInitialEmployees(this.allEmployees);
    
  }
  
  loadInitialEmployees() {
    
    var temp = this.fetchInitialEmployees();
    
    for (var i = 0; i < temp.length; i ++) {
      var person = temp[i];
      this.allEmployees.push(new Employee(person.firstName, person.lastName, person.email, person.position));
    }
    
    this.sortEmployees(); 
  }
  
  fetchInitialEmployees() {
    try{
      return JSON.parse(fs.readFileSync('server/models/initial_employees.json'));

    } catch (e) {
      
      return [];
    }
  }
  
  sortEmployees() {
    this.allEmployees.sort((a, b) => {
      
      return a.lastName.localeCompare(b.lastName);
    });
  }
  
  getAllEmployees () {
    
    return(this.allEmployees);
  }
}

module.exports = {EmployeeList}