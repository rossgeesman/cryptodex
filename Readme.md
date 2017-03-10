# Cryptodex

Single page React app which takes an input of Bitcoin and buys every asset sold on shapeshift.io in equal quantities. Currently address generation for only 9 currencies is supported but I plan on implementing all of them. This code is untested and provided as is. Use it at your own risk.

## One-Time Setup

Install NPM: https://nodejs.org/en/download/

Clone this repo:

```
git clone https://github.com/rossgeesman/cryptodex.git cryptodex
```
Install app and client dependencies:

```
cd cryptodex
npm install

```

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run deploy`

Runs `npm run build` then an automated script via gh-pages to deploy to [https://rossgeesman.github.io/cryptodex](https://rossgeesman.github.io/cryptodex).

