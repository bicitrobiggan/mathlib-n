# mathlib-n

## version

[Github](https://github.com/bicitrobiggan/mathlib-n.git) : letest and unstable version

npm : 3.2.0 (stable version and recommended)

**mathlib-n** is a math library
which can solve our simple and day to day lifes problem. like :

- A number is **odd**, **prime** etc or not.
- **Memories** data as an **array** or a number by , **dememorise** (getting memoriesed data) and **delete** unexpected memory by its user name.
- Solve a **quadratic** equation ( ax<sup>2</sup> + bx + c = 0 ) or a **linear** equation ( ax + by = c , a<sub>2</sub>x + b<sub>2</sub>y = c<sub>2</sub>)
- Mesurementing area, length, angle etc. of any shape by their Vertex point only.
- About 20 esential constants

like those features, it has more than 100 features and constants (including built-in Math object).

## author

Maruf Hasan

- my profile

![My Iamge](https://github.com/bicitrobiggan/bicitrobiggan/blob/7893242121c9661f7aa557a5175bf039abfbe06a/my-profile.jpg)

- about
  - I am a student in **_Khulna Public Collage, Boyra, Khulna, Bangladesh_**.
  - I am **Bangladeshi**.
  - and I am a **Muslim**.

## installation

```sh
npm i mathlib-n
```

### cheak installation

```ps
npm run test --prefix node_modules/mathlib-n
```

Expected output : `mathlib-n version 3.0.01`

## uses

```js
const math = require("mathlib-n");
```

### fix memory

**Be sure that, you don't use any synchronise loop like for or while loop with asynchronous memo()**.
if you use that, the memory will ruined. Then you should do this work :

```ps
npm run fix-memo --prefix node_modules/mathlib-n
```

there will be an animation of `MathLib` ,but you can skip it by pressing `ctrl + c` for windows and `cmd + c` for mac. But if you continue with the animation you can know the current mood and status and you can also know about your records and trushes.

### change or intalige mood

Two moods are available now on mathlib-n. They are science and fix mood. `sci` for science and `fix` for fix mood. and status is the count of how many number will be after decimal.

```ps
npm run moodchanger --prefix node_modules/mathlib-n
```

There will be an animation of `MathLib` ,but you can skip it by pressing `ctrl + c` for windows and `cmd + c` for mac. But if you continue with the animation you can know the current mood and status and you can also know about your records and trushes.

## Keywords

- math
- mathlib-n
- mathLib
- math library
- mathlib
- mathlibjs
- mathjs

## content table

### Main documentation

[Documentation](https://marufhasan24.github.io/mathlib_wiki2/wiki.html)

### Some Extras

[Comming soon...](https://marufhasan24.github.io/mathlib_wiki2/extras.html)

**A little description** :

- `math.info` : It will preasent a query data of mathlib-n laibrary as a javascript object.
- `math.length` : It will give you the length of math object.
- `math.mathlib()` : It's a fun function. There is no such important work it done. It's just a terminal animation. But it will give you some important information about your calculation mood and your saved,restored and trushed files number at the end.
- `math.recList` : return an array of record's files name.

## Licence

MIT

## History

Current version : 3.2.0

[History](https://marufhasan24.github.io/mathlib_wiki2/index.html#changeLog)
