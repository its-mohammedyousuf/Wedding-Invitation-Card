# Wedding Invitation Website

Invitation from Dr. Shama Kousar — December 2026

## What is in this folder

| File | What it does |
|---|---|
| `config.js` | Names, event dates and details, invitation text, music, and optional RSVP number. |
| `assets/background.jpg` | The supplied invitation artwork. Its Bismillah calligraphy appears once, on the main invitation card. |
| `assets/venue.jpg` | Faint watermark photo on the venue page. |
| `assets/arch-mask.png` | Arch mask for the venue watermark. |
| `assets/nasheed.mp3` | Background nasheed. |
| `index.html` | Page structure and envelope artwork. |
| `style.css` | Fonts, colours, layout, and envelope animation. |
| `app.js` | Event details, countdown, music, calendar, maps, and sharing. |

## Invitation flow

Open the envelope to see the invitation, then scroll through **The Venue**, **Countdown**, and **Compliments From** cards. Each event has its own date, venue, address, and Google Maps link. The calendar download includes the engagement, wedding, and reception. The nasheed starts when the envelope opens.

## Editing

Edit `config.js` to change the invitation wording or event details. Dates use `YYYY-MM-DD`; add an `at` value in 24-hour time only when an event time is provided. Replace `assets/background.jpg` to change the invitation artwork. Music can be replaced at `assets/nasheed.mp3`; `start` and `volume` control playback.

## Deployment

This is a static website and can be hosted on Vercel, Cloudflare Pages, or another static host. Use `invitation-from-dr-shamakousar` as the deployment project/slug if it is available; hosting will assign the final public URL.
