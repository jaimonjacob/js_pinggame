// Function
/* function retireYear(birthYear, firstName, stateRetireAge) {
  var currentTime = new Date();
  var currentYear = currentTime.getFullYear();
  var yourAge = currentYear - birthYear;
  var retirementDuration = stateRetireAge - yourAge;
  var retirementYear = currentYear + retirementDuration;
  var retirementAge = yourAge + retirementDuration;
  if (retirementDuration > 0) {
    console.log(
      firstName +
        " retires in " +
        retirementYear +
        " at " +
        retirementAge +
        " years of age, which is " +
        retirementDuration +
        " years from now."
    );
  } else {
    console.log(
      firstName +
        "has already retired in " +
        retirementYear +
        " at " +
        retirementAge +
        " years of age, which was" +
        retirementDuration +
        " years ago."
    );
  }
}

var req1 = prompt("Which year were you born?");
var req2 = prompt("What's your first name?");
var req3 = prompt("What's the official retirement age in your country?");
retireYear(req1, req2, req3);
 */

// Function expression
/*
var whatisYourJob = function(job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches kids.";
    case "programmer":
      return firstName + " programms javascript.";
    case "soldier":
      return firstName + " fights war.";
    default:
      return firstName + " doesnt have a job.";
  }
};
console.log(whatisYourJob("teacher", "Ryan"));
*/

//if/else exercise 1

/*
function greaterNum (firstNum, secondNum){
        if (firstNum > secondNum){
            console.log( firstNum +' is greater than than '+ secondNum);
        }
        else if (secondNum > firstNum){
            console.log( secondNum +' is greater than than '+ firstNum); 
        }
        else {
            console.log( 'Both the numbers are equal'); 
        } 
    }
*/

//if/else exercise 2
/*
function helloworld(langCode){
    switch(langCode){
        case("es"):
            console.log("Hola Mundo");
            break;
        case("de"):
            console.log("Hallo Welt");
            break;
        case("en"):
            console.log("Hallo World");
    }
}

helloworld("es");
*/

/* function assignGrade(score){
    switch(true){
        case (score > 90):
            return 'You scored A';
        case (score > 80 && score < 90):
            return 'You scored B';
        case (score > 60 && score < 80):
            return 'You scored C';
        case (score > 50 && score < 60):
            return 'You scored D';
        case (score > 30 && score < 50):
            return 'You scored F';
    }
    
}
console.log(assignGrade(91)); */

/* function pluralize(number, name) {
  if (number == 1){
    return number + ' ' + name;
  } else {
    return number + ' ' + name  +'s' ;
  }
}
console.log (pluralize(1, 'cat'));
console.log (pluralize(4, 'tiger'));
console.log (pluralize(3, 'dog')); */
