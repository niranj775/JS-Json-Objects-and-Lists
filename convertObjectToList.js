function convertObjectToList(obj){
    
    return Object.entries(obj);
}
var object = {name: 'ISRO', age: 35, role: 'Scientist'};

console.log(convertObjectToList(object))

/*
Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
Input (Object):
var object = {name: “ISRO”, age: 35, role: “Scientist”};
Output:
[[“name”, “ISRO”], [“age”, 35], [“role”, “Scientist”]]
*/