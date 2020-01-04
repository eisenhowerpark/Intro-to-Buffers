var buf = new Buffer('Hello', 'utf-8');
// Take this string and convert it into binary using utf-8 encoding.

// There are many buffer functions globally available within Node.JS
// Buffers may have their size passed into them, or some other data - in this case, a STRING and
// the encoding. UTF-8 is actually the default encoding, so it's not necessary to include it.

console.log(buf);
// What does our buffer look like?
// Prints: <Buffer 48 65 6c 6c 6f> which is "Hello" in Hexidecimal, but it's stored in binary.

console.log(buf.toString());
// Prints: "Hello"

console.log(buf.toJSON());
// Prints a JSON of this Buffer containing  H E L L O  as array [72, 101, 108, 108, 111]

console.log(buf[2]);
// Prints 108, where 108 is the third array item (2) because Buffers behave like arrays.

buf.write('jo');
console.log(buf.toString());
// Prints "jollo" because buf.write overwrote the first 2 array items with "jo".
// This is because buffers are meant to contain finite data chunks for short periods.


