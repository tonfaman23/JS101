console.log('Starting on objects');
//returns length of word
const wordLength = (word) => {
    return word.length;
}

console.log('num of letters', wordLength('cat'));
console.log('num of letters', wordLength('SuperKaliFragelisticExpealidocius'));

const ageCheck = (age) => {
  if(age >= 21){
  console.log('PARTY!!!');
} else {
    console.log('no drinks for you');
}}


ageCheck('12');
ageCheck('22');

const expense = {
    dateCreated: '01/17/2020',
    location: 'San Jose',
    cost: 324.99,
    isGood: true
};

//dot notation
console.log(expense.cost);

//bracket notation
console.log(expense['cost']);

const employee = {
    id: 'RJ2468',
    dateHired: '01/22/2017',
    position: 'Account Manager',
    salary: 75000,
    firstName: 'Reynald',
    lastName: 'Jemane',
    passScreen: true,
    collegeDegree: true,
    supervisor: 'HK0064'
};

const statusMaker = (employee) => {
    if(employee.firstName.charAt(0) === 'M'){
        employee.status = 'VIP';
    }
    else{
        employee.status = 'Peasant';
    }
    return employee;
}

console.log(statusMaker(employee));