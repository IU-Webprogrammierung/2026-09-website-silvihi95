# Projektübersicht: Persönlicher Webauftritt

Projekt im Rahmen des Kurses **Projekt: Web-Programmierung (DLBUXPWP01)**, IU Internationale Hochschule
Silvia Hienz

Hier erstelle ich meinen persönlichen Webauftritt als responsiven One-Pager. Die Seite bringt meine verschiedenen Interessen und Arbeitsbereiche an einen Ort: meine Fotografie inklusive Nebengewerbe, Reiseberichte, Buchtipps sowie zwei meiner Code-Projekte (das Uni-Projekt „Sichelhenket" und das private Projekt „My-Hits").

## Aktueller Status

Konzeption abgeschlossen: Das HTML-Grundgerüst steht und die CSS-Basis ist aufgebaut. In den nächsten Phasen folgt der visuelle und technische Feinschliff.

## Technische Basis

* HTML5 & CSS3: Semantischer Aufbau und reines CSS – ohne externe Frameworks, passend zur Vorgabe aus der Konzeptionsphase.
* Styling: CSS Custom Properties (Variablen) für einheitliche Farben und Schriften.
* Layouts: Flexbox für flexible Elemente und CSS Grid für die Bild-Galerien.
* Versionskontrolle: Git und GitHub mit sauberen Commits nach dem Conventional Commits-Standard (`feat:`, `fix:`, `chore:`, `style:`, `docs:`).

## Aufteilung der Seite

1. Hero-Bereich: Kurze Vorstellung, Kamera-Logo und Social-Media-Links
2. Fotografie: Galerie ausgewählter Bilder
3. Nebengewerbe: Infos zu meinen Leistungen
4. Reisen: Impressionen aus Finnland, Island und Südtirol
5. Lesen: Lieblingsautorin und Buchtipps
6. Uni-Projekt: Die Sichelhenket-Website
7. Privat-Projekt: My-Hits

## Responsive Design & Barrierefreiheit

* Breakpoint bei 768px: Unterhalb dieser Breite stapeln sich die Inhalte vertikal und die Navigation klappt als Hamburger-Menü ein. Darüber ist das Menü horizontal und die Galerien wechseln in ein mehrspaltiges Raster.
* Zielbereich: Ausgelegt und getestet für Bildschirme von 360px bis 1920px Breite.
* Accessibility: Klare Semantik (`header`, `main`, `section`, `footer`), `alt`-Texte für alle Bilder, `aria-label` bei der Navigation und gut sichtbare Fokus-Zustände für die Tastatur-Bedienung.

## Nächste Schritte

In den kommenden Wochen / Phasen ergänze ich die verbleibenden Bilder, verfeinere das responsive Styling im Header- und Navigationsbereich und gehe noch einmal gezielt an die Barrierefreiheit.
