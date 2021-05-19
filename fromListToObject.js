function fromListToObject(data){
    return data;
}
var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
console.log(fromListToObject(arr));

/*
Write a function “fromListToObject” which takes in an array of arrays, 
and returns an object with each pair of elements in the array as a key-value pair.
*/