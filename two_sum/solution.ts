function twoSum(nums: number[], target: number): number[] {
    // Initializatuon of new Map. Difference is used as a map key here and array index as a map value.
    const map: Map<number, number> = new Map();

    // Iteration through all numbers
    for(let i = 0; i < nums.length; i++) {
        // We check if difference was added to the Map in previous iterations
        // If so our solution is our current i and value stored in Map where difference is used as a Map key
        if(map.has(nums[i])) {
            return [map.get(nums[i])!, i]
        }

        // We use difference after substraction of variable target and nums[i] on i index as a map key and actual loop counter(i) as a value
        map.set(target-nums[i], i)

    }


    return []
}