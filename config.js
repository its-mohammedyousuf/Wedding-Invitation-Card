/* ==========================================================================
   EDIT YOUR INVITATION HERE
   Change any text between the quotation marks, save, and re-upload.
   Everything on the website (names, date, times, venue, music) comes from this file.
   ========================================================================== */

window.INVITE = {

  /* Browser tab title */
  siteTitle: "Second D/o Muzaffar Hussain Pangal & Mohammed Zeeshan Hegde — Wedding Invitation",

  /* First screen (the closed envelope) */
  splash: {
    /* printed on the envelope's front flap, one item per line */
    lines: [
      "Together with our families",
      "we cordially request",
      "the pleasure of",
      "your presence."
    ],
    sealLabel: "Open Me"
  },

   blessing: [
    "With the grace of Allah and the love of our families,",
    "we invite you to be a part of our special day."
  ],

  /* Names.
     bride.name is not printed on the card; it is used for the browser title,
     the calendar entry and the share message. */
  bride: { name: "Second D/o Muzaffar Hussain Pangal",           parent: "D/o Muzaffar Hussain Pangal" },
  groom: { name: "Mohammed Zeeshan Hegde", parent: "S/o Vasi Ahmed Hegde" },

  /* Italic message above the names (each item is one line) */


  /* Date: YYYY-MM-DD. The weekday (Saturday) is worked out automatically. */
  date: "2026-12-12",
  timezoneOffset: "+05:30",          // India

  /* Programme. "at" is 24-hour time, used for the countdown and calendar. */
  events: {
    nikah:     { label: "Nikah",     time: "6:45 PM", at: "18:45" },
    reception: { label: "Reception", time: "8:30 PM" }
  },

  /* Venue page */
  venue: {
    name: "Prestige Convention Centre",
    city: "Mysore",
    photo: "assets/venue.jpg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Prestige%20Convention%20Centre%20Mysore"
  },

  /* Countdown page */
  countdown: {
    kicker: "Until We Say “Qabul”",
    heading: "Countdown",
    arrived: "Alhamdulillah, the day has arrived"
  },

  /* Last page */
  thanks: {
    heading: "Thank You",
    line: "With your presence and Duas, our celebration will be complete"
  },

  /* Text sent when someone shares the invitation (the link is added after it) */
  shareMessage: "You are warmly invited to the wedding ceremony of Second D/o Muzaffar Hussain Pangal & Mohammed Zeeshan Hegde — Saturday, 12 December 2026, Prestige Convention Centre, Mysore.",

  /* Optional RSVP button. Put a WhatsApp number with country code and no
     spaces or + (example: "919876543210"). Leave empty "" to hide the button. */
  rsvpWhatsApp: "",

  /* Background music (your nasheed)
     - file:  the audio file inside the assets folder
     - start: seconds skipped at the start. It plays from here, and every time
              it ends it loops back to here.
     - volume: 0 to 100 */
  music: {
    file: "assets/nasheed.mp3",
    start: 5,
    volume: 80
  }
};
