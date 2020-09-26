let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length);
secretMessage.pop();
console.log(secretMessage.length);

secretMessage.push('to', 'program');

secretMessage[7] = 'right';

secretMessage.shift();
console.log(secretMessage.length);

secretMessage.unshift('programming');

secretMessage.slice(6,10);
console.log(secretMessage.slice(6,10));

secretMessage.splice(6,5,'know,');


console.log(secretMessage.join(' '));
