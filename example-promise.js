// function getTempPromise(location) {
// 	return new Promise(function(resolve, reject) {
// 		resolve(79);
// 		reject('City not found')
// 	})
// }

// getTempPromise('Philadelphia').then(function(temp) {
// 	console.log('promise success', temp);
// }, function(err) {
// 	console.log('promise error', err)
// });


function addPromise(a, b) {
	return new Promise(function(resolve, reject) {
		if(typeof a === "number" && typeof b === "number") {
			resolve(a + b);
		}
		reject('Invalid number')
	})
}

addPromise(2, 3).then(function(addition) {
	console.log('Result is', addition);
}, function(err) {
	console.log('Invalid number', err)
})