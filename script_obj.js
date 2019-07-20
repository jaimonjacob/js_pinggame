//OBJECTS AND PROPERTIES
//OBJECT LITERAL
/*
var newObj = {
  firstName: 'John',
  lastName: 'Doe',
  birthYear: 1990,
  isMarried: false,
  family: ['Dan', 'Emily','Sing']  
  };
*/
//RETRIEVE ELEMENT 

//console.log(newObj.isMarried);
//console.log(newObj['lastName']);
/*
var marStatus = 'isMarried';
console.log(newObj[marStatus]);
*/
//MUTATE ELEMENT
/*
newObj.birthYear = '1982';
console.log(newObj.birthYear);
*/
/*
newObj['isMarried'] = true;
console.log(newObj.isMarried);
*/
//INITIALIZE ARRAY/OBJECT LITERAL
/*
var newObj = new Object();
newObj.name = 'Jane Doe';
newObj.age = 34;
newObj.isMarried = true;
newObj['job'] = 'Tailor';
newObj['family'] = ["Enrique" , "Shambo" , "Dina"];
console.log(newObj);
*/

//OBJECTS AND METHODS
/*
var newObj = {
    firstName: 'Jane',
    lastName: 'Doe',
    birthYear: 1990,
    isMarried: true,
    findAge: function (birthYear) {
        var currentDate = new Date();
        this.age = currentDate.getFullYear() - this.birthYear;
    }
};
newObj.findAge();
console.log(newObj);
*/

//OBJECT CODING CHALLENG
//COMPARE BMI FOR MARK AND JOHN.

var johnObj = {
    firstName: 'John',
    lastName: 'Smith',
    weight: '120',
    height: '1.72',
    calcBMI: function (weight, height){
        this.bmi = this.weight/(this.height * this.height);
    }  
};
console.log(johnObj['bmi]);