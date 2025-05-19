# Børnelejren på Langeland - Projektdokumentation

## Om projektet
Dette projekt er et redesign af hjemmesiden for "Foreningen Børnelejren på Langeland" - en velgørende forening, der afholder finansierede lejre for dårligt stillede børn og unge fra hele Danmark.

## Design og UX
Designet følger det originale Figma-design ([Figma-link](https://www.figma.com/design/9BLRDsivTfJpjFJyAI4Hff/B%C3%B8rnelejren?node-id=0-1&t=e6DVS2kkLIc4LHfl-1)) uden afvigelser. Hjemmesiden har et responsivt design med tilpasset visning til både desktop og mobile enheder.


## Teknologier anvendt
- **Frontend**: React, React Router, Vite
- **Styling**: SCSS med modulær struktur
- **Backend**: Express.js
- **Database**: MongoDB
- **Deployment**: Miljøvariable håndteret med .env-filer

## Projektstruktur
Projektet følger en komponentbaseret arkitektur med følgende hovedsektioner:
- **Sider**: Forsiden, Om os, Bliv sponser, Børnelejren takker
- **Komponenter**: Header, Footer, Hero-sektion, Navigation, Sponsorformular, Burgermenu
- **Styling**: Modulariseret SCSS med variabler og responsive designs

## Features
- Responsivt design til alle enheder
- Interaktivt billedgalleri på "Om os"-siden
- Formularvalidering på sponsorsiden
- Visning af sponsorer fra databasen
- Burgermenu til mobile enheder

## API-integration
Projektet inkluderer en Express-backend, der kommunikerer med en MongoDB-database. API'en har følgende endpoints:
- `POST /api/sponsers`: Til registrering af nye sponsorer
- `GET /api/sponsers`: Til hentning af eksisterende sponsorer

## Start op
- Åben en ny terminal og kør: npm run dev:express.
- Åben en ny terminal og kør: npm run dev.
Eller
- **Live Site**: https://bornelejren-pa-langeland-emmarosby.onrender.com

## Konklusion
Projektet har resulteret i en moderne, responsiv hjemmeside, der præsenterer Børnelejrens formål og tilbyder en nem måde for virksomheder at støtte foreningens arbejde. Hjemmesiden følger det godkendte design og opfylder alle funktionelle krav.