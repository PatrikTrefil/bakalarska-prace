export TEXINPUTS=../tex//:

DIAGRAMS_PUML=$(wildcard ./diagrams/*.puml)
DIAGRAMS_SVG=$(DIAGRAMS_PUML:.puml=.svg)

all: prace.pdf abstrakt.pdf

# Generovaní SVG diagramů z PlantUML
$(DIAGRAMS_SVG):./diagrams/%.svg: ./diagrams/%.puml
	plantuml -tsvg $<

# LaTeX je potreba spustit nekolikrat, aby spravne spocital odkazy
# --shell-escape je potreba pro spusteni Inkscape (konverze SVG->PDF)
prace.pdf: prace.tex $(wildcard *.tex) literatura.bib prace.xmpdata $(DIAGRAMS_SVG)
	pdflatex --shell-escape $<
	bibtex prace
	pdflatex --shell-escape $<
	pdflatex --shell-escape $<

abstrakt.pdf: abstrakt.tex abstrakt.xmpdata
	pdflatex $<

clean:
	rm -f *.log *.dvi *.aux *.toc *.lof *.lot *.out *.bbl *.blg *.xmpi *.fls
	rm -f prace.pdf abstrakt.pdf
	rm -f ./diagrams/*.svg
	rm -rf svg-inkscape
