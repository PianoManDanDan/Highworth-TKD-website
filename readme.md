This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.<br />

### `npm run build:stats`

Builds the app for production to the `dist` folder.<br />
This also outputs a webpack stats file for debugging webpack build sizes. 
A visual representation of the build output can be seen by running 
`npm run build && npx webpack-bundle-analyzer webpack-stats.json dist` 
in the command line.

### `npm run view-stats`

Runs `npm run build:stats` and then starts a server to analyze the webpack 
output bundle size.

### `npm run predeploy`

Used by gh-pages to build app.

### `npm run deploy`

Used by gh-pages to publish the built app to gh-pages site.

### `npm run publish`

Combines `npm run predeploy` and `npm run deploy` into one command.

### `npm run test`

Launches the test runner in serial mode.

### `npm run test:watch`

Launches the test runner in the watch mode. Only changed files are rerun.

### `npm run test:ci`

Launches the test runner in ci mode.

### `npm run storybook`

Launches storybook.<br />
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
