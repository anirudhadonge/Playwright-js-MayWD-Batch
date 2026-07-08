/**
 * Error Handling in JavaScript
 * try catch and finally block
 * throw keyword
 */
/**
 * syntax:
 * try{
 *  throws an error 
 * }catch(err){
 *  handle the error
 * }
 */

function errorHandlingExample(flag){
    try{
        if (flag){
            throw new Error("This is an error message");
           
        }else {
            console.log("No error thrown");
        }
    }catch(msg){
        console.log(`Error caught: ${msg.message}`);
        
    } finally{
         console.log("This is the finally block");
    }
}


errorHandlingExample(true); // Output: Error caught: This is an error message
errorHandlingExample(false); // Output: No error thrown