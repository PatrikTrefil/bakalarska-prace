export TEXINPUTS=../tex//:

PLANTUML_JAR=diagrams/plantuml.jar

DIAGRAMS_PUML=$(wildcard ./diagrams/*.puml)
DIAGRAMS_EPS=$(DIAGRAMS_PUML:.puml=.eps)

all: prace.pdf abstrakt.pdf

# Stáhnutí PlantUML spustitelného JAR souboru
$(PLANTUML_JAR):
	wget -O $(PLANTUML_JAR) https://github.com/plantuml/plantuml/releases/download/v1.2023.8/plantuml-1.2023.8.jar

# Generovaní SVG diagramů z PlantUML
$(DIAGRAMS_EPS):./diagrams/%.eps: ./diagrams/%.puml $(PLANTUML_JAR)
	java -jar $(PLANTUML_JAR) -teps $<

# LaTeX je potreba spustit nekolikrat, aby spravne spocital odkazy
prace.pdf: prace.tex $(wildcard *.tex) literatura.bib prace.xmpdata $(DIAGRAMS_EPS)
	pdflatex $<
	bibtex prace
	pdflatex $<
	pdflatex $<

abstrakt.pdf: abstrakt.tex abstrakt.xmpdata
	pdflatex $<

clean:
	rm -f *.log *.dvi *.aux *.toc *.lof *.lot *.out *.bbl *.blg *.xmpi
	rm -f prace.pdf abstrakt.pdf
	rm -f ./diagrams/*.eps
	rm -f $(PLANTUML_JAR)
