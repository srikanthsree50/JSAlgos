// function bubble(arr){
//     for (let i = 0; i < arr.length; i++) {    
//         for (let j = 0; j < arr.length - i - 1; j++) {  
//             if(arr[j] > arr[j + 1]){
//                 const temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//         }
//         return arr;
// }

// console.log(bubble([4,5,3,6,2,7,1]))

function bubbleSort(arr){
    let swapped = false;
    while(!swapped){
        swapped = true
        for (let i = 0 ; i<arr.length;i++){
       if(arr[i] > arr[i+1]){
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp
        swapped = false
       }
        }
    }
    return arr;
}
console.log(bubbleSort([4,5,3,6,2,7,1]))