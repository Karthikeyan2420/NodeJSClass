/* What is Node.js?

Node.js is a runtime environment that allows you to run JavaScript on the server-side.

Built on Google Chrome’s V8 JavaScript engine.

Uses: Building web servers, APIs, real-time apps (like chat apps), and more.

Key features:

Event-driven, non-blocking I/O (fast and efficient)

Can handle multiple requests at the same time

Works outside the browser

Difference Between JavaScript and Node.js
Feature	JavaScript (JS)	Node.js
Environment	Runs in browser only	Runs on server (outside browser)
Purpose	Used to create interactive web pages	Used to build server-side apps
APIs	Browser APIs (DOM, Window, etc.)	Node.js APIs (File system, HTTP, etc.)
Execution	Single-threaded, browser handles events	Event-driven, non-blocking I/O
Use case example	Form validation, animations	Web servers, REST APIs, backend logic */


/* ########################################################################## */
// package.json

/* What is package.json?

It’s a JSON file that manages your Node.js project.

Think of it as the “manifest” or project blueprint.

Automatically created when you run:

npm init


or for defaults:

npm init -y

Why package.json is used

Project metadata

Stores information like project name, version, description, author, license, etc.

Dependencies management

Lists packages your project needs to run (dependencies) and only for development (devDependencies).

Scripts

You can define commands to run your project, like starting the server or running tests.

"scripts": {
  "start": "node app.js",
  "test": "echo \"Error: no test specified\" && exit 1"
}


Then you can run:

npm start


Version control for packages

Ensures all developers working on the project use the same versions of packages. */



/* ######################################################################################## */
// --save and --save-dev
/* 
1. --save

Used when installing a package that your app needs to run in production.

Adds the package to the dependencies section in package.json.

Example:

npm install express --save


In package.json, it will appear like this:

"dependencies": {
  "express": "^4.18.2"
}


Use case: Packages your app uses in production, e.g., web frameworks like Express.

2. --save-dev

Used when installing a package that is only needed during development, not in production.

Adds the package to the devDependencies section in package.json.

Example:

npm install nodemon --save-dev


In package.json, it will appear like this:

"devDependencies": {
  "nodemon": "^2.0.22"
}


Use case: Packages for testing, code linting, auto-reloading, build tools, etc.

Quick memory tip:

--save → Needed in production

--save-dev → Needed only during development */