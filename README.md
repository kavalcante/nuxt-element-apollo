> Nuxt.js boilerplate

## What's included

- Nuxt
- Vue Apollo
- Element UI (with custom theme)
- PWA module
- Eslint (Airbnb styleguide)


## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# install Element CLI Theme Tool
$ npm install element-theme -g

# change element-variables.scss file with the colors of your project and then
$ et

# after theme is build, import the custom theme at
# ~/plugins/element-ui.js

# serve with hot reload at localhost:3000
# service worker is disabled in dev
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
