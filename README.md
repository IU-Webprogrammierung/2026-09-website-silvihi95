# Silvis Portfolio

**Projekt: Web-Programmierung (DLBUXPWP01)**  
IU Internationale Hochschule  
Silvia Hienz

## Über das Projekt

Im Rahmen des Kurses „Projekt: Web-Programmierung“ ist eine persönliche Portfolio-Website entstanden. Sie verbindet die Themen Fotografie, Reisen, Bücher und eigene Webprojekte.

Die Website ist als responsiver One-Pager mit sieben Bereichen aufgebaut. Über die Navigation lassen sich die einzelnen Abschnitte direkt aufrufen. Ergänzend gibt es separate Seiten für das Impressum und den Datenschutz.

Im Mittelpunkt stehen eine übersichtliche Gestaltung, die Präsentation der Bilder und eine gute Bedienbarkeit auf unterschiedlichen Bildschirmgrößen.

## Aufbau der Website

- **Über mich:** Kurze persönliche Vorstellung
- **Fotografie:** Galerie mit ausgewählten Landschaftsfotografien
- **Nebengewerbe:** Einblicke in die Arbeit von Silvis Photography
- **Reisen:** Reiseberichte und Bilder aus Rovaniemi, Island und Südtirol
- **Lesen:** Vorstellung zweier Bücher von Ayla Dade
- **Uni-Projekt:** Vorstellung der Sichelhenket-Website
- **Privat-Projekt:** Vorstellung des Musikspiels My-Hits

## Verwendete Technologien

Die Website wurde mit HTML, CSS und JavaScript umgesetzt. Externe CSS- oder JavaScript-Frameworks kommen nicht zum Einsatz.

### HTML

- Semantische Elemente wie `header`, `nav`, `main`, `section`, `article` und `footer`
- Bilder mit `figure`, `figcaption` und Alternativtexten
- Interne Sprunglinks und externe Verlinkungen
- HTML-Element `<dialog>` für die Lightbox

### CSS

- Flexbox und CSS Grid für die verschiedenen Layouts
- Media Queries für das responsive Design
- CSS-Variablen für Farben und grundlegende Einstellungen
- `clamp()` für flexible Schriftgrößen und Abstände
- CSS-Nesting für zusammengehörige Regeln
- Hover-Effekte und kleinere Animationen

### JavaScript

- Hamburger-Menü für die mobile Navigation
- Lightbox für die Bildergalerien
- Back-to-top-Button

Die Versionsverwaltung erfolgt mit Git und GitHub.

## Responsive Design

Die Darstellung der Website passt sich über mehrere Breakpoints an unterschiedliche Bildschirmgrößen an.

Auf Smartphones werden die Inhalte überwiegend untereinander dargestellt. Auf größeren Bildschirmen stehen beispielsweise Texte und Bilder nebeneinander.

Unterhalb von 1100 px wird die Navigation als Hamburger-Menü angezeigt. Auch die Bildergalerien, Reiseberichte und Projektkarten passen ihre Anordnung an den verfügbaren Platz an.

Zum Einsatz kommen unter anderem Media Queries bei 480 px, 600 px, 640 px, 768 px, 900 px und 1100 px.

## Bildergalerien und Lightbox

Die Bilder lassen sich durch Anklicken in einer vergrößerten Ansicht öffnen. Die Lightbox wurde mit JavaScript und dem HTML-Element `<dialog>` umgesetzt.

Innerhalb einer Galerie kann über die Pfeiltasten oder die Schaltflächen zwischen den Bildern gewechselt werden. Auf Touchgeräten ist die Navigation zusätzlich über Wischgesten möglich.

Die Lightbox zeigt die jeweilige Bildunterschrift sowie die aktuelle Bildnummer an. Geschlossen werden kann sie über die Schließen-Schaltfläche, die Escape-Taste oder einen Klick auf den Dialoghintergrund.

## Weitere JavaScript-Funktionen

### Mobile Navigation

Das Hamburger-Menü wird über JavaScript geöffnet und geschlossen. Nach der Auswahl eines Navigationslinks schließt sich das Menü automatisch.

Der aktuelle Zustand wird über das ARIA-Attribut `aria-expanded` angegeben.

### Back-to-top-Button

Nach dem Herunterscrollen erscheint eine Schaltfläche, über die zum Seitenanfang zurückgekehrt werden kann.

Die Scrollanimation berücksichtigt die Systemeinstellung `prefers-reduced-motion`.

## Barrierefreiheit

Bei der Gestaltung und Entwicklung wurden verschiedene Maßnahmen für eine möglichst gute Bedienbarkeit berücksichtigt:

- Semantische HTML-Struktur und sinnvolle Überschriftenhierarchie
- Skip-Link zum direkten Aufrufen des Hauptinhalts
- Alternativtexte für Bilder
- Sichtbare Fokusmarkierungen bei der Tastaturbedienung
- ARIA-Attribute für Navigation und interaktive Elemente
- Tastaturbedienbare Bildergalerien
- Wiederherstellung des Tastaturfokus nach dem Schließen der Lightbox
- Berücksichtigung reduzierter Animationen

## Entwicklung

Zu Beginn wurde die grundlegende HTML-Struktur mit den einzelnen Inhaltsbereichen erstellt. Anschließend folgten die Gestaltung mit CSS und die Anpassungen für unterschiedliche Bildschirmgrößen.

Für die Bildergalerien wurden verschiedene Raster und Bildanordnungen umgesetzt. Auch der Einstiegsbereich der Website wurde im Laufe der Entwicklung überarbeitet.

Mit JavaScript kamen weitere Funktionen hinzu, darunter die mobile Navigation, die Lightbox und der Back-to-top-Button.

Im weiteren Verlauf wurde der CSS-Code bereinigt. Nicht mehr benötigte Regeln wurden entfernt und zusammengehörige Bereiche übersichtlicher strukturiert.

Die Darstellung und die Funktionen wurden während der Entwicklung im Browser überprüft. Die einzelnen Entwicklungsschritte wurden mit Git dokumentiert.

## Projektstruktur

```text
index.html
impressum.html
datenschutz.html

css/
  style.css

js/
  script.js

images/
  ...

README.md
```

## Website öffnen

Die Website kann lokal über die `index.html` in einem Browser geöffnet werden. 
