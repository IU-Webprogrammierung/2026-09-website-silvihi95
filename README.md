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
- **Buchempfehlungen:** Vorstellung zweier Bücher von Ayla Dade
- **Uni-Projekt:** Vorstellung der Sichelhenket-Website
- **Privat-Projekt:** Vorstellung des Musikspiels My-Hits

## Verwendete Technologien

Die Website wurde mit HTML, CSS und JavaScript umgesetzt. Externe CSS- oder JavaScript-Frameworks kommen nicht zum Einsatz.

### HTML

- Semantische Elemente wie `header`, `nav`, `main`, `section`, `article` und `footer`
- Bilder mit `figure`, `figcaption` und Alternativtexten
- Interne Sprunglinks und externe Verlinkungen
- HTML-Element `<dialog>` für die Lightbox
- Attribute wie `loading`, `width` und `height` zur Unterstützung des Bildladens

### CSS

- Flexbox und CSS Grid für die verschiedenen Layouts
- Media Queries für das responsive Design
- CSS-Variablen für Farben und grundlegende Einstellungen
- `clamp()` für flexible Schriftgrößen und Abstände
- CSS-Nesting für zusammengehörige Regeln
- Hover-Effekte und kleinere Animationen
- Überwiegende Verwendung relativer Einheiten wie `rem`

### JavaScript

- Hamburger-Menü für die mobile Navigation
- Lightbox für die Bildergalerien
- „Mehr anzeigen“-/„Weniger anzeigen“-Funktion für zusätzliche Galeriebilder
- Back-to-top-Button
- Tastatursteuerung und Wischgesten innerhalb der Lightbox

Die Versionsverwaltung erfolgt mit Git und GitHub.

## Responsive Design

Die Darstellung der Website passt sich über mehrere Breakpoints an unterschiedliche Bildschirmgrößen an.

Auf Smartphones werden die Inhalte überwiegend untereinander dargestellt. Auf größeren Bildschirmen stehen beispielsweise Texte und Bilder nebeneinander.

Unterhalb von 1100 px wird die Navigation als Hamburger-Menü angezeigt. Auch die Bildergalerien, Reiseberichte, Buchdarstellungen und Projektkarten passen ihre Anordnung an den verfügbaren Platz an.

Im CSS werden verschiedene Media Queries eingesetzt, unter anderem bei 480 px, 600 px, 640 px, 680 px, 760 px, 768 px, 780 px, 800 px, 850 px, 900 px und 1100 px. Die Breakpoints orientieren sich an den Anforderungen der jeweiligen Inhalte und Komponenten.

## Bildergalerien und Lightbox

Die Bilder lassen sich durch Anklicken in einer vergrößerten Ansicht öffnen. Die Lightbox wurde mit JavaScript und dem HTML-Element `<dialog>` umgesetzt.

Innerhalb einer Galerie kann über die Pfeiltasten oder die Schaltflächen zwischen den Bildern gewechselt werden. Auf Touchgeräten ist die Navigation zusätzlich über Wischgesten möglich.

Die Lightbox zeigt die jeweilige Bildunterschrift sowie die aktuelle Bildnummer an. Geschlossen werden kann sie über die Schließen-Schaltfläche, die Escape-Taste oder einen Klick auf den Dialoghintergrund.

In der Landschaftsgalerie und den Reisegalerien können über die Schaltfläche „Mehr anzeigen“ zusätzliche Bilder eingeblendet werden. Diese Bilder werden erst beim erstmaligen Aufklappen geladen. Über „Weniger anzeigen“ lässt sich die Galerie wieder auf ihre ursprüngliche Ansicht reduzieren.

Das ursprüngliche Magazin-Layout der Landschaftsgalerie bleibt dabei erhalten. Die zusätzlichen Bilder werden in einem ergänzenden Raster dargestellt.

## Weitere JavaScript-Funktionen

### Mobile Navigation

Das Hamburger-Menü wird über JavaScript geöffnet und geschlossen. Nach der Auswahl eines Navigationslinks schließt sich das Menü automatisch.

Der aktuelle Zustand wird über das ARIA-Attribut `aria-expanded` angegeben. Auch über die Escape-Taste lässt sich das geöffnete Menü schließen.

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

## Bildoptimierung

Zur Verbesserung der Ladegeschwindigkeit wurden Bilddateien optimiert und für viele Bilder das Attribut `loading="lazy"` eingesetzt.

Zusätzliche Galeriebilder verwenden zunächst das Attribut `data-src`. Beim erstmaligen Aufklappen der jeweiligen Galerie wird die Bildquelle durch JavaScript gesetzt.

Breiten- und Höhenangaben unterstützen außerdem eine möglichst stabile Darstellung beim Laden der Website.

## Entwicklung

Zu Beginn wurde die grundlegende HTML-Struktur mit den einzelnen Inhaltsbereichen erstellt. Anschließend folgten die Gestaltung mit CSS und die Anpassungen für unterschiedliche Bildschirmgrößen.

Für die Bildergalerien wurden verschiedene Raster und Bildanordnungen umgesetzt. Auch der Einstiegsbereich der Website wurde im Laufe der Entwicklung überarbeitet.

Mit JavaScript kamen weitere Funktionen hinzu, darunter die mobile Navigation, die Lightbox und der Back-to-top-Button.

Im weiteren Verlauf wurde der CSS-Code bereinigt. Nicht mehr benötigte Regeln wurden entfernt und zusammengehörige Bereiche übersichtlicher strukturiert. Dabei kamen auch CSS-Nesting und relative Maßeinheiten zum Einsatz.

In der Finalisierungsphase wurden die Landschafts- und Reisegalerien um eine Funktion zum Ein- und Ausblenden zusätzlicher Bilder erweitert. Die Darstellung wurde dabei so angepasst, dass die bestehenden Layouts erhalten bleiben.

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

fonts/
  ...

images/
  ...

README.md
```

## Website öffnen

Die Website kann lokal über die `index.html` in einem Browser geöffnet werden. Für die grundlegende Darstellung und die JavaScript-Funktionen ist keine Installation zusätzlicher Frameworks erforderlich.
