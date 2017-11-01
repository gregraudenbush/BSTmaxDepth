function swap(arr, index1, index2){
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function partition(arr, left, right){
    var pivot = arr[Math.floor((left + right) /2)]
    var i = left;
    var x = right;

    while( i <= x){

        while(arr[i] < pivot){
            i++;
        }
        while( arr[x] > pivot){
            x--;
        }
        if(i <= x){
            swap(arr, i, x);
            i++;
            x--;
        }
    }
    return i;
}

function quicksort(arr, left, right){
    var index;

    if(arr.length > 1){
        index = partition(arr, left, right)

        if(left < index -1){
            quicksort(arr, left, index - 1)
        }
        if (right > index){
            quicksort(arr, index, right)
        }
    }
    return arr
}

var arrayz = [9,3,4,1,6,7,9,2,8]
var newarrayz = quicksort(arrayz, 0, arrayz.length-1)
console.log("quciksort " + newarrayz)