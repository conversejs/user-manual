# The Converse user manual

This repo contains the [Sphinx](http://sphinx-doc.org/) source files for the user manual of [Converse](http://conversejs.org/).

The user manual was originally inside the [converse.js](https://github.com/conversejs/converse.js) repo, but has been moved here with `git filter-branch`.

## How to generate HTML from the source files?

### Install Dependencies

In order to generate HTML from the source files, you need to install Sphinx,
which is a Python package.

We use [zc.buildout](http://www.buildout.org/en/latest/) to manage Python
package dependencies.

To install Sphinx, do the following inside this repo:

    virtualenv .
    source bin/activate
    pip install -r requirements.txt
    ./bin/buildout

### Generate the HTML

After installing the dependencies, you can generate the HTML by running:

    make html

The HTMl files will be located in `./html`

### Serving the documentation

To view the generated docs, you can run `make serve` and then open
http://localhost:8001/docs/html/manual.html in your browser.

### License

The user manual documentation is released under the Creative Commons license [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/legalcode#languages).
