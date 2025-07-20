let count = 0;
const apiCall = (parms) => {
  count++;
  if (count == 4) {
    return new Promise((res, rej) => res(parms));
  }
  return new Promise((res, rej) => rej(new Error("We have an exception...")));
};

const retryPromis = async (promise, retry) => {
    try {
      let ans = await promise();
      return ans;
    } catch (error) {
      if (retry == 0) {
        throw error
      } else {
          return retryPromis(promise, retry-1)
      }
    }

//   for (let index = 0; index < retry; index++) {
//     try {
//       let ans = await promise();
//       return ans;
//     } catch (error) {
//       if (index == retry - 1) {
//         throw error
//       }
//     }
//   }
};

const compute = async () => {
  try {
    const ans = await retryPromis(() => apiCall("123"), 5);
    console.log(ans);
  } catch (error) {
    console.log(error.message);
  }
};
compute();
