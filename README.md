# Silvis Portfolio

**Projekt: Web-Programmierung (DLBUXPWP01)**

IU Internationale Hochschule

Silvia Hienz

## Über das Projekt

Für das Modul „Projekt: Web-Programmierung“ wurde eine Portfolio-Website mit sieben Bereichen erstellt. Sie zeigt Fotografien, Reisen, Buchempfehlungen und Webprojekte. Die Inhalte befinden sich auf einer Seite. Impressum und Datenschutz haben jeweils eine eigene Unterseite.

Bei der Gestaltung standen die Fotografien und eine übersichtliche Bedienung auf Smartphone, Tablet und Desktop im Vordergrund.

## Aufbau der Website

- **Über mich:** Persönliche Vorstellung und Interessen
- **Fotografie:** Ausgewählte Landschaftsaufnahmen
- **Nebengewerbe:** Silvis Photography und Einblicke in verschiedene Shootings
- **Reisen:** Berichte und Fotografien aus Lappland (Rovaniemi), Island und Südtirol
- **Buchempfehlungen:** Zwei Bücher von Ayla Dade
- **Uni-Projekt:** Vorstellung der Sichelhenket-Website
- **Privat-Projekt:** Vorstellung des Musikspiels My-Hits

## Verwendete Technologien

Die Website verwendet HTML5, CSS3 und JavaScript. Externe Frameworks kommen nicht zum Einsatz.

### HTML

- Semantische Elemente wie `header`, `nav`, `main`, `section`, `article` und `footer`
- `figure` und `figcaption` für Bilder und Bildunterschriften
- Alternativtexte für Bilder
- Interne Sprunglinks und externe Verlinkungen
- `<dialog>` für die vergrößerte Bildansicht
- `loading`, `width` und `height` zur Unterstützung des Bildladens
- Separate Seiten für Impressum und Datenschutz

### CSS

- **Flexbox:** Navigation, Text-Bild-Anordnungen und weitere Seitenelemente
- **Grid:** Bildergalerien und mehrspaltige Bereiche
- **Media Queries:** Anpassungen für verschiedene Bildschirmbreiten
- **CSS-Variablen:** Farben und wiederkehrende Einstellungen
- **Clamp:** Flexible Schriftgrößen und Abstände
- **CSS-Nesting:** Gruppierung zusammengehöriger Regeln
- **Relative Einheiten:** Überwiegend `rem` statt fester Pixelwerte
- **Effekte:** Hover-Zustände, Übergänge und kleinere Animationen
- **Schriftarten:** Lokale Einbindung
- **Hintergrund:** Kombination aus Bild und Farbverläufen

### JavaScript

- Hamburger-Menü für die mobile Navigation
- Lightbox mit Pfeilschaltflächen, Tastatursteuerung und Wischgesten
- Ein- und Ausblenden zusätzlicher Galeriebilder
- Bedarfsgerechtes Nachladen ausgeblendeter Bilder
- Back-to-top-Button
- Tastaturbedienung interaktiver Elemente

### Werkzeuge

- **Visual Studio Code:** Bearbeitung der Projektdateien
- **Git und GitHub:** Versionsverwaltung
- **Chrome-Entwicklertools:** Prüfung verschiedener Bildschirmbreiten
- **Google Lighthouse:** Prüfung von Performance, Barrierefreiheit und weiteren Qualitätsmerkmalen

## Responsive Design

Auf dem Desktop stehen Texte und Bilder teilweise nebeneinander. Auf Tablets ändern sich die Raster und Abstände. Auf Smartphones sind die meisten Bereiche einspaltig. Unterhalb von 1100 px wird die Hauptnavigation durch ein Hamburger-Menü ersetzt.

Für die Anpassungen werden mehrere Media Queries eingesetzt, unter anderem bei 480, 600, 640, 680, 760, 768, 780, 800, 850, 900 und 1100 px. Die Breakpoints wurden anhand der Darstellung der einzelnen Bereiche festgelegt. Wenn Bilder, Texte oder Navigationselemente bei einer bestimmten Bildschirmbreite nicht mehr ausreichend Platz hatten, wurde die Anordnung über Media Queries angepasst.

Die Darstellung wurde insbesondere bei 390 px (Smartphone), 820 px (Tablet) und 1440 px (Desktop) überprüft. Für die Abgabedokumentation wurden außerdem Ansichten mit 360 × 800 px, 820 × 1180 px und 1920 × 1080 px festgehalten.

## Bildergalerien und Lightbox

### Galerien

- **Landschaftsfotografie:** Asymmetrisches Magazin-Layout mit unterschiedlich großen Bildern
- **Silvis Photography:** Einblicke in die fotografische Arbeit
- **Reisen:** Galerien für Lappland, Island und Südtirol
- **Responsive Darstellung:** Angepasste Raster für kleinere Bildschirme

### Lightbox

Beim Anklicken eines Bildes öffnet sich eine vergrößerte Ansicht über das HTML-Element `<dialog>`. Die Navigation ist über Pfeilschaltflächen, Pfeiltasten und Wischgesten möglich. Angezeigt werden außerdem die Bildunterschrift und die Position innerhalb der Galerie.

Die Lightbox lässt sich über die Schließen-Schaltfläche, die Escape-Taste oder den Dialoghintergrund schließen. Danach wird der Tastaturfokus wiederhergestellt. Bei der Navigation werden die aktuell sichtbaren Bilder der jeweiligen Galerie berücksichtigt.

### Erweiterbare Galerien

Die Landschafts- und Reisegalerien wurden später um „Mehr anzeigen“ und „Weniger anzeigen“ ergänzt. Zusätzliche Bilder erscheinen in ergänzenden Rastern, während die ursprüngliche Anordnung erhalten bleibt. Die zunächst ausgeblendeten Bilddateien werden über `data-src` erst beim ersten Aufklappen geladen.

Die bestehende Lightbox wurde dafür angepasst, damit auch die neu eingeblendeten Bilder in der Bildnavigation berücksichtigt werden. Die bereits zuvor umgesetzte Tastatursteuerung und die Wischgesten blieben erhalten.

## Weitere JavaScript-Funktionen

### Mobile Navigation

Bei kleineren Bildschirmbreiten wird die Hauptnavigation durch ein Hamburger-Menü ersetzt. Dieses lässt sich über eine Schaltfläche öffnen und schließen. Nach der Auswahl eines Navigationslinks schließt sich das Menü automatisch.

Für die Tastaturbedienung kann das Menü zusätzlich mit der Escape-Taste geschlossen werden. Dabei wird der Fokus wieder auf die Menüschaltfläche gesetzt. Das Attribut `aria-expanded` gibt den aktuellen Zustand des Menüs für unterstützende Technologien an.

### Back-to-top-Button

Der Button erscheint nach dem Herunterscrollen und führt zum Seitenanfang zurück. Dabei wird eine weiche Scrollanimation verwendet. Ist in den Systemeinstellungen eine reduzierte Bewegung aktiviert, erfolgt die Rückkehr ohne Animation. Die Einstellung `prefers-reduced-motion` wird dabei berücksichtigt.

## Barrierefreiheit

Bei der Umsetzung wurden folgende Maßnahmen berücksichtigt:

- Semantische HTML-Struktur und Überschriftenhierarchie
- Skip-Link zum Hauptinhalt
- Alternativtexte für Bilder
- Sichtbare Fokusmarkierungen
- ARIA-Attribute für Navigation und interaktive Elemente
- Tastaturbedienbare Galerien und Dialoge
- Wiederherstellung des Fokus nach dem Schließen der Lightbox
- Berücksichtigung reduzierter Animationen
- Relative Maßeinheiten für anpassungsfähige Darstellungen

## Bildoptimierung und Performance

Da die Website viele Fotos enthält, wurden die Bilddateien verkleinert und komprimiert. Viele Bilder verwenden `loading="lazy"`. Zusätzliche Galeriebilder werden erst bei Bedarf über `data-src` geladen. Angegebene Bildabmessungen (`width` und `height`) helfen dabei, Layoutverschiebungen zu begrenzen.

Google Lighthouse wurde unter anderem zur Prüfung der Ladegeschwindigkeit und Barrierefreiheit eingesetzt.

## Entwicklung und Überarbeitung

### Vorgehen

Zuerst entstanden die HTML-Struktur und die sieben Inhaltsbereiche. Anschließend wurden die Layouts mit Flexbox und Grid umgesetzt und für kleinere Bildschirme angepasst. Danach folgten die mobile Navigation, die Lightbox und der Back-to-top-Button. Zuletzt erhielten die Landschafts- und Reisegalerien die Funktionen „Mehr anzeigen“ und „Weniger anzeigen“.

### Überarbeitungen

Die Darstellung der Bildergalerien musste für kleinere Bildschirme mehrfach angepasst werden. Auch die CSS-Datei wurde überarbeitet: Nicht mehr benötigte Regeln wurden entfernt, zusammengehörige Selektoren mit CSS-Nesting gruppiert und feste Pixelwerte teilweise durch relative Maßeinheiten ersetzt. So wurde die CSS-Datei übersichtlicher und ließ sich leichter anpassen.

Bei der Galerieerweiterung sollte das vorhandene Magazin-Layout erhalten bleiben. Die zusätzlichen Bilder liegen deshalb in eigenen Rastern. Außerdem wurden das Nachladen ergänzt und die Lightbox so angepasst, dass sie auch die neu eingeblendeten Bilder anzeigt. Die Tastatursteuerung war zu diesem Zeitpunkt bereits fertig.

Bei der Prüfung auf einem iPad zeigte sich, dass das Hintergrundbild in Safari anders dargestellt wurde als auf dem Desktop. Die Hintergrunddarstellung wurde deshalb mithilfe einer CSS-Anpassung für Safari korrigiert und anschließend direkt auf dem iPad getestet.

Die Änderungen wurden schrittweise geprüft und mit Git dokumentiert.

### Abweichungen vom ursprünglichen Konzept

Die sieben Inhaltsbereiche aus dem Konzept wurden beibehalten. Einzelne Gestaltungselemente änderten sich während der Umsetzung. Statt des ursprünglich geplanten gleichmäßigen Vier-Spalten-Rasters erhielt die Fotografie-Galerie ein asymmetrisches Magazin-Layout. Der Bereich „Nebengewerbe“ wurde gegenüber dem ursprünglichen Konzept umfangreicher gestaltet und enthält neben der Vorstellung von Silvis Photography auch eine Bildergalerie.

Im Konzept war zunächst ein Breakpoint bei 768 px vorgesehen. Ein Breakpoint allein reichte in der Praxis nicht aus. Manche Bereiche mussten schon bei größeren Bildschirmbreiten umgestellt werden. Die Hauptnavigation wechselt beispielsweise unterhalb von 1100 px zum Hamburger-Menü.

Auch das geplante Bergsee-Panorama wurde ersetzt. Es war zu hell und passte optisch nicht zum restlichen Design. Das neue Hintergrundbild wurde mit Farbverläufen kombiniert.

Die Lightbox und die erweiterbaren Galerien kamen während der Entwicklung hinzu. Am Aufbau der Seite mit sieben Bereichen hat sich dadurch nichts geändert.

### Tests

- **Responsive Darstellung:** Prüfung verschiedener Bildschirmbreiten in den Chrome-Entwicklertools
- **Lighthouse:** Analyse von Performance und Barrierefreiheit
- **Tastaturbedienung:** Prüfung der Navigation und interaktiven Elemente mit Tab, Enter und Escape. Dabei wurden die Erreichbarkeit der Bedienelemente, das Auslösen von Funktionen und das Schließen geöffneter Dialoge getestet.
- **VoiceOver:** Prüfung der Navigation, Bildbeschreibungen und interaktiven Elemente mit Apple VoiceOver in Google Chrome sowie auf einem iPad in Safari
- **Browserkonsole:** Kontrolle der veröffentlichten Website in Chrome. Bei der abschließenden Prüfung wurden keine Fehlermeldungen angezeigt
- **Mobile Navigation:** Öffnen, Schließen, Linkauswahl und Escape-Taste
- **Lightbox:** Bildwechsel, Schließen, Tastatursteuerung und Wischgesten
- **Erweiterbare Galerien:** „Mehr anzeigen“, „Weniger anzeigen“ und Ladeverhalten
- **Back-to-top-Button:** Rückkehr zum Seitenanfang
- **Bilder:** Dateigrößen und Ladeverhalten

### Versionsverwaltung

Die Änderungen wurden mit Git dokumentiert und das Repository auf GitHub verwaltet. Kleinere Änderungen wurden zunächst lokal gesammelt und geprüft, bevor sie als Commits festgehalten wurden. Insgesamt sind über 80 Commits entstanden. Die Commit-Nachrichten orientieren sich am Conventional-Commits-Schema, beispielsweise `feat:`, `fix:` und `docs:`. Der finale Projektstand wird über den Branch `main` bereitgestellt.

### Erkenntnisse

Besonders zeitaufwendig waren die Bildergalerien. Das asymmetrische Layout sah auf großen Bildschirmen gut aus, musste für kleinere Ansichten aber mehrfach angepasst werden. Dabei zeigte sich, wie sich Flexbox und Grid für unterschiedliche Bildschirmgrößen einsetzen lassen.

Ein weiterer Punkt war die Ladezeit. Mit Lighthouse ließ sich prüfen, wie sich große Fotodateien auf die Performance auswirken. Bei der Lightbox und der mobilen Navigation waren außerdem die Tastaturbedienung und die Rückgabe des Fokus zu berücksichtigen.

Die Bereinigung der CSS-Datei hat spätere Änderungen erleichtert. Git machte die einzelnen Arbeitsschritte nachvollziehbar.

## Projektstruktur

```text
Silvis Portfolio/
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

- **css:** Stylesheet und responsive Design
- **fonts:** Lokal eingebundene Schriftarten
- **images:** Fotografien und weitere Bilddateien
- **js:** JavaScript-Funktionen
- **.gitignore:** Von Git ausgeschlossene Dateien
- **README.md:** Projektdokumentation
- **index.html:** Portfolio-Startseite
- **impressum.html und datenschutz.html:** Rechtliche Informationen

## Website öffnen

Die Website lässt sich lokal über `index.html` in einem Browser öffnen. Zusätzliche Frameworks oder Installationsschritte sind nicht erforderlich.
