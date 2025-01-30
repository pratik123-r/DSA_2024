function memo(func) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args); // Use arguments as a cache key
        if (cache.has(key)) {
            console.log("Fetching from cache for args:", args);
            return cache.get(key);
        }

        console.log("Computing result for args:", args);
        const result = func(...args);
        cache.set(key, result);
        return result;
    };
}

// Example usage: A slow function
function slowAdd(a, b) {
    // Simulating a slow operation
    for (let i = 0; i < 1e9; i++) {}
    return a + b;
}

// Memoized version of slowAdd
const memoizedAdd = memo(slowAdd);

// Test memoization
console.log(memoizedAdd(2, 3)); // Computes result, logs "5"
console.log(memoizedAdd(2, 3)); // Fetches from cache, logs "5"
console.log(memoizedAdd(4, 5)); // Computes result, logs "9"
console.log(memoizedAdd(4, 5)); // Fetches from cache, logs "9"
