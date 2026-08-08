/* ==========================================================================
   MAUI'S DINO ZONE — THE DINOSAUR DATA FILE
   ==========================================================================

   👋 HI MAUI! THIS IS THE ONLY FILE YOU NEED TO EDIT.

   Everything on the website comes from this file. To change a dinosaur,
   just change the words between the "quotation marks".

   TO ADD YOUR OWN FACT:
   Find the line that says   mauiFact: ""
   and type your fact inside the quotes, like this:
   mauiFact: "T. rex could smell food from 5 kilometres away!"

   TO ADD YOUR OWN PICTURE:
   1. Save your dinosaur picture in the folder:  assets/img/
   2. Name it exactly like the "image" line says (example: trex.jpg)
   That's it — the website picks it up automatically.

   ⚠️ IMPORTANT: keep every comma and every "quotation mark" where it is.
   ========================================================================== */

const DINOS = [

  {
    id: "trex",
    name: "T. REX",
    fullName: "Tyrannosaurus rex",
    say: "TIE-ran-oh-SORE-us",
    nickname: "The King",
    diet: "meat",                       // "meat" or "plant"
    era: "Cretaceous",

    // ── DINO ID FILE ──────────────────────────────
    meaning: "Tyrant Lizard King",
    family: "Tyrannosauridae",
    weight: "8,000 kg",
    weightNote: "about the same as 2 elephants",
    size: "12 metres long, 4 metres tall",

    // ── POWER STATS (0 to 100) ────────────────────
    power: 98,
    speed: 55,
    brains: 75,

    // ── THE DESCRIPTION ───────────────────────────
    about: "The most famous dinosaur of all time. Teeth the size of bananas, a bite strong enough to crush a car, and arms so small they became a joke. Nobody was laughing 66 million years ago.",

    // ── ⭐ MAUI'S OWN FACT ────────────────────────
    mauiFact: "Everybody makes fun of T. rex for having tiny arms — but those arms were seriously strong. Scientists worked out that each one could pull about 200 kg towards its chest, and its biceps was three times thicker than a grown-up's. Small arms, weightlifter muscles!",

    // ── PICTURE ───────────────────────────────────
    image: "trex.jpg",
    wiki: "Tyrannosaurus"              // used to load a real photo automatically
  },

  {
    id: "triceratops",
    name: "TRICERATOPS",
    fullName: "Triceratops horridus",
    say: "try-SAIR-uh-tops",
    nickname: "The Tank",
    diet: "plant",
    era: "Cretaceous",

    meaning: "Three-Horned Face",
    family: "Ceratopsidae",
    weight: "8,000 kg",
    weightNote: "heavier than an African elephant",
    size: "9 metres long, 3 metres tall",

    power: 80,
    speed: 40,
    brains: 55,

    about: "Three sharp horns and a giant bony shield around its neck. Triceratops ate plants, but it was one of the only dinosaurs brave enough to stand its ground against a T. rex.",

    mauiFact: "You might think Triceratops was one of the smaller dinosaurs. It wasn't! It was bigger than an African elephant — around 9 metres long, with a head so huge it could be 2.5 metres by itself.",

    image: "triceratops.jpg",
    wiki: "Triceratops"
  },

  {
    id: "velociraptor",
    name: "VELOCIRAPTOR",
    fullName: "Velociraptor mongoliensis",
    say: "vel-OSS-ih-rap-tor",
    nickname: "The Ninja",
    diet: "meat",
    era: "Cretaceous",

    meaning: "Swift Thief",
    family: "Dromaeosauridae",
    weight: "15 kg",
    weightNote: "about the same as a medium dog",
    size: "2 metres long, 0.5 metres tall",

    power: 45,
    speed: 92,
    brains: 90,

    about: "Forget the movies — the real Velociraptor was the size of a turkey and covered in feathers. But it was lightning fast, very smart, and had a killer curved claw on each foot.",

    mauiFact: "In Jurassic Park the Velociraptor looks huge — but the real one was tiny, about the size of a turkey. And it didn't have scaly reptile skin either. It was covered in feathers, just like a bird. Scientists know because they found the little bumps on its arm bones where the feathers attached.",

    image: "velociraptor.jpg",
    wiki: "Velociraptor"
  },

  {
    id: "brachiosaurus",
    name: "BRACHIOSAURUS",
    fullName: "Brachiosaurus altithorax",
    say: "BRACK-ee-oh-SORE-us",
    nickname: "The Skyscraper",
    diet: "plant",
    era: "Jurassic",

    meaning: "Arm Lizard",
    family: "Brachiosauridae",
    weight: "35,000 kg",
    weightNote: "heavier than 8 elephants",
    size: "22 metres long, 13 metres tall",

    power: 70,
    speed: 20,
    brains: 35,

    about: "Taller than a four-storey building. Its front legs were longer than its back legs, so it stood tilted upward like a giraffe and ate leaves nothing else could reach.",

    mauiFact: "In Jurassic Park, Brachiosaurus stands up on its back legs to reach the leaves. It could never really do that! Scientists tested it and found Brachiosaurus was far too heavy at the front — it would have wobbled and fallen over. The real one also had a much thicker neck and a rounder belly than the movie version.",

    image: "brachiosaurus.jpg",
    wiki: "Brachiosaurus"
  },

  {
    id: "dilophosaurus",
    name: "DILOPHOSAURUS",
    fullName: "Dilophosaurus wetherilli",
    say: "dy-LOAF-oh-SORE-us",
    nickname: "The Double Crest",
    diet: "meat",
    era: "Jurassic",

    meaning: "Two-Crested Lizard",
    family: "Dilophosauridae",
    weight: "400 kg",
    weightNote: "about the same as a grizzly bear",
    size: "7 metres long, 2 metres tall",

    power: 65,
    speed: 78,
    brains: 70,

    about: "Two thin bony crests sat on top of its head like a crown. The movies gave it a neck frill and venom spit — scientists say neither of those was real. The truth is cooler: it was one of the biggest hunters of its time.",

    mauiFact: "Jurassic Park got this dinosaur almost completely wrong. In the film it's small, it pops open a frilly collar and it spits venom. None of that is real! The actual Dilophosaurus had no frill, never spat venom, and was WAY bigger — about 7 metres long, one of the biggest hunters alive in its time.",

    image: "dilophosaurus.jpg",
    wiki: "Dilophosaurus"
  }

];


/* ==========================================================================
   THE FACT MACHINE
   Add as many facts as you want. Put each one in "quotes" with a comma after.
   ========================================================================== */

const FACT_MACHINE = [
  "A T. rex tooth could be 30 cm long — as big as a school ruler. 📏",
  "Birds are living dinosaurs. That pigeon outside? A tiny dinosaur. 🐦",
  "The word 'dinosaur' means TERRIBLE LIZARD. 🦎",
  "The real Dilophosaurus never spat venom — the movies made that up. 🎬",
  "Some dinosaurs swallowed stones to help grind up food inside their stomachs. 🪨",
  "Stegosaurus had a brain the size of a walnut. Big body, tiny thoughts. 🥜",
  "The asteroid that ended the dinosaurs hit Mexico, in Yucatán — close to Cancún! 🌋",
  "Scientists can work out dinosaur colours from fossilised feathers. Some had stripes! 🎨",
  "Argentinosaurus was as long as three school buses parked in a line. 🚌",
  "A Triceratops skull could be 2.5 metres long — bigger than your bed. 🛏️",
  "T. rex lived closer in time to YOU than to Stegosaurus. 🤯",
  "Velociraptors had feathers, just like an eagle. ⚡",
  "Dinosaurs ruled the Earth for 165 million years. Humans have been here 0.3 million. ⏳"
];


/* ==========================================================================
   THE QUIZ
   answer: 0 means the first option is correct, 1 means the second, and so on.
   ========================================================================== */

const QUIZ = [
  {
    q: "Which dinosaur had the strongest bite of any land animal ever?",
    options: ["Velociraptor", "T. rex", "Triceratops", "Brachiosaurus"],
    answer: 1,
    why: "T. rex bit down with about 6 tonnes of force — enough to crush a car."
  },
  {
    q: "What does the name 'Triceratops' actually mean?",
    options: ["Three-Horned Face", "Tall Runner", "Thunder Lizard", "Triple Tooth"],
    answer: 0,
    why: "Tri = three, cerat = horn, ops = face. Three-Horned Face!"
  },
  {
    q: "How big was a real Velociraptor?",
    options: ["As big as a bus", "As big as a horse", "About the size of a turkey", "As big as a house"],
    answer: 2,
    why: "Only about 2 metres long and 15 kg — the movies made them much bigger."
  },
  {
    q: "Which of these dinosaurs ate PLANTS, not meat?",
    options: ["Dilophosaurus", "T. rex", "Velociraptor", "Brachiosaurus"],
    answer: 3,
    why: "Brachiosaurus ate around 400 kg of leaves every single day."
  },
  {
    q: "What made Dilophosaurus easy to recognise?",
    options: ["Two crests on its head", "A frill that popped open", "Bright blue feathers", "A spiked tail"],
    answer: 0,
    why: "Two thin bony crests on top of its skull — that's how it got its name."
  },
  {
    q: "Which animals alive today are actually dinosaurs?",
    options: ["Crocodiles", "Birds", "Lizards", "Sharks"],
    answer: 1,
    why: "Birds evolved from small feathered dinosaurs. They never went extinct!"
  }
];
