---
author: Code with heart
pubDatetime: 2024-01-09T00:00:00Z
modDatetime: 2024-01-09T00:00:00Z
title: Pillole di typescript - Variabili globali
slug: typescript-pills-global
featured: false
draft: false
tags:
  - typescript
  - pills
description:
  Risolviamo il problema delle variabili globali in typescript.
---

Quante volte hai trovato metodi o oggetti direttamente definiti nell'ambito globale, pronti per essere usati, solo per scoprire che TypeScript non riconosceva la loro definizione?

``` typescript
const value = window.glob();
```

In questo caso, TypeScript solleverebbe un'eccezione, affermando che l'oggetto window non dispone del metodo `glob()`.  
La soluzione rapida solitamente è stata questa:

``` typescript
const value = (window as any).glob();
```

Tuttavia, questo approccio ci priva del controllo desiderato sul codice.  
Fortunatamente, TypeScript offre una soluzione elegante anche per questo.
È possibile estendere il tipo `global` in modo intuitivo:

``` typescript
declare global {
    interface Window {
        glob(): void;
    }
}
const value = window.glob();
```

In questo modo, si ottiene il pieno controllo sul valore restituito e l'intellisense si allinea perfettamente al nuovo metodo.
Un esempio ulteriore potrebbe essere l'estensione dell'interfaccia `Array`, arricchendola con il metodo `print()`:

``` typescript
declare global {
    interface Window {
        glob(): void;
    }
    
    interface Array<T> {
        print(): void;
    }
}
const value = window.glob();
const print = [].print();
```

Alla prossima pillola.