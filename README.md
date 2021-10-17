# mathlib
a dynamic library of math which has 70+ features. And it can access the built-in "Math" object.
# author
Maruf Hasan
# installation
```
git clone https://github.com/bicitrobiggan/mathlib.git && cd ../
```
# uses

First define the math object.
```
const math = require('./mathlib/index.js');
```
Then you can use any of its function or constant by call them from the math object. Like : 
```
let factorialResult = math.frac(9);
console.log(factorialResult);
```
expected output is : 362880


