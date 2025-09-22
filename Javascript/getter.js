function get(obj, path) {
    let result = obj;
    path = path.replaceAll('[', '.').replaceAll(']', '').split('.')    
    for (let i = 0; i < path.length; i++) {
          if(!result[path[i]])
                return 'NA'
          result = result[path[i]]
    }
    return result
}

const data = {
    user: {
          posts: [
                { id: 1, comments: [{ text: "Hello" }] }
          ]
    }
};

console.log(get(data, "user.posts[0].comments[0].text"));
console.log(get(data, "user.posts[1].id", "no post"));