/* How to write my own Promise. The fetchData() function is code that is usually included in libs
and we do not have to write BUT if I wanted to write code using a Promise this is how I do it */
function fetchData() {
  const promise = new Promise((resolve, reject) => {
    /* the setTimeout() represents an async operation, here I would write my async code and when 
    that async code finished successfully I would have to call the function resolve() and pass 
    a message to it as a string parameter */
    setTimeout(() => {
      resolve("Done! this is the text returned in the promise resolve()");
    }, 1500);
  });
  return promise;
}

/* the below setTimeout() also represents async code in which I would use the promise I have 
written above */
setTimeout(() => {
  console.log("Timer is done!");
  // the parameter (text) below is what the resolve() function above returns
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData(); //we call fetchData again so we have a 2nd then
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);

console.log("Hello!");
console.log("Hi!");
