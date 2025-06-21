// function Binary(arr,x){
//     let low = 0;
//     let high = arr.length;
//     while(low < high){
//         let mid = Math.floor((low + high)/2)
        
//         if(arr[mid] === target){
//             return mid;
//         }else if(arr[mid] <= target){
//             low = mid + 1
//         }
//         else{
//             high = mid -1
//         }
//     }
//     return -1
// }

// let array = [10,20,30,40,50]

// let target = 3

// let result = Binary(array, target)

// console.log(result)




function binarySearch(arr, tar) {
    let low = 0;
    let high = arr.length - 1;
    let found = false;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === tar) {
            console.log(`Element ${tar} found at index ${mid}`);
            found = true;
            break;
        } else if (arr[mid] < tar) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    if (!found) {
        console.log(`Element ${target} not found in the array`);
    }
}

// Example Usage
const numbers = [10, 20, 30, 40, 50, 60];
const tar = 40;

binarySearch(numbers, tar);  // call the function, no need to store result




