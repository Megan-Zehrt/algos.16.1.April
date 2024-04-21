// 2824. Count Pairs Whose Sum is Less that Target

var countPairs = function(nums, target) {
    let count = 0;

    function helper(arr, target, current) {
        for (let compare = current + 1; compare < arr.length; compare++) {
            if (arr[current] + arr[compare] < target) {
                count++;  // Increment count for each valid pair
            }
        }
    }

    for (let i = 0; i < nums.length - 1; i++) {
        helper(nums, target, i);  // Call helper function for each index in nums
    }

    return count;
};