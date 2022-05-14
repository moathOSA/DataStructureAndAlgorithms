const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function search(items,target){
    return binarySearch(1,items.length,target);
}
function binarySearch(L,R,target){
    if(L == R){
        return false;
    }

    let mid = Math.floor((L + R)/2);

    if(mid == target){
        return target;
    }

    if(mid > target){
        binarySearch(L,mid,target);
    }

    if(mid < target){
        binarySearch(mid+1,R,target);
    }
}

search(items,5);