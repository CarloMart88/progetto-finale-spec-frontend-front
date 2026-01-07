🖼️ Cosa devi realizzare

Una SPA che simula l’esperienza di un utente non autenticato, che può:

Sfogliare, cercare e filtrare record
Confrontare più elementi tra loro
Salvare i preferiti
❌ Non può creare, modificare o cancellare record.

🥉 Requisiti Minimi

Per considerare il progetto completo, devono essere implementate almeno queste funzionalità:

Gestione di una risorsa definita in types.ts

Lista dei record, che mostra solo le proprietà principali title e category, e include:

Barra di ricerca per cercare nei titoli (title)
Filtro per categoria (category)
Ordinamento alfabetico per title o category (A-Z e Z-A)
Pagina di dettaglio per ogni record, con visualizzazione estesa delle sue proprietà (es. price, description, brand, ecc.)

Comparatore di 2 record, visualizzati affiancati per confrontarne le caratteristiche.

È libera la modalità di selezione: puoi permettere all’utente di aggiungere record al comparatore direttamente dalla lista, dalla pagina di dettaglio, oppure usare un menu a tendina, checkbox o qualsiasi altro sistema.

L’importante è che l’utente possa scegliere 2 record qualsiasi e confrontarli in modo chiaro.

Sistema di preferiti, sempre accessibile e aggiornabile:

L’utente può aggiungere o rimuovere record dai preferiti in qualsiasi momento
I preferiti devono essere consultabili in ogni sezione dell’app (es. tramite una sezione dedicata, un’icona fissa, o una sidebar)
