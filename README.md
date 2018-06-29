# Modern Menu

A mobile first approach to a animated menu using only CSS

[Gist Link](https://gist.github.com/jbratcher/0a0c1454c83a6468b3f10d6847b9ff5f)

### Version

0.0.3

## Install Dependencies

```bash
npm install 
```

## Compile Sass & Run Dev Server

gulp

```bash
gulp
```
OR

```bash
npm start
```

## Bundle and minify compiled CSS and JS

```bash
gulp useref
```

## Bulid to dist from src

```bash
gulp build
```
## Clean (delete) dist

```bash
gulp clean:dist
```

## Features: 

* simple, css-only transitions

## Future Features:

* less invasive bottom transition (currently using opacity: 0 to hide menu on page)

## Known "bugs"

* ???

#### Change Log

###### v0.0.2

* Added right, left, and bottom options
* updated readme.md

###### v0.0.2

* Added desktop menu
* removed scss from dist folder, gulpfile.js
* updated readme.md

###### v0.0.1

* initial commit
