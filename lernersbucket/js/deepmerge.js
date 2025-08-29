let obj1 = {
  name: "prashant",
  age: 23,
  nature: {
    helping: true,
    shy: false,
    name: "pratik",
    town: {
      name: "zampo",
      psd: "D",
      arr: [1,3,4]
    },
  },
};

let obj2 = {
  qualification: "BSC CS",
  loves: "Javascript",
  nature: {
    angry: false,
    shy: true,
    name: "raj",
    town: {
      name: "naredi",
      age: 56,
      arr: [1,2]
    },
  },
};

function merge(obj1, obj2) {
  for (const key in obj2) {
    if (typeof obj2[key] === "object" && typeof obj2[key] === "object") {
        merge(obj1[key], obj2[key]);
    } else {
      obj1[key] = obj2[key];
    }
  }
  return obj1;
}

//Shallow merge
console.log(JSON.stringify(merge(JSON.parse(JSON.stringify(obj1)), obj2), null, 4));
// console.log(obj1);

