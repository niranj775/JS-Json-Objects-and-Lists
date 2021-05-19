function transformFirstAndLast(data){
    let obj ={};
    if(!obj[arr[0]])
    obj[arr[0]] = arr[arr.length-1];
    return obj;
}
const arr =  ['Geeks', 'for', 'Geek'];
console.log(transformFirstAndLast(arr));