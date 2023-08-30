1. Introduction

This repository contains the source code for a blog website built using 11ty, a static site generator. The website is hosted on Netlify and uses Netlify Identity for user authentication.

2. Prerequisites

To run this project, you will need the following:

-  Node.js v16 or later
-  npm v7 or later
-  11ty v1.0 or later
-  Netlify CLI v3 or later

3. Installation

To install the project dependencies, run the following command:

```
npm install
```

4. Development

To start the development server, run the following command:

```
npm run dev
```

The development server will run on port 8080. You can access the website at http://localhost:8080.

5. Production

To build the production version of the website, run the following command:

```
npm run build
```

The production build will be created in the `dist` directory. You can deploy the website to Netlify by running the following command:

```
netlify deploy
```

6. Code Structure

The codebase is organized as follows:

-  `src/`: The source directory contains all of the source files for the website.
-  `dist/`: The dist directory contains the production build of the website.
-  `node_modules/`: The node_modules directory contains the installed dependencies.
-  `package.json`: The package.json file contains the project's metadata and dependencies.

7. Usage

To use the website, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies.
3. Start the development server.
4. Create a new blog post by creating a new file in the `src/blogs` directory.
5. Add the following front matter to the blog post file:

```
---
title: "My First Blog Post"
layout: "base.njk"
---
```

6. Add the content of your blog post to the file.
7. Save the file.
8. The blog post will be automatically generated and available at http://localhost:8080/blogs/my-first-blog-post.

9. Conclusion

This blog website is a great way to share your thoughts and ideas with the world. It is easy to use and can be customized to
