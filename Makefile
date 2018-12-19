# You can set these variables from the command line.
BUILDDIR		= ./
HTTPSERVE	   	?= ./node_modules/.bin/http-server
HTTPSERVE_PORT	?= 8001
PAPER		   	=
SPHINXBUILD	 	?= ./bin/sphinx-build
SPHINXOPTS	  	=


# Internal variables.
ALLSPHINXOPTS   = -d $(BUILDDIR)/doctrees $(PAPEROPT_$(PAPER)) $(SPHINXOPTS) ./source

.PHONY: all
all: html

.PHONY: help
help:
	@echo "Please use \`make <target>' where <target> is one of the following:"
	@echo ""
	@echo " all             A synonym for 'make dev'."
	@echo " html            Make standalone HTML files of the documentation."
	@echo " serve           Serve this directory via a webserver on port 8000."


########################################################################
## Miscellaneous

.PHONY: serve
serve:
	python -m SimpleHTTPServer $(HTTPSERVE_PORT)

./bin/activate:
	virtualenv .

.installed.cfg: requirements.txt buildout.cfg
	./bin/pip install -r requirements.txt
	./bin/buildout -v

dev: ./bin/activate .installed.cfg
	
########################################################################
## Documentation

.PHONY: html
html: dev 
	rm -rf $(BUILDDIR)/html
	$(SPHINXBUILD) -b html $(ALLSPHINXOPTS) $(BUILDDIR)/html
	@echo
	@echo "Build finished. The HTML pages are in $(BUILDDIR)/html."
