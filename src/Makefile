export TEXINPUTS=../tex//:

DIAGRAMS_PUML=$(shell find diagrams -path 'diagrams/lib' -prune -o -name '*.puml' -print)
DIAGRAMS_PNG=$(DIAGRAMS_PUML:.puml=.png)

all: prace.pdf abstrakt.pdf
diagrams: $(DIAGRAMS_PNG)

# Generovaní PNG diagramů z PlantUML
$(DIAGRAMS_PNG):./diagrams/%.png: ./diagrams/%.puml
	java -Dplantuml.include.path="diagrams" -jar ../lib/plantuml-1.2023.12.jar -charset UTF-8 -tpng -DRELATIVE_INCLUDE=relative $< \
 		|| (cat $@ && exit 1) # Print out detailed error included in the svg if conversion fails

# LaTeX je potreba spustit nekolikrat, aby spravne spocital odkazy
# --shell-escape je potreba pro spusteni Inkscape (konverze SVG->PDF)
prace.pdf: prace.tex $(wildcard *.tex) literatura.bib prace.xmpdata $(DIAGRAMS_PNG)
	pdflatex --shell-escape $<
	bibtex prace
	pdflatex --shell-escape $<
	pdflatex --shell-escape $<

abstrakt.pdf: abstrakt.tex abstrakt.xmpdata
	pdflatex $<

clean:
	rm -f *.log *.dvi *.aux *.toc *.lof *.lot *.out *.bbl *.blg *.xmpi *.fls
	rm -f prace.pdf abstrakt.pdf
	find diagrams -name '*.png' -exec rm -f {} \;
	rm -rf svg-inkscape
