const accountId = 12345;
let accountEmail = "temp@gmailcom";
var accountPassword = "test@123";
accountCity = "Palampur";
let accountState;

// accountId = 2;   // not allowed ==> TypeError: Assignment to constant variable
// console.log(accountId);

accountEmail = "dumy@gmai.com";
accountPassword = "dummy@123";
accountCity = "Kangra";

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/* 
    Variables naming rules
    ======================

    ** stick to 0-9, a-z, A-Z, _ (underscore), $ characters only
    ** don't use number at the start of the variable names (not allowed)
    ** make variable names intutive, so they can describe the data they contain
    ** avoid using Js reserve words such as let, cont, var, function etc
*/

/*
    use let when variable is going to be reassigned with a different value
    use const when value is constant throught the application
    avoid using var
*/
