# Wedding Invitation Website

Mohammed Zeeshan Hegde & Zakiya Suman — Saturday, 12 December 2026

## What is in this folder

| File | What it does |
|---|---|
| `config.js` | **All your wording lives here**: names, parents, date, times, venue, music, RSVP number. Edit this file for any change. |
| `assets/background.jpg` | The background wallpaper of the cards. |
| `assets/venue.jpg` | The hall photo, shown faintly inside the arch on the Venue page. Replace it with another image of the same name to change it. |
| `assets/arch-mask.png` | The arch shape that the hall photo is fitted into. Leave it as it is. |
| `assets/nasheed.mp3` | The background nasheed. |
| `index.html` | The page structure and the envelope artwork. |
| `style.css` | Fonts, colours, layout and the envelope animation. |
| `app.js` | Envelope opening, countdown, music, calendar and share panel. |

## How the website flows

1. **Envelope**: Bismillah calligraphy, the welcome line printed on the front flap, and a maroon wax seal with a floral design. Tapping the seal opens the envelope (top flap, then the sides, then the bottom).
2. **Invitation**, then **Venue** (hall photo as a watermark inside the arch, plus a Google Maps button), then **Countdown**, then **Thank You** (Share Invitation and Open Again buttons).
3. The nasheed starts as the seal is tapped, skips its first 5 seconds, and loops from that point.

## Changing things

Open `config.js` in any text editor (Notepad is fine), change the text between the quotation marks, save, and re-deploy.

- **Date**: change `date` (format `YYYY-MM-DD`). The weekday, the big number and the countdown update by themselves.
- **Times**: change `time` (shown on the card) and `at` (24-hour, used by the countdown and calendar).
- **Music**: replace `assets/nasheed.mp3`, or change `start` (seconds to skip) and `volume`.
- **RSVP button**: add a WhatsApp number in `rsvpWhatsApp`, with country code, no `+` or spaces (e.g. `918792240757`).
- **Share message**: change `shareMessage`.
- **Colours**: the maroon and gold values are at the top of `style.css`.
- **Envelope flap text**: change `splash.lines` (one item per line).

## Putting it online with Vercel

**Option A: no coding (GitHub + Vercel)**
1. Create a free account on github.com, click **New repository**, name it (for example `wedding-invite`), then **uploading an existing file**.
2. Drag in everything from this folder (all files **and** the `assets` folder) and click **Commit changes**.
3. Go to vercel.com, sign in with GitHub, click **Add New → Project**, pick the repository and click **Deploy**. No settings need changing.
4. Vercel gives you a link like `your-name.vercel.app`. Under **Settings → Domains** you can rename it.

**Option B: command line**
1. Install Node.js, then open a terminal in this folder.
2. Run `npx vercel`, then `npx vercel --prod` for the final link.

**To update later**: edit `config.js`, then upload it again to GitHub (or run `npx vercel --prod`). Vercel redeploys automatically.

## One small thing after it is live

For the preview picture when the link is shared on WhatsApp, open `index.html`, find the line with `og:image`, and change `assets/background.jpg` to the full address, for example `https://your-name.vercel.app/assets/background.jpg`.
