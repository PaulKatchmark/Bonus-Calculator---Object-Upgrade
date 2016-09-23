var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

//
// This will also mean that you need to adjust the rest of the logic to accept properties rather than array index.
// The original employees array that was used to store each person does not need to be converted to an object. Meaning that you can put your new Person objects inside of an array.
// Once you are complete, post to GitHub and submit via this app.

function Person(name, id, salary, rating) {
  this.name = name;
  this.id = id;
  this.salary = salary;
  this.rating = rating;
}

var atticus = new Person("Atticus", "2405", "47000", 3);
var jem = new Person("Jem", "62347", "63500", 4);
var boo = new Person("Boo", "11435", "54000", 3);
var scout = new Person("Scout", "6243", "74750", 5);

var employees = [atticus, jem, boo, scout];

for (var i = 0; i < employees.length; i++) {
    console.log(getEmployee(employees[i]));
}

function getEmployee (employee) {
  var bonusArray = [];
  bonusArray[0] = employee.name;
  var percent = percentage(employee);
  bonusArray[1] = (percent * 100) + '%';
  var bonus = employee.salary * percent;
  bonusArray[2] = Math.round(parseInt(employee.salary) + bonus);
  bonusArray[3] = parseInt(bonus);

  document.write('<h2>' + bonusArray[0] + '</h2>' + '<ul><li>Bonus Percentage: ' +
      bonusArray[1] + '</li><li>Adjusted Annual Compensation: $' + bonusArray[2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
      '</li><li> Total Bonus: $' + bonusArray[3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</li></ul>')

  return bonusArray;
}

  function percentage(arr) {
  var rating = arr.rating;
  var salary = arr.salary;
  var id = arr.id;


  var precent = 0;

  if (rating <= 2) {
    return percent;
  } else if (rating === 3) {
    percent = 0.04
  } else if (rating === 4) {
    percent = 0.06;
  } else if (rating === 5) {
    percent = .1;
  }

console.log(arr);
console.log(id);

if (id.length <= 4) {
    percent += 0.05;
 }
if (salary > 65000) {
  percent -= 0.01;
}
if (percent > 0.13) {
  percent = 0.13;
}
return percent;
};
