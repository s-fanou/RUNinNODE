/* checkString() below is the function which uses a callback because it 
wants the function to be called at a specific time */

function checkString(str, callback) {
  if (!str || str === "") {
    callback("The string is empty.");
    return;
  }
  console.log(str + "additional text");
}

/* here a callback function is defined as a separate function
 and it is then passed as parameter when checkString() is called */

function myCallback1(msg) {
  console.log(msg + " This message was in myCallback1");
  return;
}

/* definition of another function which can be passed as a callback */
function myCallback2(msg) {
  console.log(msg + " This message was in myCallback2");
  return;
}

// CALLING checkString()
checkString("", myCallback1);
/* I can pass a different callback to checkString() */
checkString("", myCallback2);
