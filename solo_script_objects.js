// ! ! !
// Three Bugs
function employee(name, empNum, salary, rating){
  this.name = name;
  this.empNum = empNum;
  this.salary = salary;
  this.rating = rating;
}

var Atticus = new employee("Atticus", "2405", "47000", 3);
var Jem = new employee("Jem", "62347", "63500", 4);
var Boo = new employee("Boo", "11435", "54000", 3);
var Scout = new employee("Scout", "6243", "74750", 5)


var array = [Atticus, Jem, Boo, Scout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
//changed calculateSTI(array) to calculateSTI(array[i]) so that we pass through the array element corresponding to the index.
	array[i] = calculateSTI(array[i]);
 	newEl = document.createElement('li');
//added spaces for styling
	newText = document.createTextNode(array[i].name + " " + array[i].bonusPer + " " + array[i].adjustedIncome + " " + array[i].bonusTot);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}




function calculateSTI(array){
  var someObj = {
    name: " ",
    bonusPer: 0,
    adjustedIncome: 0,
    bonusTot: 0,
  }


  someObj.name = array.name;

 

  var employeeNumber = array.empNum;
  var baseSalary = array.salary;
  var reviewScore = array.rating;





  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  someObj.bonusPer = bonus;
//added Math.ceil and Math.round accordingly so our values were not long decimals or rounded as asked for
  someObj.adjustedIncome = Math.ceil(baseSalary * (1.0 + bonus));
  someObj.bonusTot = Math.round(baseSalary * bonus)
  console.log(someObj.name + " " + someObj.bonusPer + " " + someObj.adjustedIncome + " " + someObj.bonusTot);
  return someObj;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
//Removed the -1 on the base percent return statement, was not correct
  return basePercent;
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}