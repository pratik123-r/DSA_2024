const promiseStaus = {
  reslove: "reslove",
  reject: "reject",
  pending: "pending",
};

class MyPromise {
  status = promiseStaus["pending"];
  thenCbs = [];
  catchCbs = [];
  value = null;

  constructor(cb) {
    try {
      cb(this.reslove, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }

  runAllCb = () => {
    if (this.status == promiseStaus.reslove) {
        this.thenCbs.forEach((cb) => cb(this.value))
        this.thenCbs = []
    } else if (this.status == promiseStaus.reject) {
        this.catchCbs.forEach((cb) => cb(this.value))
        this.catchCbs = []
    }
  }

  reslove = (val) => {
    if (val instanceof MyPromise) {
      val.then(this.reslove, this.reject);
      return;
    }
    this.value = val;

    this.status = promiseStaus["reslove"];
    queueMicrotask(this.runAllCb);
  };

  reject = (val) => {
    if (val instanceof MyPromise) {
      val.then(this.reslove, this.reject);
      return;
    }
    this.value = val;

    this.status = promiseStaus["reject"];
    queueMicrotask(this.runAllCb);
  };

  then = (thenCb, catchCb) => {
    return new MyPromise((res, rej) => {
      this.thenCbs.push((val) => {
        if (!thenCb) res(val);
        try {
          const ans = thenCb(val);
          return ans instanceof MyPromise ? ans.then(res, rej) : res(ans);
        } catch (error) {
          rej(error);
        }
      });

      this.catchCbs.push((val) => {
        if (!catchCb) rej(val);
        try {
          const ans = catchCb(val);
          return ans instanceof MyPromise ? ans.then(res, rej) : res(ans);
        } catch (error) {
          rej(error);
        }
      });
    });
  };

  catch = (catchCb) => {
    this.then(null, catchCb);
  };
}

new MyPromise((res, rej) => {
    res(1)
}).then((ans) => {
    console.log(ans);
    
}).then((ans) => {
    console.log(ans);
    
})
