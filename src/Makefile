export TEXINPUTS=../tex//:

DIAGRAMS_PUML=$(shell find diagrams -path 'diagrams/lib' -prune -o -name '*.puml' -print)
DIAGRAMS_PNG_FROM_PUML=$(DIAGRAMS_PUML:.puml=.png)

DIAGRAMS_DRAWIO=$(shell find diagrams -name '*.drawio' -print)
DIAGRAMS_PNG_FROM_DRAWIO=$(DIAGRAMS_DRAWIO:.drawio=.png)

all: prace.pdf abstrakt.pdf
diagrams: $(DIAGRAMS_PNG_FROM_PUML) $(DIAGRAMS_PNG_FROM_DRAWIO)

$(DIAGRAMS_PNG_FROM_DRAWIO): ./diagrams/%.png: ./diagrams/%.drawio
	drawio -x -f -png --no-sandbox --zoom 400 -o $@ $<

# Generovaní PNG diagramů z PlantUML
$(DIAGRAMS_PNG_FROM_PUML):./diagrams/%.png: ./diagrams/%.puml
	java -DPLANTUML_LIMIT_SIZE=16384 -Dplantuml.include.path="diagrams" -jar ../lib/plantuml-1.2023.12.jar -charset UTF-8 -tpng -DRELATIVE_INCLUDE=relative $< \
 		|| (cat $@ && exit 1) # Print out detailed error included in the svg if conversion fails

# LaTeX je potreba spustit nekolikrat, aby spravne spocital odkazy
# --shell-escape je potreba pro spusteni Inkscape (konverze SVG->PDF)
prace.pdf: prace.tex $(wildcard *.tex) literatura.bib prace.xmpdata diagrams
	pdflatex --shell-escape -halt-on-error $<
	bibtex prace
	pdflatex --shell-escape -halt-on-error $<
	pdflatex --shell-escape -halt-on-error $<

abstrakt.pdf: abstrakt.tex abstrakt.xmpdata
	pdflatex $<

clean:
	rm -f *.log *.dvi *.aux *.toc *.lof *.lot *.out *.bbl *.blg *.xmpi *.fls
	rm -f prace.pdf abstrakt.pdf
	find diagrams -name '*.png' -exec rm -f {} \;
	rm -rf svg-inkscape
