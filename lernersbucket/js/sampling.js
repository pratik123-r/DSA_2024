function sampler(fn, count, context) {
    let counter = 0;

    return function (...args) {
        context = context || this ;

        if (++counter !== count) return;

        fn.apply(context, args);
        counter = 0;
    };
}


const obj = {
  name: "Car",
  log() {
    console.log(this.name);
  }
};

const sampled = sampler(obj.log, 3, obj);
sampled(); // won't log
sampled(); // won't log
sampled(); // logs "Car"
sampled(); // won't log
sampled(); // won't log
sampled(); // logs "Car"