# Text bakalářské práce

## Zadání

Cílem bakalářské práce je navržení, vytvoření a praktické otestování v provozu
platformy pro spolupráci terapeutů/výzkumníků a pacientů/klientů/účastníků
studie. Platforma bude sloužit primárně pro sběr dat týkajících se mentálního
zdraví uživatelů za účelem zvýšení efektivity poskytované psychoterapie, výzkumu
a prevenci kriminality, ale bude ji možno použít i v jiných kontextech. Sběr dat
bude možno provádět jednorázově či dlouhodobě. Aplikace bude poskytovat základní
přehled, vizualizace dat a export dat do formátu CSV.

## Kompilace

Pro kompilaci je nutné mít nainstalovaný [Inkscape](https://inkscape.org/).

```bash
make --directory src
```

Výsledné PDF soubory se nachází v adresáři `src`.

## Workflows

Repozitář má workflow pro kompilaci a uložení výsledných PDF souborů. Soubory
lze najít jako artefakty běhů workflow a aktuální veze je dostupná na
[této stránce][pdf-upload]. Výsledné PDF soubory jsou také validovány
(musí být validní PDF/A).

## Šablona

Pro vypracování práce byla použita [oficiální šablona pro sazbu v
LaTeXu][oficialni-sablona]. Informace k šabloně lze najít [zde][sablona-readme].

[oficialni-sablona]:
  https://www.mff.cuni.cz/cs/studenti/bc-a-mgr-studium/bakalarske-a-diplomove-prace
[sablona-readme]: ./SABLONA-README
[pdf-upload]: https://patriktrefil.com/bakalarska-prace.pdf
