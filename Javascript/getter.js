function get(obj, path) {
    let result = obj;
    let newPath = ''
    for (let i = 0; i < path.length; i++) {
          let char = ''
          if(path[i] == '[')
                char = '.'
          else if(path[i] == ']') {
                char = ''
          }
          else 
                char = path[i]
         newPath += char
          
    }
    path = newPath.split('.')
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