# The Converse user manual

This repo contains the [Sphinx](http://sphinx-doc.org/) source files for the user manual of [Converse](http://conversejs.org/).

The user manual was originally inside the [converse.js](https://github.com/conversejs/converse.js) repo, but has been moved here with `git filter-branch`.

## How to generate HTML from the source files?

### Generate the HTML

You can generate the HTML by running:

    make html

The HTMl files will be located in `./html`

Behind the scenes, what the `make html` command is doing, is to install [zc.buildout](http://www.buildout.org/en/latest/)
and then using that to install Sphinx and its dependencies.

You'll need to have Python and [Virtualenv](https://virtualenv.pypa.io/en/latest/) available on your computer.

### Serving the documentation

To view the generated docs, you can run `make serve` and then open
http://localhost:8001/docs/html/index.html in your browser.

### License

The user manual documentation is released under the Creative Commons license [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/legalcode#languages).
