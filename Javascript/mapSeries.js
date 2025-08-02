function mapSeries(arr, callback) {
  return arr.reduce((prev, curr) => {    
    return prev.then((val) => {
      return new Promise((resolve, reject) => {
        callback(curr, function (err, ans) {
          if (err) {
            reject(err); 
          } else {
            resolve([...val, ans]); 
          }
        });
      });
    });
  }, Promise.resolve([]));
}


let numPromise = mapSeries([1, 2, 3, 4, 5], function (num, callback) {
  setTimeout(function () {
    num = num * 2;
    console.log(num);
    callback(null, num);
  }, 2000);
});

numPromise
  .then((result) => console.log("success:" + result))
  .catch(() => console.log("no success"));

//   new Promise((res, rej) => {
//   res("dkdk");
// })
//   .then((data) => {
//     return new Promise((res, rej) => {
//       res("dhdh");
//     }).then((data) => {
//       return new Promise((res, rej) => {
//         res(data);
//       });
//     });
//   })
//   .then((data) => {
//     console.log(data);
//   });