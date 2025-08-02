global.timeoutIds = [];
global.clearAllTimeout = function () {
  while (timeoutIds.length) {
    clearTimeout(timeoutIds.pop());
  }
};
global.timoutfn = setTimeout;

global.setTimeout = function (fn, delay) {
  timeoutIds.push(timoutfn(fn, delay));
};

setTimeout(() => {
  console.log("hell0");
}, 200);

setTimeout(() => {
  console.log("hell0");
}, 400);

setTimeout(() => {
  global.clearAllTimeout();
}, 500);

setTimeout(() => {
  console.log("hell0");
}, 800);
