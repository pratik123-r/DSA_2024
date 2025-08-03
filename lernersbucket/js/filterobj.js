// Input:
const obj = {
  a: 1,
  b: {
    c: "Hello World",
    d: 2,
    e: {
      f: {
        g: -4,
      },
    },
    h: "Good Night Moon",
  },
};

const filter = (s) => typeof s === "string";

// Output:
// {
//   b: {
//     c: "Hello World",
//     h: "Good Night Moon",
//   }
// };

const filterObj = (object, filter) => {
  for (const key in object) {
    if (typeof object[key] === "object") {
      filterObj(object[key], filter);
    } else {
      if (!filter(object[key])) delete object[key];
    }
    if(object[key] && !Object.keys(object[key]).length)
            delete object[key];
  }
};

filterObj(obj, filter)

console.log(JSON.stringify(obj));

