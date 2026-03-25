# The Converse User Manual

This repository contains the [Docusaurus](https://docusaurus.io/) source files for the user manual of [Converse](https://conversejs.org/).

The user manual was originally inside the [converse.js](https://github.com/conversejs/converse.js) repo, but has been moved here to be maintained as an independent static site.

## Development

The site is built using **Docusaurus**. To contribute to the documentation or run it locally, follow the steps below.

### Requirements

You will need to have [Node.js](https://nodejs.org/) (which includes npm) installed on your computer.

### Installation

First, install the project dependencies:

```bash
npm install
```

### Serving the documentation locally

To preview the documentation as you edit, you can start the local development server by running:

```bash
npm start
```

This command starts a local server and usually opens your browser automatically to `http://localhost:3000/`. Most changes to the markdown files will be reflected live (hot reloaded) without needing to restart the server.

### Generating the HTML (Build)

When you are ready to prepare the site for deployment, generate the static HTML files by running:

```bash
npm run build
```

The generated HTML files will be located in the `./build` directory and can be deployed to any static hosting provider.

## License

The user manual documentation is released under the Creative Commons license [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/legalcode#languages).
