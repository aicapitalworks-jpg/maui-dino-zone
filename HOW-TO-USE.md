# 🦖 Maui's Dino Zone — How To Use It

Everything is built and working. This guide covers the three things you'll
actually want to do: **open it**, **change it**, and **put it online**.

---

## 1. Open the website

Unzip the folder and double-click **`index.html`**. It opens in any browser.
No installing, no internet needed — it works straight away.

---

## 2. What's in the folder

```
dino-zone/
├── index.html                ← the website itself
├── HOW-TO-USE.md             ← this guide
└── assets/
    ├── css/style.css         ← the colours and design
    ├── js/
    │   ├── dinos.js          ← ⭐ ALL THE CONTENT LIVES HERE — this is Maui's file
    │   └── app.js            ← the engine (no need to touch)
    └── img/
        ├── READ-ME-FIRST.txt ← how to add pictures
        └── (5 dinosaur drawings that ship with the site)
```

**The only file Maui needs to open is `assets/js/dinos.js`.**

---

## 3. ⭐ Adding Maui's own facts

Open `assets/js/dinos.js` in any text editor (Notepad, TextEdit, VS Code).

Find the dinosaur, look for the line:

```js
mauiFact: "",
```

Type the fact between the quotation marks:

```js
mauiFact: "T. rex could smell a dead animal from 5 kilometres away!",
```

Save the file, refresh the browser. The yellow sticky note on that card
fills in automatically.

> ⚠️ Keep the quotation marks `"` and the comma `,` exactly where they are.
> Those are the only two things that can break it.

---

## 4. Adding real photographs

The site already shows a picture for every dinosaur. Here's how it decides
which one:

| Order | What it shows | When |
|-------|---------------|------|
| 1st choice | **Maui's own picture** | If a file like `trex.jpg` is in `assets/img/` |
| 2nd choice | **A real photo from Wikipedia** | Loads automatically when online |
| 3rd choice | **The drawing that ships with the site** | Always works, even with no internet |

So a card is **never** empty. To use Maui's own pictures, drop them into
`assets/img/` with these exact names:

```
trex.jpg      triceratops.jpg      velociraptor.jpg
brachiosaurus.jpg                  dilophosaurus.jpg
```

Best size: wide (landscape), about 1000 pixels across, under 500 KB.

Free places to get pictures you're allowed to use:
**commons.wikimedia.org** and **Wikipedia**. Please avoid Google Images —
most of those belong to someone else.

---

## 5. Adding a 6th dinosaur

In `assets/js/dinos.js`, copy one whole dinosaur block — everything from
`{` down to `},` — paste it at the bottom of the list, and change the words.
Then add its picture to `assets/img/` using the same name as its `id`.

Everything updates by itself: the cards, the battle arena dropdowns, all of it.

---

## 6. Changing the quiz and the fact machine

Both live at the bottom of `assets/js/dinos.js`.

- **`FACT_MACHINE`** — add any fact in quotes, with a comma after it.
- **`QUIZ`** — each question has 4 options. `answer: 0` means the **first**
  option is right, `answer: 1` the second, and so on. `why:` is the
  explanation shown after answering.

---

## 7. Putting it on the internet

**Step 1 — upload the site.** Easiest option is **Netlify Drop**:

1. Go to **app.netlify.com/drop**
2. Drag the whole `dino-zone` folder onto the page
3. Wait about 20 seconds — you get a live web address straight away

Other free options that work the same way: **Cloudflare Pages**,
**GitHub Pages**, **Vercel**.

**Step 2 — put it on your own address.**
The plan is a subdomain of `aicapitalapps.com`, e.g.
`mauidinozone.aicapitalapps.com`.

In whichever service you use to manage the `aicapitalapps.com` domain
(GoDaddy, Namecheap, Cloudflare, etc.), add one DNS record:

| Type | Name | Value |
|------|------|-------|
| CNAME | `mauidinozone` | the address the host gives you, e.g. `something.netlify.app` |

Then in Netlify go to **Domain settings → Add custom domain** and type
`mauidinozone.aicapitalapps.com`. It sets up the padlock (HTTPS) by itself.

DNS changes usually go live in a few minutes, sometimes up to a few hours.

---

## What's on the site

- **Meet the Dinos** — 5 cards with photos, POWER / SPEED / BRAINS bars, a full
  ID file (name meaning, family, weight, size, era) and Maui's fact note
- **Filters** — show all dinos, only meat eaters, or only plant eaters
- **Battle Arena** — pick any two dinosaurs, compare stats, get a winner
- **Time Travel** — the three dinosaur eras
- **Numbers That Go Hard** — big dinosaur statistics
- **The Fact Machine** — a button that digs up a random fact
- **The Dino Quiz** — 6 questions, keeps score, gives a rank at the end

Works on phones, tablets and computers.
