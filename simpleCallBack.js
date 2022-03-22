function printMyName(str, callback) {
    if (!str || str === '') {
        callback(new Error("str shouldn't be empty"))
        return
    }
}


printMyName("sotiris", err => {
    if (err) {
        console.log(err.name, err.message)
        return
    }

    // continue .
})

/* --------------------------- 
another way to write it */

function printMyName(str, callback) {
    if (!str || str === '') {
        callback(new Error("str shouldn't be empty"))
        return
    }
	
	console.log(str);
}

printMyName("sotiris", myCallBack);

function myCallBack(err){
	
	 if (err) {
        console.log(err.name, err.message)
        return
    }
	
}

