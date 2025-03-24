// let promise = new Promise((reslove, reject) => {

//     reslove("a")

// }).then((val)=>{
//     console.log(val);
//    return new Promise((res,rej)=>{
//     rej("s")
//    }).catch((err)=>{
//     console.log(err);

//    })
// }).then((val)=>(
//     console.log('prstik',val)
// )).catch((err) => {
//     console.log("in error");

// })
let count = 0;
const STATE = {
    FULFILLED: "fulfilled",
    REJECTED: "rejected",
    PENDING: "pending",
}

class MyPromise {
    #thenCbs = []
    #catchCbs = []
    #state = STATE.PENDING
    #value
    #onSuccessBind = this.#onSuccess.bind(this)
    #onFailBind = this.#onFail.bind(this)

    constructor(cb) {
        try {
            cb(this.#onSuccessBind, this.#onFailBind)
        } catch (e) {
            this.#onFail(e)
        }
    }

    #runCallbacks() {
        if (this.#state === STATE.FULFILLED) {
            this.#thenCbs.forEach(callback => {
                callback(this.#value)
            })

            this.#thenCbs = []
        }

        if (this.#state === STATE.REJECTED) {
            this.#catchCbs.forEach(callback => {
                callback(this.#value)
            })

            this.#catchCbs = []
        }
    }

    #onSuccess(value) {

        if (this.#state !== STATE.PENDING) return

        if (value instanceof MyPromise) {
            value.then(this.#onSuccessBind, this.#onFailBind)
            return
        }

        this.#value = value
        this.#state = STATE.FULFILLED
        this.#runCallbacks()

    }

    #onFail(value) {

        if (this.#state !== STATE.PENDING) return

        if (value instanceof MyPromise) {
            value.then(this.#onSuccessBind, this.#onFailBind)
            return
        }

        if (this.#catchCbs.length === 0) {
            throw new UncaughtPromiseError(value)
        }

        this.#value = value
        this.#state = STATE.REJECTED
        this.#runCallbacks()

    }

    then(thenCb, catchCb) {
        console.log(thenCb, count++);

        return new MyPromise((resolve, reject) => {
            this.#thenCbs.push(result => {
                if (thenCb == null) {
                    resolve(result)
                    return
                }

                try {
                    resolve(thenCb(result))
                } catch (error) {
                    reject(error)
                }
            })

            this.#catchCbs.push(result => {
                if (catchCb == null) {
                    reject(result)
                    return
                }

                try {
                    resolve(catchCb(result))
                } catch (error) {
                    reject(error)
                }
            })

            this.#runCallbacks()
        })
    }

    catch(cb) {
        return this.then(undefined, cb)
    }

    finally(cb) {
        return this.then(
            result => {
                cb()
                return result
            },
            result => {
                cb()
                throw result
            }
        )
    }

    static resolve(value) {
        return new Promise(resolve => {
            resolve(value)
        })
    }

    static reject(value) {
        return new Promise((resolve, reject) => {
            reject(value)
        })
    }

    static all(promises) {
        const results = []
        let completedPromises = 0
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                const promise = promises[i]
                promise
                    .then(value => {
                        completedPromises++
                        results[i] = value
                        if (completedPromises === promises.length) {
                            resolve(results)
                        }
                    })
                    .catch(reject)
            }
        })
    }

    static allSettled(promises) {
        const results = []
        let completedPromises = 0
        return new MyPromise(resolve => {
            for (let i = 0; i < promises.length; i++) {
                const promise = promises[i]
                promise
                    .then(value => {
                        results[i] = { status: STATE.FULFILLED, value }
                    })
                    .catch(reason => {
                        results[i] = { status: STATE.REJECTED, reason }
                    })
                    .finally(() => {
                        completedPromises++
                        if (completedPromises === promises.length) {
                            resolve(results)
                        }
                    })
            }
        })
    }

    static race(promises) {
        return new MyPromise((resolve, reject) => {
            promises.forEach(promise => {
                promise.then(resolve).catch(reject)
            })
        })
    }

    static any(promises) {
        const errors = []
        let rejectedPromises = 0
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                const promise = promises[i]
                promise.then(resolve).catch(value => {
                    rejectedPromises++
                    errors[i] = value
                    if (rejectedPromises === promises.length) {
                        reject(new AggregateError(errors, "All promises were rejected"))
                    }
                })
            }
        })
    }
}

new MyPromise((reslove, reject) => {
    console.log('ss');

    reslove('2')
}).then((value) => {
    return new MyPromise((reslove, reject) => {
        setTimeout(() => {
            reslove(value + '3')
        }, 1000)
    })
}).then((value) => {
    console.log(JSON.stringify(value));

    return value + 88

}).then((value) => {
    console.log(value);


}).catch((err) => {
    console.log('dj', err);

})



let obj = {
    a: {
        b: {
            c: {
                d: 'jdjjd'
            }
        },
        p: {
            q: 'r'
        }
    },
    x: {
        y: 'z'
    }

}

const flatten = (obj, path = '') => {
    let ans = {};
    for (const key in obj) {
        const newPath = path ? `${path}_${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            ans = {...ans, ...flatten(obj[key], newPath)}
        } else {
            ans[newPath] = obj[key];
        }
    }
    return ans;
}


console.log(flatten(obj, ''));







