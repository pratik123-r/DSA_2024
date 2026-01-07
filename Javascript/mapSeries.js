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

// Promise.resolve([])                     // Start
//   .then(val => {
//     // 1️⃣ Process first item
//     return new Promise((resolve, reject) => {
//       // ... async operation 1 ...
//       resolve([...val, "result1"]);
//     });
//   })
//   .then(val => {
//     // 2️⃣ Process second item
//     return new Promise((resolve, reject) => {
//       // ... async operation 2 ...
//       resolve([...val, "result2"]);
//     });
//   })
//   .then(val => {
//     // 3️⃣ Process third item
//     return new Promise((resolve, reject) => {
//       // ... async operation 3 ...
//       resolve([...val, "result3"]);
//     });
//   })
//   .then(finalArray => {
//     // ✅ All done
//     console.log(finalArray); // ["result1", "result2", "result3"]
//   })
//   .catch(err => {
//     console.error("Error:", err);
//   });



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