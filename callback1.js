/* --------------------------- 
another way to write it */

function printMyName(str, callback) {
    if (!str || str === '') {
        callback(new Error("str shouldn't be empty"));
        return;
    }
	
	console.log(str);
}

function myCallBack(err){
	
	 if (err) {
        console.log(err.name, err.message);
        return;
    }
	
}

printMyName("", myCallBack);



