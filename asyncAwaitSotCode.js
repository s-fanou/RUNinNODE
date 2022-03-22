function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // the 2 lines of code below are executed after resolveAfter2Seconds() finishes
    console.log('after result');
  }
  
  asyncCall();
  console.log('after asyncCall');

  /* THE OUTPUT OF THE ABOVE PROGRAM IS THIS
  
  > "calling"
  > "after asyncCall"
  HERE THE PROGRAM AWAITS resolveAfter2Seconds() TO FINISH AND WHEN IT DOES IT PRINTS THE 2 LINES FOLLOWING AWAIT
  > "resolved"
  > "after result"
  
  */