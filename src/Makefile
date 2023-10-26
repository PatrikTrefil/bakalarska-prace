export TEXINPUTS=../tex//:

DIAGRAMS_PUML=$(shell find diagrams -path 'diagrams/lib' -prune -o -name '*.puml' -print)
DIAGRAMS_SVG=$(DIAGRAMS_PUML:.puml=.svg)

all: prace.pdf abstrakt.pdf
diagrams: $(DIAGRAMS_SVG)

# Generovaní SVG diagramů z PlantUML
$(DIAGRAMS_SVG):./diagrams/%.svg: ./diagrams/%.puml
	java -Dplantuml.include.path="diagrams" -jar ../lib/plantuml-1.2023.12.jar -tsvg -DRELATIVE_INCLUDE=relative $< \
 		|| (cat $@ && exit 1) # Print out detailed error included in the svg if conversion fails

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
	find diagrams -name '*.svg' -exec rm -f {} \;
	rm -rf svg-inkscape
