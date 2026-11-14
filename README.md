# Silvis Portfolio

**Projekt: Web-Programmierung (DLBUXPWP01)**
IU Internationale Hochschule
Silvia Hienz

## Über das Projekt

Für das Modul „Projekt: Web-Programmierung“ wurde eine persönliche Portfolio-Website entwickelt. Sie verbindet die Themen Fotografie, Reisen, Bücher und eigene Webprojekte.

Die Website ist als responsiver One-Pager aufgebaut und umfasst sieben Inhaltsbereiche. Über die Navigation können diese direkt aufgerufen werden. Ergänzend gibt es separate Seiten für das Impressum und den Datenschutz.

Bei der Gestaltung lag der Schwerpunkt darauf, die Fotografien ansprechend zu präsentieren und die verschiedenen Inhalte übersichtlich darzustellen. Gleichzeitig sollte die Website auf Smartphones, Tablets und Desktop-Geräten gut funktionieren.

## Aufbau der Website

Die Website besteht aus folgenden Bereichen:

- **Über mich:** Persönliche Vorstellung und Einblick in die eigenen Interessen
- **Fotografie:** Galerie mit ausgewählten Landschaftsaufnahmen
- **Nebengewerbe:** Vorstellung von Silvis Photography und Einblicke in verschiedene Shootings
- **Reisen:** Reiseberichte und Fotografien aus Lappland (Rovaniemi), Island und Südtirol
- **Buchempfehlungen:** Vorstellung zweier Bücher von Ayla Dade
- **Uni-Projekt:** Vorstellung der Sichelhenket-Website
- **Privat-Projekt:** Vorstellung des Musikspiels My-Hits

## Verwendete Technologien

Die Website wurde mit HTML5, CSS3 und JavaScript umgesetzt. Externe CSS- oder JavaScript-Frameworks wurden nicht verwendet.

### HTML

- Verwendung semantischer Elemente wie `header`, `nav`, `main`, `section`, `article` und `footer`
- Strukturierung der Bilder mit `figure` und `figcaption`
- Alternativtexte zur Beschreibung der Bilder
- Interne Sprunglinks zur Navigation innerhalb der Website
- Externe Verlinkungen zu weiterführenden Websites
- HTML-Element `<dialog>` für die vergrößerte Bildansicht
- Attribute wie `loading`, `width` und `height` zur Unterstützung des Bildladens
- Separate HTML-Seiten für Impressum und Datenschutz

### CSS

- **Flexbox:** Anordnung von Navigation, Texten und weiteren Seitenelementen
- **CSS Grid:** Gestaltung der Bildergalerien und mehrspaltigen Bereiche
- **Media Queries:** Anpassung der Darstellung an unterschiedliche Bildschirmgrößen
- **CSS-Variablen:** Zentrale Verwaltung von Farben und grundlegenden Einstellungen
- **`clamp()`:** Flexible Schriftgrößen und Abstände
- **CSS-Nesting:** Übersichtliche Strukturierung zusammengehöriger CSS-Regeln
- **Relative Einheiten:** Überwiegende Verwendung von `rem` statt festen Pixelwerten
- **Animationen und Effekte:** Hover-Effekte, Übergänge und kleinere Animationen
- **Schriftarten:** Lokale Einbindung der verwendeten Schriftarten
- **Hintergrundgestaltung:** Kombination aus Hintergrundbild und Farbverläufen

### JavaScript

- Mobile Navigation mit Hamburger-Menü
- Lightbox zur vergrößerten Darstellung der Fotografien
- Navigation innerhalb der Lightbox über Pfeiltasten, Schaltflächen und Wischgesten
- Ein- und Ausblenden zusätzlicher Galeriebilder
- Nachladen zusätzlicher Bilder beim erstmaligen Öffnen einer Galerie
- Back-to-top-Button zum Zurückkehren an den Seitenanfang
- Unterstützung der Tastaturbedienung bei interaktiven Elementen

### Weitere Werkzeuge

- **Visual Studio Code:** Entwicklung und Bearbeitung der Projektdateien
- **Git:** Lokale Versionsverwaltung
- **GitHub:** Verwaltung des Projekt-Repositories
- **Chrome-Entwicklertools:** Überprüfung der Darstellung auf verschiedenen Bildschirmgrößen
- **Google Lighthouse:** Analyse von Performance, Barrierefreiheit und weiteren Qualitätsmerkmalen

## Responsive Design

Die Website wurde so umgesetzt, dass sich die Darstellung an unterschiedliche Bildschirmgrößen anpasst.

- **Desktop:** Mehrspaltige Layouts mit nebeneinander angeordneten Texten und Bildern
- **Tablet:** Anpassung von Bildrastern, Abständen und Inhaltsbereichen an die verfügbare Breite
- **Smartphone:** Überwiegend einspaltige Darstellung für eine bessere Lesbarkeit
- **Navigation:** Unterhalb von 1100 px wird die Hauptnavigation durch ein Hamburger-Menü ersetzt
- **Bildergalerien:** Anpassung der Spaltenanzahl und Bildanordnung
- **Typografie:** Flexible Schriftgrößen und Abstände mithilfe von `clamp()` und relativen Maßeinheiten

Für die Anpassungen werden mehrere Media Queries verwendet, unter anderem bei:

- 480 px, 600 px, 640 px und 680 px
- 760 px, 768 px, 780 px und 800 px
- 850 px, 900 px und 1100 px

Die Breakpoints orientieren sich daran, wann einzelne Inhalte oder Komponenten eine andere Anordnung benötigen.

Für die Überprüfung wurden insbesondere folgende Bildschirmbreiten verwendet:

- **390 px:** Smartphone
- **820 px:** Tablet
- **1440 px:** Desktop

## Bildergalerien und Lightbox

Die Fotografien bilden einen wichtigen Bestandteil der Website. Für ihre Darstellung wurden unterschiedliche Galerielayouts umgesetzt.

### Bildergalerien

- **Landschaftsfotografie:** Asymmetrisches Magazin-Layout mit unterschiedlich großen Bildern
- **Silvis Photography:** Galerie mit Einblicken in die fotografische Arbeit
- **Reisen:** Eigene Bildergalerien für Lappland, Island und Südtirol
- **Responsive Darstellung:** Anpassung der Bildanordnungen an die jeweilige Bildschirmgröße

### Lightbox

Beim Anklicken eines Galeriebildes öffnet sich eine vergrößerte Ansicht.

- Umsetzung mit JavaScript und dem HTML-Element `<dialog>`
- Wechsel zwischen Bildern über Pfeilschaltflächen
- Navigation über die Pfeiltasten der Tastatur
- Wischgesten auf Touchgeräten
- Anzeige der Bildunterschrift
- Anzeige der aktuellen Bildnummer innerhalb der Galerie
- Schließen über die Schließen-Schaltfläche, die Escape-Taste oder den Dialoghintergrund
- Wiederherstellung des Tastaturfokus nach dem Schließen

Die Navigation innerhalb der Lightbox berücksichtigt die aktuell sichtbaren Bilder der jeweiligen Galerie.

### Erweiterbare Galerien

In der Landschaftsgalerie und den Reisegalerien wurde eine zusätzliche Funktion umgesetzt.

- **„Mehr anzeigen“:** Blendet weitere Fotografien ein
- **„Weniger anzeigen“:** Reduziert die Galerie auf ihre ursprüngliche Ansicht
- **Nachladen:** Zusätzliche Bilder werden erst beim erstmaligen Aufklappen geladen
- **Layout:** Die ursprüngliche Bildanordnung bleibt erhalten; weitere Bilder werden in ergänzenden Rastern dargestellt

Dadurch können mehr Fotografien gezeigt werden, ohne dass die Seite beim ersten Aufruf mit zu vielen Bildern überladen wird.

## Weitere JavaScript-Funktionen

### Mobile Navigation

- Öffnen und Schließen des Hamburger-Menüs über eine Schaltfläche
- Automatisches Schließen nach Auswahl eines Navigationslinks
- Schließen über die Escape-Taste
- Wiederherstellung des Tastaturfokus auf die Menüschaltfläche
- Kennzeichnung des Menüzustands über `aria-expanded`

### Back-to-top-Button

- Erscheint nach dem Herunterscrollen
- Ermöglicht die Rückkehr zum Seitenanfang
- Verwendet normalerweise eine weiche Scrollanimation
- Berücksichtigt die Systemeinstellung `prefers-reduced-motion`

## Barrierefreiheit

Bei der Umsetzung wurde auf eine möglichst gute Bedienbarkeit geachtet.

- Semantische HTML-Struktur und sinnvolle Überschriftenhierarchie
- Skip-Link zum direkten Aufrufen des Hauptinhalts
- Alternativtexte für Bilder
- Sichtbare Fokusmarkierungen bei der Tastaturbedienung
- ARIA-Attribute für Navigation und interaktive Elemente
- Tastaturbedienbare Bildergalerien
- Wiederherstellung des Tastaturfokus nach dem Schließen der Lightbox
- Berücksichtigung reduzierter Animationen
- Verwendung relativer Maßeinheiten zur Unterstützung unterschiedlicher Darstellungsgrößen

Diese Maßnahmen sollen die Bedienung der Website auch ohne Maus erleichtern.

## Bildoptimierung und Performance

Da die Website viele Fotografien enthält, wurde auch auf die Ladegeschwindigkeit geachtet.

- **Bildoptimierung:** Verkleinerung und Optimierung der Bilddateien, um die Datenmenge zu reduzieren
- **Lazy Loading:** Verwendung von `loading="lazy"` für viele Bilder
- **Zusätzliche Galeriebilder:** Verwendung von `data-src`, damit zunächst ausgeblendete Bilder erst bei Bedarf geladen werden
- **Bildabmessungen:** Angabe von `width` und `height`, um Platzverschiebungen während des Ladens zu verringern
- **Lighthouse:** Überprüfung der Performance und Ermittlung möglicher Verbesserungen

## Entwicklung und Erkenntnisse

### Entwicklung

- **Grundstruktur:** Aufbau des One-Pagers mit HTML und Aufteilung in sieben Inhaltsbereiche
- **Gestaltung:** Umsetzung der verschiedenen Layouts mit CSS Grid und Flexbox
- **Responsive Design:** Anpassung der Inhalte für Smartphones, Tablets und Desktop-Geräte
- **Bildergalerien:** Entwicklung unterschiedlicher Bildanordnungen und Überarbeitung der Darstellung für kleinere Bildschirme
- **JavaScript:** Umsetzung der mobilen Navigation, der Lightbox und des Back-to-top-Buttons
- **Finalisierung:** Erweiterung der Landschafts- und Reisegalerien um die Funktionen „Mehr anzeigen“ und „Weniger anzeigen“
- **Codeüberarbeitung:** Entfernung nicht mehr benötigter CSS-Regeln sowie Einsatz von CSS-Nesting und relativen Maßeinheiten
- **Versionsverwaltung:** Dokumentation der Entwicklung mit Git und GitHub

### Tests und Überprüfung

- **Chrome-Entwicklertools:** Überprüfung des responsiven Designs bei verschiedenen Bildschirmbreiten, insbesondere 390 px, 820 px und 1440 px
- **Google Lighthouse:** Untersuchung der Performance, Barrierefreiheit und weiterer Qualitätsmerkmale
- **Mobile Navigation:** Test des Öffnens und Schließens sowie der Bedienung über die Escape-Taste
- **Lightbox:** Überprüfung der Bildnavigation, der Schließen-Funktionen und der Tastaturbedienung
- **Erweiterbare Galerien:** Test der Schaltflächen „Mehr anzeigen“ und „Weniger anzeigen“
- **Back-to-top-Button:** Überprüfung der Funktion beim Zurückkehren an den Seitenanfang
- **Bildoptimierung:** Anpassung der Bilddateien und des Ladeverhaltens

### Versionsverwaltung mit Git und GitHub

- Änderungen wurden zunächst lokal gesammelt und überprüft
- Entwicklungsschritte wurden mit aussagekräftigen Commit-Nachrichten dokumentiert
- GitHub wurde zur Verwaltung des Projekt-Repositories verwendet
- Die Versionsverwaltung ermöglicht es, Änderungen und Überarbeitungen nachzuvollziehen

### Erkenntnisse

- **Responsive Design:** Unterschiedliche Bildschirmgrößen erfordern teilweise eigene Layoutanpassungen. Besonders bei den Bildergalerien waren mehrere Überarbeitungen notwendig.
- **CSS Grid und Flexbox:** Die Kombination beider Techniken ermöglicht unterschiedliche Layouts und erleichtert die Anpassung an verschiedene Bildschirmbreiten.
- **Performance:** Große Bilddateien können die Ladegeschwindigkeit deutlich beeinflussen. Die Analyse mit Google Lighthouse half dabei, Verbesserungsmöglichkeiten zu erkennen.
- **JavaScript:** Durch die Umsetzung interaktiver Funktionen konnten die Kenntnisse im Umgang mit DOM-Elementen und Ereignissen vertieft werden.
- **Codequalität:** Eine übersichtliche CSS-Struktur erleichtert spätere Anpassungen und die Wartung der Website.
- **Barrierefreiheit:** Tastaturbedienung, Alternativtexte und sichtbare Fokusmarkierungen sind wichtige Bestandteile einer gut bedienbaren Website.
- **Versionsverwaltung:** Git erleichtert die Dokumentation der Entwicklung und macht Änderungen nachvollziehbar.

## Projektstruktur

```text
Webauftritt_Silvi/
├── css/
│   └── style.css
├── fonts/
├── images/
├── js/
│   └── script.js
├── .gitignore
├── README.md
├── datenschutz.html
├── impressum.html
└── index.html
```

- **css:** Stylesheet für die Gestaltung und das responsive Design
- **fonts:** Lokal eingebundene Schriftarten
- **images:** Fotografien und weitere Bilddateien
- **js:** JavaScript für Navigation, Lightbox und weitere interaktive Funktionen
- **.gitignore:** Festlegung von Dateien, die von Git nicht berücksichtigt werden sollen
- **README.md:** Dokumentation des Projekts
- **index.html:** Hauptseite des Portfolios
- **impressum.html und datenschutz.html:** Rechtliche Informationen

## Website öffnen

Die Website kann lokal über die Datei `index.html` in einem Browser geöffnet werden.

Für die grundlegende Darstellung und die JavaScript-Funktionen ist keine Installation zusätzlicher Frameworks erforderlich.