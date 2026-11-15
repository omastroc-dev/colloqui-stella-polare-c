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
  slotMinutes: 15,
  breakMinutes: 0,

  // Chi riceve i genitori. Se c'è UNA sola voce, la scelta dell'insegnante
  // non viene mostrata. Per più insegnanti aggiungi altre righe:
  //   { id: "rossi", name: "Maestra Rossi" },
  //   { id: "bianchi", name: "Maestra Bianchi" },
  // (l'id: solo lettere minuscole/numeri, senza spazi, e non va più cambiato
  //  dopo che sono iniziate le prenotazioni)
  teachers: [
    { id: "luciana", name: "Maestra Luciana" },
    { id: "ambra", name: "Maestra Ambra" }
  ],

  // Giorni e fasce orarie disponibili (formato AAAA-MM-GG e HH:MM).
  // Gli slot vengono creati in automatico dentro ogni fascia.
  days: [
    { date: "2026-11-24", start: "16:00", end: "18:00" },
    { date: "2026-11-25", start: "16:00", end: "18:00" },
    { date: "2026-11-26", start: "16:00", end: "18:00" }
  ],

  // Testo informativo mostrato sopra gli orari (lascia "" per nasconderlo)
  avviso: "Scegli un orario libero, inserisci i tuoi dati e conferma. " +
          "Al termine riceverai un codice per annullare o spostare la prenotazione.",

  // Luogo del colloquio (appare anche nel file calendario scaricabile)
  luogo: "Scuola dell'Infanzia Stella Polare - Sezione C"
};
