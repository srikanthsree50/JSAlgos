const data = [1,2,3,4,5]
function evenSquares(arr) {
   const result = arr.filter((num) => num%2 === 0).map((num) => num*num).reduce((total,num) => total + num,0)
    return result;
}
console.log(evenSquares(data))