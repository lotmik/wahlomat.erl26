# Wahl-O-Mat Erlangen 2026

Statische Webseite (HTML/CSS/JS) im minimalen Stil mit Inter-Font, inspiriert vom Ablauf des bpb Wahl-O-Mat.

## Lokal starten

Einfach `index.html` im Browser oeffnen.

## Als GitHub Pages hosten

1. Repository nach GitHub pushen (Branch `main`).
2. Workflow `.github/workflows/pages.yml` deployed automatisch auf Branch `gh-pages`.
3. In GitHub bei Bedarf einmal pruefen: `Settings` -> `Pages` -> Source `Deploy from a branch`, Branch `gh-pages`, Folder `/ (root)`.
4. Die Seite ist dann unter `https://<dein-user>.github.io/<repo-name>/` erreichbar.

## Dateien

- `index.html`: Struktur und Bereiche (Intro, Thesen, Ergebnis)
- `styles.css`: Minimalistisches Layout und responsive Design
- `app.js`: Thesen-Daten, Quiz-Logik, Matching-Auswertung
