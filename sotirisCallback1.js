/* ----------------------
another way to write it */

function printMyName(str, callback) {
    if (!str || str === '') {
        callback('The string is empty');
        return;
    }
	
	console.log(str + 'additional text');
}

printMyName("", msg => {
	
	if (msg) {
        console.log(msg);
        return;
    }
	
});



