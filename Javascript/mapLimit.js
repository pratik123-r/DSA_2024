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
  return new Promise((reslove, reject) => {
    const batch = getArraryBatch(arr, limit);
    const finalResult = batch.reduce((prev, curr) => {
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

    finalResult.then(reslove).catch(reject);
  });
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
