# mathlib-n

 **mathlib-n** is a math library
which can solve our simple and day to day lifes problem. like :
 - A number is **odd** or not.
 - A number is **prime** or not.
 - Memories data as an array or  a number, dememorise (getting memoriesed data) and delete unexpected memory by its user name.
 - Solve a **quadratic** equation ( ax<sup>2</sup> + bx + c = 0 )
 - Or  solving a **linear** equation ( ax + by = c ) etc.

like those features, it has more than 70 features (including built-in Math object).


## uses

### math
```js
const math = require('mathlib-n');
```
### fix user
```linux
$ npm run fix-usr --prefix node_modules/mathlib-n
```
## content table
|Title|input types|works|
|:----:|:---------:|:----:|
|age()|year, month , date, customDate ((optional)(an array contains year month,date))|calculate the gap between 2 dates|
|avarage()|2 or more than 2 numbers|calculate the avarage of numbers|
|c2Fr()|celcius as a number|convert celcius to fahrenheit|
|caller()|a string contains number and accessable units|call the write converter and convert|
|combo()|a number as n and a number as r|findout the combination(<sup>n</sup>**C**<sub>r</sub>)|
|cm2In()|centimeter as a number|return the value in inch|
|dememo()|name of user as string, asynchronous as boolean(optional) and if it is asynchronous then a callback function|return the memoriesed data|
|delmemo()|as demomo()|delete the memoriesed data|
|deg2Rad()|degree as a number or as a string in this formate : `12°16′8″`|convert it into a radian value|
|fact()|a Natural number or 0 (0,1,2,3....)|return the factorial|
|fr2C()|fahrenheit as a number|convert it into celcius|
|ft2M()|feet as a number|convert  it into meter|
|in2Cm()|inch as a number|convert inch to centimeter|
|km2Mile()|kilometer as a number|convert into mile|
|leapYear()|year as a number|return the year is leapYear or not|
|linearEq() ( ax + by = c )|first\_Equation as an array like : [a,b,c] and second\_Equation as an array like : [a,b,c]|solve those equation and return the cross-point of those equation as an ***array***|
|logx() (log<sub>base</sub>angle)|base as a number greater than  0 and not 1 and angle as a number greater than 0|return the logarithm of custom|
|memo()|a number or an array im the number parameter , name as a string ,asynchronous as a boolean and if asynchronous is true then callback as a function|memorise a number or an array|
|m2Ft()|meter as a number|convert meter into feet|
|mile2Km()|mile as a number|convert into kilometer|
|multiply()|get more than 2 numbers to multiply|return multiplyed number|
|odd()|a Natural number|return a number is odd or not|
|permut()|n as a number and r as a number|findout the permutation (<sup>n</sup>**P**<sub>r</sub>) of a number|
|prime()|a Natural number|return the number is prime or not|
|qudrt() ( ax<sup>2</sup> + bx + c = 0 )|an array like : \[a,b,c\]| return an ***array*** of the solved numbers|
|rand()|mimimum as the lowest number, maximum as a highest number and type as a number or null(optional)|return a random number between  minimum and maximum|
|sum()|more than 2 number|return summation of number|
|sums()|end as a Natural number and start as a Natural number(optional | default 0 )| return a summation from start to end|
|tringle()|3 **array** contains the like : [x,y]|return a ***object*** contains many information about that tringle|