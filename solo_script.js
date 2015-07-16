// ! ! !
// Three Bugs

var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

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
	newText = document.createTextNode(array[i][0] + " " + array[i][1] + " " + array[i][2] + " " + array[i][3]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}



function calculateSTI(array){
  var newArray = [];

  newArray[0] = array[0];

  console.log(newArray);

  var employeeNumber = array[1];
  var baseSalary = array[2];
  var reviewScore = array[3];





  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = bonus;
//added Math.ceil and Math.round accordingly so our values were not long decimals or rounded as asked for
  newArray[2] = Math.ceil(baseSalary * (1.0 + bonus));
  newArray[3] = Math.round(baseSalary * bonus)
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;
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