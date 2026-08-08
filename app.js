/* ==========================================================================
   MAUI'S DINO ZONE · WEBSITE ENGINE
   You don't need to edit this file. All the content lives in dinos.js
   ========================================================================== */

(function () {
  'use strict';

  /* ======================================================================
     1. BUILD THE DINOSAUR CARDS
     ====================================================================== */

  const grid = document.getElementById('dino-grid');

  function cardHTML(d) {
    const dietLabel = d.diet === 'meat' ? 'MEAT EATER' : 'PLANT EATER';
    const factFilled = d.mauiFact && d.mauiFact.trim().length > 0;

    return `
      <div class="tag ${d.diet}">${dietLabel}</div>

      <div class="photo">
        <div class="placeholder" id="ph-${d.id}">
          <div class="icon">🦴</div>
          <div class="msg">Maui's picture goes here</div>
        </div>
        <img id="img-${d.id}" alt="A ${d.fullName} dinosaur">
        <div class="era-chip">${d.era.toUpperCase()}</div>
      </div>

      <div class="card-body">
        <h3>${d.name}</h3>
        <div class="say">"${d.nickname}" · say it: ${d.say}</div>
        <p class="about">${d.about}</p>

        <div class="stat">
          <div class="label"><span>POWER</span><span>${d.power}</span></div>
          <div class="bar"><i data-w="${d.power}"></i></div>
        </div>
        <div class="stat">
          <div class="label"><span>SPEED</span><span>${d.speed}</span></div>
          <div class="bar"><i data-w="${d.speed}"></i></div>
        </div>
        <div class="stat">
          <div class="label"><span>BRAINS</span><span>${d.brains}</span></div>
          <div class="bar"><i data-w="${d.brains}"></i></div>
        </div>

        <div class="idfile">
          <div class="ft">&#128451;&#65039; DINO ID FILE</div>
          <div class="row"><span class="k">Name means</span><span class="v"><em>${d.meaning}</em></span></div>
          <div class="row"><span class="k">Family</span><span class="v">${d.family}</span></div>
          <div class="row"><span class="k">Weight</span><span class="v">${d.weight}<small>${d.weightNote}</small></span></div>
          <div class="row"><span class="k">Size</span><span class="v">${d.size}</span></div>
          <div class="row"><span class="k">Lived in the</span><span class="v">${d.era} period</span></div>
        </div>

        <div class="mauifact ${factFilled ? '' : 'empty'}">
          <div class="mt">&#11088; MAUI'S FACT</div>
          ${factFilled
            ? d.mauiFact
            : '<span class="waiting">Maui is writing this one&hellip; &#9997;&#65039;</span>'}
        </div>
      </div>`;
  }

  DINOS.forEach(function (d) {
    const card = document.createElement('article');
    card.className = 'card reveal';
    card.dataset.diet = d.diet;
    card.dataset.era = d.era;
    card.innerHTML = cardHTML(d);
    grid.appendChild(card);
  });

  /* ======================================================================
     2. LOAD THE PICTURES · three steps, in this order:

       STEP 1  Maui's own picture   (assets/img/trex.jpg)
       STEP 2  a real photo from Wikipedia  (needs internet)
       STEP 3  the drawn artwork that ships with the site (always works)

     The card is never empty. As soon as Maui drops his own picture into
     assets/img/, step 1 wins and his picture is the one everybody sees.
     ====================================================================== */

  function showImage(id) {
    const img = document.getElementById('img-' + id);
    const ph = document.getElementById('ph-' + id);
    if (img) img.classList.add('loaded');
    if (ph) ph.style.display = 'none';
  }

  DINOS.forEach(function (d) {
    const img = document.getElementById('img-' + d.id);
    if (!img) return;

    let step = 1;
    const artwork = d.id + '.svg';

    img.addEventListener('load', function () {
      if (img.naturalWidth > 1) showImage(d.id);
    });

    img.addEventListener('error', function () {
      if (step === 1) {                    // no photo from Maui yet
        step = 2;
        loadFromWikipedia(d, img, artwork);
      } else if (step === 2) {             // Wikipedia URL failed to load
        step = 3;
        img.src = artwork;
      }
      // step 3 failing would be impossible · the file ships with the site
    });

    img.src = d.image;                     // STEP 1
  });

  function loadFromWikipedia(d, img, artwork) {
    if (!d.wiki) { img.src = artwork; return; }

    // If Wikipedia is slow or blocked, don't leave the card waiting.
    const giveUp = setTimeout(function () {
      if (!img.classList.contains('loaded')) img.src = artwork;
    }, 2500);

    fetch('https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(d.wiki))
      .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
      .then(function (data) {
        const src = (data.originalimage && data.originalimage.source) ||
                    (data.thumbnail && data.thumbnail.source);
        if (src) { img.src = src; } else { clearTimeout(giveUp); img.src = artwork; }
      })
      .catch(function () {
        clearTimeout(giveUp);
        img.src = artwork;                 // STEP 3
      });
  }

  /* ======================================================================
     3. FILTER BUTTONS (All / Meat eaters / Plant eaters)
     ====================================================================== */

  const filterBtns = document.querySelectorAll('.filters button');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      const want = btn.dataset.filter;
      document.querySelectorAll('.card').forEach(function (card) {
        const show = want === 'all' || card.dataset.diet === want;
        card.classList.toggle('hidden', !show);
      });
    });
  });

  /* ======================================================================
     4. BATTLE ARENA
     ====================================================================== */

  const selA = document.getElementById('fighter-a');
  const selB = document.getElementById('fighter-b');
  const verdict = document.getElementById('verdict');

  DINOS.forEach(function (d, i) {
    [selA, selB].forEach(function (sel) {
      const o = document.createElement('option');
      o.value = i;
      o.textContent = d.name;
      sel.appendChild(o);
    });
  });
  selA.value = 0;   // T. rex
  selB.value = 2;   // Velociraptor

  function statRow(label, a, b) {
    const aWin = a > b, bWin = b > a;
    return `<div class="row">
      <span class="v ${aWin ? 'win' : (bWin ? 'lose' : '')}">${a}</span>
      <span class="k">${label}</span>
      <span class="v ${bWin ? 'win' : (aWin ? 'lose' : '')}">${b}</span>
    </div>`;
  }

  function battle() {
    const a = DINOS[selA.value];
    const b = DINOS[selB.value];

    document.getElementById('name-a').textContent = a.name;
    document.getElementById('name-b').textContent = b.name;

    ['a', 'b'].forEach(function (side) {
      const d = side === 'a' ? a : b;
      const other = side === 'a' ? b : a;
      document.getElementById('stats-' + side).innerHTML = `
        <div class="row"><span class="k">Power</span><span class="v ${d.power > other.power ? 'win' : 'lose'}">${d.power}</span></div>
        <div class="row"><span class="k">Speed</span><span class="v ${d.speed > other.speed ? 'win' : 'lose'}">${d.speed}</span></div>
        <div class="row"><span class="k">Brains</span><span class="v ${d.brains > other.brains ? 'win' : 'lose'}">${d.brains}</span></div>
        <div class="row"><span class="k">Weight</span><span class="v">${d.weight}</span></div>
        <div class="row"><span class="k">Size</span><span class="v">${d.size.split(',')[0]}</span></div>`;
    });

    if (a === b) {
      verdict.innerHTML = '🤔 THAT\'S THE SAME DINOSAUR! <small>Pick two different ones to see who wins.</small>';
      return;
    }

    let pa = 0, pb = 0;
    if (a.power > b.power) pa++; else if (b.power > a.power) pb++;
    if (a.speed > b.speed) pa++; else if (b.speed > a.speed) pb++;
    if (a.brains > b.brains) pa++; else if (b.brains > a.brains) pb++;

    if (pa === pb) {
      verdict.innerHTML = '⚔️ IT\'S A DRAW! <small>These two are evenly matched, so it would be an epic fight.</small>';
    } else {
      const w = pa > pb ? a : b;
      const l = pa > pb ? b : a;
      verdict.innerHTML = '🏆 ' + w.name + ' WINS!' +
        '<small>' + w.name + ' beats ' + l.name + ' on ' + Math.max(pa, pb) +
        ' out of 3 stats. Remember: this is just for fun, and most of these dinosaurs never even met!</small>';
    }
  }

  selA.addEventListener('change', battle);
  selB.addEventListener('change', battle);
  battle();

  /* ======================================================================
     5. THE FACT MACHINE
     ====================================================================== */

  const factEl = document.getElementById('fact');
  let lastFact = -1;

  window.newFact = function () {
    if (FACT_MACHINE.length === 0) return;
    let i;
    do { i = Math.floor(Math.random() * FACT_MACHINE.length); }
    while (i === lastFact && FACT_MACHINE.length > 1);
    lastFact = i;
    factEl.style.opacity = 0;
    setTimeout(function () {
      factEl.textContent = FACT_MACHINE[i];
      factEl.style.opacity = 1;
    }, 160);
  };

  /* ======================================================================
     6. THE QUIZ
     ====================================================================== */

  let qIndex = 0, score = 0, answered = false;

  const qBox = document.getElementById('quiz-box');

  function renderQuestion() {
    answered = false;
    const q = QUIZ[qIndex];

    qBox.innerHTML = `
      <div class="quiz-progress">
        <span>QUESTION ${qIndex + 1} OF ${QUIZ.length}</span>
        <span class="score">SCORE: ${score}</span>
      </div>
      <div class="quiz-q">${q.q}</div>
      <div class="quiz-opts" id="quiz-opts"></div>
      <div class="quiz-feedback" id="quiz-feedback"></div>`;

    const opts = document.getElementById('quiz-opts');
    q.options.forEach(function (text, i) {
      const b = document.createElement('button');
      b.textContent = text;
      b.addEventListener('click', function () { pick(i, b); });
      opts.appendChild(b);
    });
  }

  function pick(i, btn) {
    if (answered) return;
    answered = true;

    const q = QUIZ[qIndex];
    const fb = document.getElementById('quiz-feedback');
    const all = document.querySelectorAll('#quiz-opts button');
    all.forEach(function (b) { b.disabled = true; });

    if (i === q.answer) {
      score++;
      btn.classList.add('correct');
      fb.innerHTML = '<span class="head good">🏆 CORRECT!</span>' + q.why;
    } else {
      btn.classList.add('wrong');
      all[q.answer].classList.add('correct');
      fb.innerHTML = '<span class="head bad">❌ ROAR! NOT QUITE!</span>' + q.why;
    }

    const next = document.createElement('button');
    next.className = 'btn btn-lime';
    next.style.marginTop = '20px';
    next.textContent = (qIndex < QUIZ.length - 1) ? 'NEXT QUESTION →' : 'SEE MY SCORE →';
    next.addEventListener('click', function () {
      qIndex++;
      if (qIndex < QUIZ.length) renderQuestion();
      else showFinal();
    });
    fb.appendChild(next);
  }

  function showFinal() {
    let rank, emoji;
    const pct = score / QUIZ.length;
    if (pct === 1)        { rank = 'DINOSAUR PROFESSOR';  emoji = '🥇'; }
    else if (pct >= 0.7)  { rank = 'FOSSIL HUNTER';       emoji = '🦴'; }
    else if (pct >= 0.4)  { rank = 'JUNIOR EXPLORER';     emoji = '🔍'; }
    else                  { rank = 'EGG THAT JUST HATCHED'; emoji = '🥚'; }

    qBox.innerHTML = `
      <div class="quiz-final">
        <div class="kicker">// Your Result</div>
        <div class="big">${score} / ${QUIZ.length}</div>
        <div class="rank">${emoji} ${rank}</div>
        <p style="color:var(--muted);margin-bottom:24px;">
          ${pct === 1 ? 'A perfect score! Nobody knows dinosaurs better than you.'
                      : 'Nice work! Read the dino cards again and beat your score.'}
        </p>
        <button class="btn btn-yellow" id="quiz-restart">PLAY AGAIN 🔁</button>
      </div>`;

    document.getElementById('quiz-restart').addEventListener('click', function () {
      qIndex = 0; score = 0; renderQuestion();
    });
  }

  renderQuestion();

  /* ======================================================================
     7. SCROLL ANIMATIONS + STAT BARS
     ====================================================================== */

  function showEverything() {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
    document.querySelectorAll('.bar i').forEach(function (bar) {
      bar.style.width = bar.dataset.w + '%';
    });
  }

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        e.target.querySelectorAll('.bar i').forEach(function (bar) {
          bar.style.width = bar.dataset.w + '%';
        });
        io.unobserve(e.target);
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

    // Safety net: if anything is still hidden after 4 seconds, just show it.
    setTimeout(showEverything, 4000);
  } else {
    showEverything();                      // very old browser · no animation, but visible
  }

  /* ======================================================================
     8. FOOTER YEAR
     ====================================================================== */
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

})();
