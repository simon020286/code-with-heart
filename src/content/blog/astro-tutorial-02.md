---
author: Code with heart
pubDatetime: 2024-01-27T00:00:00Z
modDatetime: 2024-01-27T00:00:00Z
title: Come creare siti web veloci e ricchi di contenuti con Astro 02
slug: astro-tutorial-02
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
  Layout e componenti in Astro.
---

Oggi proseguiamo la nostra avventura con Astro, introducendo i layout e i componenti.  
Come in ogni framework javascript è possibile suddividere il codice in componenti, per centralizzare codice riutilizzabile.  
I layout servono per rendere il codice più manuntenibile. Immaginiamo per esempio di dover modificare una voce nel menu principale o un dato nel footer, se non avessimo un punto comune dovremmo farlo in ogni pagina del sito.  
Questi non sono altro che dei componenti di Astro e sono molto simili alle pagine.  
La differenza principale è che includono il tag `<slot />`, questo serve per indicare dove renderizzare il contenuto principale.  
Vediamo ora un esempio di layout. Creiamo la cartella `src/layouts` e al suo interno il file `BaseLayout.astro`.  
``` html
---
export type Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>{title}</title>
    <meta name="description" content={description} />
  </head>
  <body>
    <header>
      <div class="header-wrapper">
        <h1>{title}</h1>
      </div>
    </header>
    <slot />
    <footer>
      <div class="footer-wrapper">
        Copyright
      </div>
    </footer>
  </body>
</html>
```

In questo esempio possiamo vedere molte cose interessanti.   
Per prima cosa l'esportazione di un `type`, il nome `Props` è prefissato e serve per dichiarare il tipo che `Astro.props` ci restituisce per il file corrente. Quest'ultimo invece è un oggetto, iniettato in ogni file `.astro` e serve per recuperare i parametri passati al componenete.  
Astro utilizza la sintassi `JSX` come template, infatti possiamo vedere l'utilizzo di `{title}` per scrivere nella pagina il valore della variabile.  
A questo punto possiamo modificare il file `index.astro` visto nel precedente capitolo, in questo modo.  
``` html
---
import BaseLayout from "../layouts/BaseLayout.astro";
const title = "Home page";
const description = "Prima pagina";
---
<BaseLayout title={title} description={description}>
  <div>
    Prima pagina del sito
  </div>  
</BaseLayout>
```
Imparato questo potremmo anche spingerci oltre ad esempio creando un componente per l'header e per il footer così da suddividere ulteriormente il codice.  
Creiamo la cartella `src/components` e al suo interno i file `Header.astro` e `Footer.astro`.

``` html
---
export type Props {
  title: string;
}

const { title } = Astro.props;
---
<header>
  <div class="header-wrapper">
    <h1>{title}</h1>
  </div>
</header>
```

``` html
---
---
<footer>
  <div class="footer-wrapper">
    Copyright
  </div>
</footer>
```

Infine aggiorniamo il file `BaseLayout.astro` per utizzare i componenti appena cresti.  

``` html
---
import Header from "../components/Header.astro";
import Footer from "../components/Footer.astro";
export type Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>{title}</title>
    <meta name="description" content={description} />
  </head>
  <body>
    <Header title={title} />
    <slot />
    <Footer />
  </body>
</html>
```

Per questa lezione è tutto, nella prossima vedremo come creare contenuti in markdown e organizzarli al meglio.