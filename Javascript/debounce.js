// Debounce call an api when the time betweem two key press is exceed 300 ms

function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => func(...args), delay)
    }
}

let logmessage = (message) => {
    console.log(message);
}

let debouncedLogMessage = debounce(logmessage, 300);

// Test debounced function
debouncedLogMessage("x");
debouncedLogMessage("y");
debouncedLogMessage("z");

setTimeout(() => {
    debouncedLogMessage("a");
}, 100);
setTimeout(() => {
    debouncedLogMessage("b");
}, 100);
setTimeout(() => {
    debouncedLogMessage("c");
}, 100);
setTimeout(() => {
    debouncedLogMessage("finally");
}, 1000);

// Throttling calls a api when two function call exceed 300 ms

function throttle(func, interval) {
  let lastCall = 0;
  let timeout = null;

  return function (...args) {
    const now = new Date().getTime();

    if (!lastCall) {
      lastCall = now;
      func(...args);
    } else {
      clearTimeout(timeout); 
      timeout = setTimeout(() => {
        lastCall = new Date().getTime();
        func(...args);
      }, interval - (now - lastCall));
    }
  };
}



// Example usage
const logMessage = (message) => {
  console.log(message, "at", new Date().toLocaleTimeString());
};

// Throttle the `logMessage` function with a 1000ms (1-second) interval
const throttledLogMessage = throttle(logMessage, 1000);

// Simulate rapid calls
throttledLogMessage("First"); // Executes immediately
throttledLogMessage("Second"); // Ignored
throttledLogMessage("Third"); // Ignored

setTimeout(() => throttledLogMessage("Fourth"), 1000); // Executes after 1 second
setTimeout(() => throttledLogMessage("Fifth"), 1500); // Ignored (still within throttle period)
setTimeout(() => throttledLogMessage("Sixth"), 2000); // Executes after 2 seconds
