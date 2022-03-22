/* checkString() below is the function which uses a callback because it 
wants the function to be called at a specific time */

function checkString(str, callback) {
  if (!str || str === "") {
    callback("The string is empty");
    return;
  }
  console.log(str + "additional text");
}

/* here the call back function is defined in the parameter list 
because I do not want to change the functionality of the callback */
checkString("", function myCallback(msg) {
  console.log(msg);
  return;
});

/* notice that I am using the same function checkString(). When 
writing its definition I set where/when the callback function will 
be called. Then in the parameter list I defined what the callback 
function will be doing
*/
