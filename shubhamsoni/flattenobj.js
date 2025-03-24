const user = {
    name: "Vishal",
    age: null,
    address: {
        primary: {
            house: "109",
            street: {
                main: "21",
                cross: null,
            },
        },
        secondary: null,
    },
    phones: [
        { type: "home", number: "1234567890" },
        { type: "work", number: null },
    ],
    preferences: null,
};

const flatten = (obj, path = '') => {
    let ans = {};
    for (const key in obj) {        
        const newPath = path ? `${path}_${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            ans = { ...ans, ...flatten(obj[key], newPath) }
        } else {
            ans[newPath] = obj[key];
        }
    }
    return ans;
}


console.log(flatten(user, ''));




async function test() {
    const x = await new Promise((reslove, reject) => setTimeout(() => reslove('helo'), 1000))
    console.log("here", x);
    
}
test()