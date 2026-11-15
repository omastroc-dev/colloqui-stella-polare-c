// =====================================================================
//  CONFIGURAZIONE - qui modifichi tutto quello che serve, senza toccare
//  il resto del codice. Salva il file e ricaricalo su GitHub.
// =====================================================================
window.CONFIG = {

  // Nome mostrato in alto nella pagina
  scuola: "Scuola dell'Infanzia \"Stella Polare\"",
  sezione: "Sezione C",
  titolo: "Prenotazione colloqui con le insegnanti",

  // Incolla qui l'indirizzo che ti dà Google Apps Script (vedi LEGGIMI.md, passo 2).
  // Finché resta "INCOLLA_QUI..." la pagina funziona in MODALITÀ PROVA:
  // le prenotazioni restano solo nel tuo browser e NON sono condivise.
  API_URL: "https://script.google.com/macros/s/AKfycbynIEek9yJ1Dh7JfEj6OQRQAs5b_YoycqPZEuCfkRGtx0SIAsZFFvwyd8IpHB5pnZHv/exec",

  // Durata di ogni colloquio e pausa tra uno e l'altro (in minuti)
  slotMinutes: 5,
  breakMinutes: 0,

  // Il colloquio si svolge con ENTRAMBE le maestre: c'è un'unica agenda.
  // (l'id non va più cambiato dopo che sono iniziate le prenotazioni)
  teachers: [
    { id: "maestre", name: "Colloquio con le maestre Luciana e Ambra" }
  ],

  // GIORNO DEI COLLOQUI PER TUTTI (formato AAAA-MM-GG e HH:MM).
  // Gli slot vengono creati in automatico dentro la fascia.
  labelGiornoUnico: "Martedì 24 novembre",
  days: [
    { date: "2026-11-24", start: "16:00", end: "18:00" }
  ],

  // OPZIONE "UN ALTRO GIORNO": calendario + orari a scelta, per chi non può venire il giorno di tutti.
  // I giorni selezionabili sono quelli tra "from" e "to", nei giorni della settimana indicati
  // (1 = lunedì ... 5 = venerdì, 6 = sabato, 0 = domenica), escluse le date in "exclude".
  altro: {
    enabled: true,
    label: "Un altro giorno",
    from: "2026-11-16",
    to: "2026-12-22",
    weekdays: [1, 2, 3, 4, 5],
    exclude: ["2026-11-24", "2026-12-08"],   // 24/11 è già il giorno di tutti; 8/12 festivo
    start: "08:00",
    end: "16:00",
    slotMinutes: 5
  },

  // Testo informativo mostrato sopra gli orari (lascia "" per nasconderlo)
  avviso: "Il colloquio si svolge con entrambe le maestre, Luciana e Ambra. " +
          "Il giorno dei colloqui è martedì 24 novembre dalle 16:00. Se non puoi, scegli \"Un altro giorno\" " +
          "e prenota un orario tra le 8:00 e le 16:00. " +
          "Inserisci il tuo nome e quello del bambino/a: al termine riceverai un codice per annullare la prenotazione.",

  // Luogo del colloquio (appare anche nel file calendario scaricabile)
  luogo: "Scuola dell'Infanzia Stella Polare - Sezione C"
};
