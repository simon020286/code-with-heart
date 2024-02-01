---
author: Code with heart
pubDatetime: 2024-01-01T00:00:00Z
modDatetime: 2024-01-01T00:00:00Z
title: Come creare siti web veloci e ricchi di contenuti con Astro
slug: astro-tutorial-01
featured: true
draft: false
tags:
  - astro
  - javascript
  - web framework
  - static site generation
ogImage: https://astro.build/assets/press/astro-logo-dark.svg
image:
  theme: 
    light: https://astro.build/assets/press/astro-logo-dark.svg
    dark: https://astro.build/assets/press/astro-logo-light.svg
description:
  Installazione e introduzione a Astro.
---

Se sei alla ricerca di un framework web che ti permetta di creare siti web moderni, performanti e personalizzabili, allora devi assolutamente conoscere [Astro](https://astro.build/).  
È un progetto open source creato dal team di Vercel, la società dietro le popolari piattaforme di hosting e deployment web Next.js e Vercel.
Astro è un generatore di siti statici che si basa su una nuova architettura, chiamata Islands, che ottimizza le prestazioni del sito web, riducendo al minimo il codice JavaScript inviato al browser.  
Astro offre anche una grande flessibilità agli sviluppatori, che possono scegliere tra diversi sistemi di gestione dei contenuti (CMS), come WordPress, Contentful, Sanity e altri.  
In questo e nei prossimi articoli, ti mostrerò cos’è Astro, come funziona e come installarlo. Inoltre, ti darò alcuni esempi pratici di come usare Astro per creare componenti o pagine web con il framework UI che preferisci, tra React, Svelte, Vue e altri.  
Se sei curioso di scoprire Astro, continua a leggere!

### Installazione
Unico requisito è `Node.js` almeno alla versione `v18.14.1` e un editor di testo.

``` bash
npm create astro@latest
```

Per prima cosa viene chiesto in quale cartella creare il progetto, di default ne viene gia proposta una.
Poi viene richiesto come crearlo, a me piace avere il pieno controllo quindi lo creiamo partendo da zero, per fare questo selezioniamo Empty.  
Procediamo poi con l'installazione delle dipendenze, se non lo facciamo ora ricordiamoci di farlo terminata la creazione.
Successivamente bisogna scegliere se utilizzare typescript al posto di javascript puro, ovviamente selezioniamo yes, così da avere più controllo su quello che scriviamo. Subito dopo lasciamo pure il valore di default per la modalità strict di typescript.  
Ultimo passaggio, se vogliamo verrà inizializzato un repo git con già `.gitignore` valorizzato correttamente per escludere file e cartelle utilizzate da Astro.  
Ora entriamo nella cartella del progetto e proviamo a dare il comando:
``` bash
npm run dev
```
Se tutto è andato bene aprendo il browser all'indirizzo `http://localhost:4321/` comparirà una pagina con scritto solo **Astro**.  
Di default è abilitato l'hot reload, quindi qualsiasi modifica che faremo ai file del progetto sarà visibile immediatamente.  
Per fare una prova possiamo modificare il file `index.astro` nella cartella `src/pages`.  
Il routing viene gestito tramite file e cartelle all'interno della cartella `src/pages`. Proviamo a creare il file `about.astro` in questa cartella con il seguente contenuto

``` yaml
---

---

<html lang="en">
  <head>
    <meta charset="utf-8" />              <link rel="icon" type="image/svg+xml" href="/favicon.svg" />                <meta name="viewport" content="width=device-width" />       <meta name="generator" content={Astro.generator} />
    <title>About</title>
  </head>
  <body>
    <h1>About</h1>
  </body>
</html>
```

Navighiamo all'indirizzo `http://localhost:4321/about` e vedremo la nuova pagina.  
Spero che questo articolo introduttivo ti sia stato utile e ti abbia fatto venire voglia di provare Astro.  
Nei prossimi articoli esploreremo componenti e il routing con parametri.  
Alla prossima!