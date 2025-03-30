const STATE = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected',
};

class MyPromise {
    thenCbs;
    catchCbs;
    state = STATE.PENDING;

    constructor(cb) {
        try {
            cb(this.resolve, this.reject)
        } catch (error) {
            this.reject(error)
        }
    }


    resolve = (val) => {
        this.state = STATE.FULFILLED
        if (this.thenCbs)
            this.thenCbs(val)
    };

    reject = (val) => {
        this.state = STATE.REJECTED
        if (this.catchCbs)
            this.catchCbs(val)

    };

    then = (thenCb, catchCb) => {
        return new MyPromise((reslove, reject) => {
            this.thenCbs = (val) => {
                if (!thenCb) {
                    reslove(val)
                    return
                }
                const result = thenCb(val);
                if (result instanceof MyPromise) {
                    result.then(reslove, reject)
                    return
                }
                reslove(result)
            }
            this.catchCbs = (val) => {
                if (!catchCb) {
                    reject(val)
                    return
                }
                const result = catchCb(val);
                if (result instanceof MyPromise) {
                    result.then(reslove, reject)
                    return
                }
                reject(result)
            }
        })

    };

    catch = (cb) => {
        this.then(null, cb)
    };


}

new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(34);
    }, 2000);
})
    .then((val) => {
        console.log("a",val);
        return val + 1;
    })
    .then((val) => {
        console.log("b", val);
        // return val
        return new MyPromise((resolve, reject) => {
            setTimeout(() => {
                resolve(val + 1);
            }, 4000);
        }).then((val) => val+1);
    })
    .then((val) => {
        console.log("c", val);

        return val + 1
    })
    .then()
    .then((val) => {
        console.log("d", val);
    })
    .catch((err) => {
        console.log("err", err);
    });


Promise.myAll = function (promises) {
    return new Promise((res, rej) => {
        if (!Array.isArray(promises)) {
            return reject(new TypeError("Argument must be an array"));
        }
        let results = [];
        let completed = 0;
        let total = promises.length;

        if (total === 0) {
            return resolve([]);
        }

        promises.forEach((promise, index) => {
            promise.then((data) => {
                results[index] = data
                completed++
                if (completed === total)
                    res(results)
            }).catch(rej)
        })
    })
}

Promise.myAllSettled = function (promises) {
    return new Promise((resolve) => {
        if (!Array.isArray(promises)) {
            throw new TypeError("Argument must be an array");
        }
        let results = [];
        let completed = 0;
        let total = promises.length;

        if (total === 0) {
            return resolve([]);
        }

        promises.forEach((promise, index) => {
            promise
                .then(value => {
                    results[index] = { status: "fulfilled", value };
                })
                .catch(reason => {
                    results[index] = { status: "rejected", reason };
                })
                .finally(() => {
                    completed++;
                    if (completed === total) {
                        resolve(results);
                    }
                });
        });
    });
};

Promise.myRace = function (promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            throw new TypeError("Argument must be an array");
        }

        promises.forEach((promise, index) => {
            promise
                .then(value => {
                    resolve(value)
                })
                .catch(reason => {
                    reject(reason)
                })
        });
    });
};


Promise.myAny = function (promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            throw new TypeError("Argument must be an array");
        }

        let errors = [];
        let rejectedCount = 0;
        let total = promises.length;

        if (total === 0) {
            return reject(new AggregateError([], "All promises were rejected"));
        }

        promises.forEach((promise, index) => {
            promise
                .then(resolve)
                .catch(error => {
                    errors[index] = error;
                    rejectedCount++;
                    if (rejectedCount === total) {
                        reject(new AggregateError(errors, "All promises were rejected"));
                    }
                });
        });
    });
};

const promise1 = new Promise((resolve) => setTimeout(() => resolve(10), 3000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(20), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(30), 1000));
const promise4 = Promise.reject("Error");


// Successful case
Promise.myAll([promise1, promise2, promise3])
    .then(results => console.log("Success:", results)) // Expected: [10, 20, 30]
    .catch(error => console.log("Error:", error));

// Failure case
Promise.myAll([promise1, promise4, promise2])
    .then(results => console.log("Success:", results))
    .catch(error => console.log("Error:", error)); // Expected: "Error"

// allSettled test case
Promise.myAllSettled([promise1, promise2, promise4])
    .then(results => console.log("All Settled:", results));
// Expected: [ { status: "fulfilled", value: 10 }, { status: "fulfilled", value: 20 }, { status: "rejected", reason: "Error" } ]

// race test case
Promise.myRace([promise1, promise3, promise2])
    .then(result => console.log("Race Winner:", result))
    .catch(error => console.log("Error:", error));

    Promise.any([promise4, promise2, promise1])
    .then(result => console.log("Any Winner:", result)) 
    .catch(error => console.log("Error:", error));
