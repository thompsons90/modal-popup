# 👋 Introducing Modals'R'Us!

## Scott Thompson's Listrak Project

This project is a quick display of my ability to create popup modals, set to design specifications, and redirect the user to a confirmation page after they submit their required email address.

# 🚀 Launched Site

Here is a link to the published site, hosted with Netlify. I hope you enjoy it!

> [Hosted Site Link](https://master--dazzling-biscochitos-3962ed.netlify.app/)

## 📱 Responsive and mobile-friendly

- This project was built to work seemlessly on both mobile devices and desktop.
<p>If this was personal project, I would have set breakpoints for mobile-landscape and tablets as well.</p>

# 🏗️ Build Decisions

- [@types/React](https://www.npmjs.com/package/@types/react): TypeScript definitions for React.
- [typescript](https://www.npmjs.com/package/typescript): TypeScript is a language for application scale JavaScript development
<p>I chose to use TypeScript for its structure and readability of types. Other developers can look at the code and have a good idea of my intentions without the need for using methods like 'typeof.' TypeScript is also good at detecting bugs early on at the compile stage.</p>

- [react](https://www.npmjs.com/package/react): React is a JavaScript library for building user interfaces.
<p>I also chose ReactJS for its reusable components, e.g. the primary modal which is used again on the confirmation page. Reacts combined use of JavaScript and HTML tags make it intuitive and easy to deal with large sets of data containing the DOM. Plus it's a widely popular and supported library.</p>

- [@types/react-router](https://www.npmjs.com/package/@types/react-router): TypeScript definitions for React Router
- [@types/react-router-dom](https://www.npmjs.com/package/@types/react-router-dom): TypeScript definitions for react-router-dom
<p>I used React Router V6 to navigate from the initial popup modal to the confirmation page, pending the required email input has an @ symbol and characters to follow. It's an easy to use client-side routing technology and comes in a small package as to not take up too much room.</p>

- [@types/styled-components](https://www.npmjs.com/package/@types/styled-components): TypeScript definitions for styled-components.
<p>I opted for Styled Components mainly for their encapsulation and scalability. I also considered using Sass with BEM naming conventions, which is also great at frontend components. Or CSS Modules for local scope, but CSS can get bulky after a while so it doesn't scale as nicely once projects become larger.</p>
<p>The project was styled first as the mobile version with global breakpoints inside the utils folder for desktop to be added in where needed.</p>

# 🏗️ Deploy for review

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

- yarn add: adds a package to use in your current package.
- yarn init: initializes the development of a package.
- yarn install: installs all the dependencies defined in a package.json file.
- yarn publish: publishes a package to a package manager.
- yarn remove: removes an unused package from your current package.

### Default Command

Running yarn with no command will run yarn install, passing through any provided flags.
