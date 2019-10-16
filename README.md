# Practical React

This repo is to document my follow through of Ben Awad's React tutorial series on YouTube https://www.youtube.com/watch?v=00kXjx9k3Os

Notes

- Components should be in their own file - one component per file.
- Components need to be exported and then imported into the file that is rendering them.
  - Be wary that you will need to be concious of file structure when importing!
- If you use JSX you must `import React from 'react';`

- if you use `export default class Header extends React.Component`
  - then you must import `import Header from './components/Header';`
    - watch out for the curly braces on the import - default on export removes curly braces on import.

This little snippet was quite important - in order for the function to bind to the constructor and access the `this` object. We can see console log logging the object.
    ```
    handleButtonClick = () => {
      console.log(this);
    };
    ```

If we were to write it like this...
```
    handleButtonClick() {
      console.log(this);
    };
```
we would just get an error because the function is not bound to the constructor.    


In React we dont want to mutate state by incrementing the count using +=1 - instead we want to setState using   
```
this.setState({
    count: this.state.count + 1
```

Classes can have state functions cannot

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
