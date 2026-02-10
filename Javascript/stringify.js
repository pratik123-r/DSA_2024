function stringify(obj) {
  // Handle null
  if (obj === null) return "null";

  // Handle arrays
  if (Array.isArray(obj)) {
    const items = obj.map(item => stringify(item));
    return `[${items.join(",")}]`;
  }

  // Handle objects
  if (typeof obj === "object") {
    const keys = Object.keys(obj);
    const items = keys.map(key => `"${key}":${stringify(obj[key])}`);
    return `{${items.join(",")}}`;
  }

  // Handle strings
  if (typeof obj === "string") {
    return `"${obj}"`;
  }

  // Handle numbers / booleans
  if (typeof obj === "number" || typeof obj === "boolean") {
    return String(obj);
  }

  // Handle undefined / functions / symbols
  return "null";
}

const data = {
  name: "Pratik",
  skills: ["Node", "Mongo", { db: "Redis" }],
  exp: 5,
  active: true
};

console.log(JSON.parse(stringify(data)));


