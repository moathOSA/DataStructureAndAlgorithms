const nums = [-1,0,3,5,9,12];

function search(nums,target){
    return binarySearch(0,nums.length-1,nums,target);
}
function binarySearch(start,end,nums,target){
    if(start == end){
        return -1;
    }

    let mid = Math.floor((start + end)/2);

    if(nums[mid] == target){
        return mid;
    }
    
    if(nums[mid] < target){
        binarySearch(mid+1, end, nums,target)
    }
    
    if(nums[mid] > target){
        binarySearch(start, mid, nums,target)
    }
}

search(nums,9);