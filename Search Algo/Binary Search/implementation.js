const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let target = 30;

function binarySearch(L,R){
    if(L == R){
        return false;
    }

    let mid = Math.floor((L + R)/2);

    if(mid == target){
        return target;
    }

    if(mid > target){
        binarySearch(L,mid);
    }

    if(mid < target){
        binarySearch(mid+1,R);
    }
}

binarySearch(1,items.length);