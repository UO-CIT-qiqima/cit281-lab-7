/*
    CIT 281 Lab 7
    Name: Qiqi Ma
*/

class CustomError extends Error{
   constructor(message) {
       super(message);
       this.genericError = "Generic Error"
       this.customError = "Custom Error"
   };
 
};
function throwGenericError() {
   throw new CustomError("Generic error");
};

function throwCustomError() {
    throw new CustomError("Custom error");
};

console.log("Force generic error")
try {
    console.log("Generic error try block")
    throwGenericError();
} catch (err) {
    console.log(`${err.message} catch block`);
    console.log(`Error: ${err.message}`);
} finally {
    console.log("Generic error finally block")
};

console.log("Force custom error")
try{
    console.log("Custom error try block")
    throwCustomError();
} catch (err) {
    console.log(`${err.message} catch block`)
    console.log(`Custom error: ${err.message}`)
} finally {
   console.log("Custom error finally block")
};
