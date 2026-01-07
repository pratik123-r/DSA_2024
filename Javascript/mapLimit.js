const getArraryBatch = (arr, batch) => {
  let ans = [];
  let temp = [];
  for (let index = 0; index < arr.length; index++) {
    if (temp.length === batch) {
      ans.push(temp);
      temp = [];
    }
    temp.push(arr[index]);
  }
  if (temp.length) ans.push(temp);
  return ans;
};

function mapLimit(arr, limit, callback) {
  // return new Promise((reslove, reject) => {
    const batch = getArraryBatch(arr, limit);
    return batch.reduce((prev, curr) => {
      return prev.then((data) => {
        let currResult = [];
        return new Promise((reslove, reject) => {
          curr.forEach((ele) => {
            callback(ele, (err, ans) => {
              if (err) {
                reject(err);
              } else {
                currResult.push(ans);
                if (currResult.length == curr.length)
                  reslove([...data, ...currResult]);
              }
            });
          });
        });
      });
    }, Promise.resolve([]));

  //   finalResult.then(reslove).catch(reject);
  // });
}

let numPromise = mapLimit([1, 2, 3, 4, 5], 3, function (num, callback) {
  setTimeout(function () {
    num = num * 2;
    console.log(num);
    callback(null, num);
  }, 2000);
});

numPromise
  .then((result) => console.log("success:" + result))
  .catch(() => console.log("no success"));


  const inputs = [1, 2, 3, 4, 5];
const limit = 2;


// Mock async function: takes 1 second to finish
// Added a random failure to test error handling
const asyncFn = (n) => new Promise((resolve, reject) => {
   setTimeout(() => {
       if (n === 3) reject('Boom!'); // Simulate failure
       else resolve(n * 2);
   }, 1000);
});


async function mapAsyncLimit(inputs, asyncFn, limit) {
   // Safety check: Ensure at least 1 worker runs
   const concurrency = limit > 0 ? limit : 1;
   let nextItem = 0;
   let result = Array(inputs.length).fill(null);
   async function thread() {
       while (nextItem < inputs.length) {
           // Capture index immediately (Closure safety)
           const currentItem = nextItem++;
           try {
               const res = await asyncFn(inputs[currentItem]);
               result[currentItem] = { status: 'fulfilled', value: res };
           } catch (err) {
               // Prevent one failure from stopping the whole batch
               console.error(`Error at index ${currentItem}:`, err);
               result[currentItem] = { status: 'rejected', reason: err };
           }
       }
   }
   const allPromise = Array(concurrency).fill(null).map(thread);
   console.log(allPromise);
   
   await Promise.all(allPromise);
   return result;
}


mapAsyncLimit(inputs, asyncFn, limit).then((res) => {
   console.log('Final Output:');
   console.log(res);
});


