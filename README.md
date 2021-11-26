# mathlib-n

 **mathlib-n** is a math library
which can solve our simple and day to day lifes problem. like :
 - A number is **odd** or not.
 - A number is **prime** or not.
 - **Memories** data as an **array** or  a number by , **dememorise** (getting memoriesed data) and **delete** unexpected memory by its user name.
 - Solve a **quadratic** equation ( ax<sup>2</sup> + bx + c = 0 )
 - Or  solving a **linear** equation ( ax + by = c ) etc.

like those features, it has more than 100 features and constants (including built-in Math object).

## author
 Maruf Hasan
 
 - my profile

![My profile](https://github.com/bicitrobiggan/bicitrobiggan/blob/7893242121c9661f7aa557a5175bf039abfbe06a/my-profile.jpg)

- about 
  - I am a student in ***Khulna Public Collage, Boyra, Khulna, Bangladesh***.
  - I am **Bangladeshi**.
  - and I am a **Muslim**.
## installation
```sh
$ npm i mathlib-n
```
### cheak installation
```posh
$ npm run test --prefix node_modules/mathlib-n
```
Expected output : `mathlib-n version 1.4.0`

## uses

```js
const math = require('mathlib-n');
```
### fix memory
 **Be sure that, you don't use any synchronise loop like for or while loop with asynchronous memo()**
 if you use that, the memory will ruined. Then you should do this work :
 
```ps
$ npm run fix-memo --prefix node_modules/mathlib-n
```
if there is a message like : `mathlib-n : ready to use` then you are good to go.

## Keywords
  - math 
  - mathlib-n 
  - mathLib 
  - math library 
  - mathlib
  - mathlibjs
  - mathjs

## content table
|Title|input types|works|
|:----:|:---------:|:----:|
|age()|year, month , date, customDate ((optional)(an **array** contains year month,date))|calculate the gap between 2 dates and return an **object**|
|avarage()|2 or more than 2 numbers|calculate the avarage of numbers|
|c2Fr()|celcius as a number|convert celcius to fahrenheit|
|caller()|a string contains number and accessable units|call the write converter and convert|
|combo()|a number as n and a number as r|findout the combination(<sup>n</sup>**C**<sub>r</sub>)|
|cm2In()|centimeter as a number|return the value in inch|
|dememo()|name of user as string, asynchronous as boolean(optional) and if it is asynchronous then a callback function|return the memoriesed data|
|delmemo()|as demomo()|delete the memoriesed data|
|deg2Rad()|degree as a number or as a string in this formate : `12°16′8″`|convert it into a radian value and return an **object**|
|fact()|a Natural number or 0 (0,1,2,3....)|return the factorial|
|fr2C()|fahrenheit as a number|convert it into celcius|
|ft2M()|feet as a number|convert  it into meter|
|in2Cm()|inch as a number|convert inch to centimeter|
|km2Mile()|kilometer as a number|convert into mile|
|leapYear()|year as a number|return the year is leapYear or not|
|linearEq() ( ax + by = c )|first\_Equation as an **array** like : [a,b,c] and second\_Equation as an **array** like : [a,b,c]|solve those equation and return the cross-point of those equation as an **array**|
|logx() (log<sub>base</sub>angle)|base as a number greater than  0 and not 1 and angle as a number greater than 0|return the logarithm of custom|
|memo()|a number or an **array** im the number parameter , name as a string ,asynchronous as a boolean and if asynchronous is true then callback as a function|memorise a number or an array|
|m2Ft()|meter as a number|convert meter into feet|
|mile2Km()|mile as a number|convert into kilometer|
|multiply()|get more than 2 numbers to multiply|return multiplyed number|
|multiAngelArea()|3 or more **arrays** contains number like : [x,y]|return the area of that shape|
|odd()|a Natural number|return a number is odd or not|
|permut()|n as a number and r as a number|findout the permutation (<sup>n</sup>**P**<sub>r</sub>) of a number|
|prime()|a Natural number|return the number is prime or not|
|qudrt() ( ax<sup>2</sup> + bx + c = 0 )|an **array** like : \[a,b,c\]| return an ***array*** of the solved numbers|
|rand()|mimimum as the lowest number, maximum as a highest number and type as a number or null(optional)|return a random number between  minimum and maximum|
|rad2Deg()|a number or a string contains numerical values an a π, like : `1.3452797π` or `3π/2`|return an **array** contains [degree,minute,second]|
|cursorquadArea()|4 **arrays** contains number like : [x,y]|return area of the quadangle|
|rootx() (<sup>power</sup>√base)|power as a float or an integer number|return the root of a number|
|quadLines()|same as ***quadArea()***|return the lines width of the quadangle as an **object**|
|quadAngles()|same as ***quadAngle()***|return the angles of the quadangle as an **object**|
|sum()|more than 2 number|return summation of number|
|sums()|end as a Natural number and start as a Natural number(optional \| default 0 )| return a summation from start to end|
|tringle()|3 **arrays** contains number like : [x,y]|return an **object** contains many information about that tringle|
|tringleArea()|same as ***tringle***|return area of tringle|
|tringleLines()|same as ***tringle***|return length of lines or sides as an **object**|
|tringleAngles()|same as ***tringle***|return the angles as an **object**|

[and many more....](https://github.com/bicitrobiggan/mathlib)

## Licence
MIT

## History
- main version (^2.0.0) :
  + 2.24.49 (latest version) :
    - refine constant values
    - add more constants
    - fixed and extended core functions : ***tanx()***, ***sinx()*** etc.
    - add more features to 110+ features of mathlib
    - add **Licence** field
  + 2.0.27 :
    - add constants
    - add many more features to 100+ features
    - add extended core function : 
      + **logx()**
      + **rootx()** etc.
- main version (^1.0.0) :
  + 1.4.1 :
    - some bug fix
  + 1.4.0 :
    - add more features and then mathlib has 80+ features
  + 1.0.2 :
    - fix bugs
  + 1.0.0 : 
    - initial version with 70+ features