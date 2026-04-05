function match(pattern, content) {
    return content.match(pattern);
}

let content = 'abc123def'
let pattern = '[0-9]+';
console.log(match(pattern, content))