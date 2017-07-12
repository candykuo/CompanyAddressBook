const shortid = require('shortid');

class Employee {

  constructor (firstName, lastName, email, position) {
    this.id = shortid.generate();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.position = position;
  }
} 

module.exports = {Employee};

