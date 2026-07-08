/**
 * switch statment is used to perform different actions based on different conditions. It is an alternative to using multiple if...else statements.
 * 
 * syntax:
    * switch(expression){
    *  case value1:
    *    // action to be performed if expression matches value1
    * }
    * 
    * break statement
    * 
 */
// Invoke a browser base on the value of browser variable
let browser = "webkit";
//else if more than two conditions  
switch(browser){
    case "chrome":
        console.log("Launching Chrome browser");
        break;
    case "firefox":
        console.log("Launching Firefox browser");
        break;
    case "edge":
        console.log("Launching Edge browser");
        break;
    default :
        console.log("Launching Chrome browser");
}
