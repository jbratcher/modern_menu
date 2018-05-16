# Modern Menu

A mobile first approach to a animated menu

[Gist Link](https://gist.github.com/jbratcher/0a0c1454c83a6468b3f10d6847b9ff5f)

### Version

0.0.2

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

## Folder and File Structure

/src
    /css
    styles.css
        /vendor
        -font-awesome.min.css
    /fonts
    -fontawesome-webfont.eot
    -fontawesome-webfont.svg
    -fontawesome-webfont.ttf
    -fontawesome-webfont.wotf
    -fontawesome-webfont.wotf2
    -FontAwesome.otf
    /img
    /js
        -index.js
        -main.js
    /scss
    -styles.scss
-index.html
-gulpfile.js
-LICENSE
-package.json
-readme.md

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



## Future Features:




## Known "bugs"

* desktop menu alignment (menu should align to left edge of screen)


#### Change Log

###### v0.0.2

* Added desktop menu
* removed scss from dist folder, gulpfile.js
* updated readme.md

###### v0.0.1

* initial commit
