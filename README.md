<h2 align="center">Hacker News Clone React</h2>

<p align="center">
<a href="https://github.com/robbylew/hackernews-clone/stargazers"><img alt="GitHub Stars" src="https://img.shields.io/github/stars/robbylew/hackernews-clone.svg?style=social&label=Star"></a> 
<a href="https://github.com/robbylew/"><img alt="GitHub Followers" src="https://img.shields.io/github/followers/robbylew.svg?style=social&label=Follow"></a> 
<a href="https://github.com/robbylew/hackernews-clone/issues"><img alt="GitHub Issues" src="https://img.shields.io/github/issues/robbylew/hackernews-clone.svg"></a> 
<a href="https://github.com/robbylew/hackernews-clone/pulls"><img alt="GitHub Pull Requests" src="https://img.shields.io/github/issues-pr-raw/robbylew/hackernews-clone.svg"></a>
</p>


This project is a clone of Hacker News rewritten with JavaScript, using React and GraphQL.

<p align="center" margin-bottom="0">
  <a href="http://www.hnclone.win" target="_blank">
    <img alt="Hacker News Clone Demo" width="auto" height="auto" src="Image.png">
  </a>
</p>
<p align="center">
  <a href="http://www.hackernews.uk">Live Demo</a>
</p>

## Overview

### Features

#### **Front End**

- **React** - Declarative UI framework
- **TypeScript** - Static typing for enhanced code quality
- **Next.js** - Routing, Server-Side Rendering (SSR), Hot Module Reloading, Code Splitting, and a powerful build tool using Webpack
- **Apollo Client** - Efficient GraphQL data management
- **Prettier** - Code formatting for consistent style
- **ESLint** - Code linting with the latest best practices

#### **Back End**

- **Node.js** - JavaScript runtime environment
- **Express** - Web server framework
- **Apollo Server v4** - Advanced GraphQL server
- **Passport.js** - Secure authentication
- **TypeScript** - Static typing for backend logic
- **ESLint** - Code linting with the latest best practices

### **Front End**

- **Declarative UI** - Built with React for predictable and efficient UI updates
- **Static Typing** - Enhanced code quality and maintainability with TypeScript
- **GraphQL Fragment Colocation** - Optimized data fetching with Apollo Client
- **Prefetch Page Assets** - Improved performance with Next.js's prefetching capabilities

### **Server**

- **Universal JS** - Shared code between client and server with Node.js and Express
- **Declarative GraphQL Schema** - Define GraphQL APIs with Apollo Server v4
- **GraphQL Query Batching & Stored Queries** - Efficient data fetching strategies
- **Authentication** - Secure user authentication with Passport.js
- **Server Side Rendering** - Enhanced performance and SEO with Next.js
- **Code Splitting** - Optimized bundle sizes with Next.js

### **Dev/Test**

- **Hot Module Reloading** - Fast development iterations with Next.js
- **GraphQL Playground** - Interactive GraphQL API testing with Apollo Server
- **Faster Package Install** - Efficient dependency management with  pnpm
- **JS/TS Best Practices** - Maintainable and error-free code with ESLint

## Architecture Overview

`server.ts` is the entry point, using Express and passing requests to Next.js. Next.js SSR renders the pages using the `getServerSideProps()` hook from Apollo helper, allowing the app to make GraphQL requests on both the client and server.

When the client loads a page, it preloads the next page's code via `<Link href="/">`. Upon navigation, the client makes a single GraphQL query to render the new page efficiently.

**Technologies:** Next.js, Apollo GraphQL Client

**GraphQL Resources:** GraphQL-Tools by Apollo, GraphQL documentation

## Directory Structure

- **`/pages`**: Each web page has a React component.
- **`/server`**: Server-side code including Express and Apollo Server.
- **`/src`**: Shared code that runs on both client and server.

**Note:** Do not import from `server` or `pages` into `src` to avoid running code in the wrong environment.

- **Project Root**: Contains configuration files such as TypeScript, Babel, ESLint, NPM, Git.

## How To Start

### **One Click Download & Run**

Clone the repository, install dependencies, and start the development server with one command:

```bash
git clone https://github.com/robbylew/hackernews-clone.git && cd hackernews-clone && npm install && npm run start
```

### Setup

#### Development Mode

Run the application in development mode with hot module reloading:

```bash

npm install
npm run dev

```

#### Production Mode

Build and start the application in production mode:

```bash
npm run build:prod
npm run start:prod
```

## Contributing

Pull requests are welcome. File an issue for ideas, conversation, or feedback.

## Summary of Changes

1. Modernized Stack:
+ Upgraded React to version 18.
+ Migrated to ESLint v9 with a new eslint.config.js using the flat configuration system.
+ Updated Apollo Server to version 4.
+ Switched to using LRUCache from lru-cache@latest.
+ Replaced deprecated packages and configurations (e.g., removed nested `<a>` tags in Next.js `<Link>` components).

2. Enhanced Configuration:
+ Added "type": "module" to package.json to support ES Module syntax.
+ Integrated Prettier with ESLint for consistent code formatting.
+ Configured TypeScript for both frontend and backend.
+ Set up Docker for containerized deployment.
+ Implemented GitHub Actions for Continuous Integration.

3. Improved Development Workflow:
+ Streamlined setup scripts for easier installation and startup.
+ Enhanced testing with Jest and snapshot testing capabilities.
+ Optimized dependency management with Yarn/Pnpm for faster installs.

4. Documentation Updates:
+ Updated setup and deployment instructions to reflect the new configurations.
+ Included sections on linting, formatting, testing, and CI/CD for comprehensive guidance.
