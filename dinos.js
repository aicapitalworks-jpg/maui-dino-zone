/* ==========================================================================
   MAUI'S DINO ZONE · THE DINOSAUR DATA FILE
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
   That's it · the website picks it up automatically.

   ⚠️ IMPORTANT: keep every comma and every "quotation mark" where it is.
   ========================================================================== */

const DINOS = [

  {
    id: "trex",
    name: "T. REX",
    fullName: "Tyrannosaurus rex",
    say: "TIE ran oh SORE us",
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
    about: "T. rex is the most famous dinosaur. Its teeth were as big as bananas. Its bite could crush a car. Its arms were tiny. But it was still huge and scary.",

    // ── ⭐ MAUI'S OWN FACT ────────────────────────
    mauiFact: "Everybody makes fun of T. rex for having tiny arms, but those arms were seriously strong. Scientists worked out that each one could pull about 200 kg towards its chest, and its biceps was three times thicker than a grown up's. Small arms, weightlifter muscles!",

    // ── PICTURE ───────────────────────────────────
    image: "trex.jpg",
    wiki: "Tyrannosaurus"              // used to load a real photo automatically
  },

  {
    id: "triceratops",
    name: "TRICERATOPS",
    fullName: "Triceratops horridus",
    say: "try SAIR uh tops",
    nickname: "The Tank",
    diet: "plant",
    era: "Cretaceous",

    meaning: "Three Horned Face",
    family: "Ceratopsidae",
    weight: "8,000 kg",
    weightNote: "heavier than an African elephant",
    size: "9 metres long, 3 metres tall",

    power: 80,
    speed: 40,
    brains: 55,

    about: "It had three horns and a big bony shield. Triceratops ate plants. It was brave. It could fight off a T. rex.",

    mauiFact: "You might think Triceratops was one of the smaller dinosaurs. It wasn't! It was bigger than an African elephant. Around 9 metres long, with a head so huge it could be 2.5 metres by itself.",

    image: "triceratops.jpg",
    wiki: "Triceratops"
  },

  {
    id: "velociraptor",
    name: "VELOCIRAPTOR",
    fullName: "Velociraptor mongoliensis",
    say: "vel OSS ih rap tor",
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

    about: "The real Velociraptor was small, like a turkey. It had feathers, not scales. It was fast and smart. It had a sharp claw on each foot.",

    mauiFact: "In Jurassic Park the Velociraptor looks huge, but the real one was tiny, about the size of a turkey. And it didn't have scaly reptile skin either. It was covered in feathers, just like a bird. Scientists know because they found the little bumps on its arm bones where the feathers attached.",

    image: "velociraptor.jpg",
    wiki: "Velociraptor"
  },

  {
    id: "brachiosaurus",
    name: "BRACHIOSAURUS",
    fullName: "Brachiosaurus altithorax",
    say: "BRACK ee oh SORE us",
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

    about: "It was as tall as four houses stacked up. Its front legs were longer than its back legs. That made its body slope up, like a ramp. It could reach leaves no one else could reach.",

    mauiFact: "In Jurassic Park, Brachiosaurus stands up on its back legs to reach the leaves. It could never really do that! Scientists tested it and found Brachiosaurus was far too heavy at the front, so it would have wobbled and fallen over. The real one also had a much thicker neck and a rounder belly than the movie version.",

    image: "brachiosaurus.jpg",
    wiki: "Brachiosaurus"
  },

  {
    id: "dilophosaurus",
    name: "DILOPHOSAURUS",
    fullName: "Dilophosaurus wetherilli",
    say: "dy LOAF oh SORE us",
    nickname: "The Double Crest",
    diet: "meat",
    era: "Jurassic",

    meaning: "Two Crested Lizard",
    family: "Dilophosauridae",
    weight: "400 kg",
    weightNote: "about the same as a grizzly bear",
    size: "7 metres long, 2 metres tall",

    power: 65,
    speed: 78,
    brains: 70,

    about: "Two thin crests sat on its head, like a crown. In movies it had a neck frill and spat venom. That part is not true. It was really one of the biggest hunters of its time.",

    mauiFact: "Jurassic Park got this dinosaur almost completely wrong. In the film it's small, it pops open a frilly collar and it spits venom. None of that is real! The actual Dilophosaurus had no frill, never spat venom, and was WAY bigger, about 7 metres long, one of the biggest hunters alive in its time.",

    image: "dilophosaurus.jpg",
    wiki: "Dilophosaurus"
  },

  {
    id: "stegosaurus",
    name: "STEGOSAURUS",
    fullName: "Stegosaurus stenops",
    say: "STEG oh SORE us",
    nickname: "The Spike Tail",
    diet: "plant",
    era: "Jurassic",

    meaning: "Roofed Lizard",
    family: "Stegosauridae",
    weight: "5,000 kg",
    weightNote: "about the same as a big truck",
    size: "9 metres long, 4 metres tall",

    power: 75,
    speed: 25,
    brains: 20,

    about: "Big bony plates ran down its back. Long spikes stuck out of its tail. It walked slowly and ate low plants. Its brain was as small as a walnut. But its body was as big as a bus.",

    mauiFact: "The four spikes on its tail have a funny official name: the thagomizer. A cartoonist made the word up as a joke and scientists liked it so much they kept it! And it really was a weapon. Scientists found a Stegosaurus spike that matched a hole punched into the tail bone of an Allosaurus, so we know it fought back and won.",

    image: "stegosaurus.jpg",
    wiki: "Stegosaurus"
  },

  {
    id: "pachycephalosaurus",
    name: "PACHYCEPHALOSAURUS",
    fullName: "Pachycephalosaurus wyomingensis",
    say: "PACK ee SEF ah lo SORE us",
    nickname: "The Helmet Head",
    diet: "plant",
    era: "Cretaceous",

    meaning: "Thick Headed Lizard",
    family: "Pachycephalosauridae",
    weight: "450 kg",
    weightNote: "about the same as a horse",
    size: "4.5 metres long, 2 metres tall",

    power: 60,
    speed: 62,
    brains: 45,

    about: "It had a hard dome of bone on its head. Little spikes ringed the dome, like a helmet. It ran fast on two legs. It ate leaves, seeds, and fruit.",

    mauiFact: "Scientists checked 109 of these bony domes and found that 22 of every 100 had healed injuries on them, all bunched around the very top. That is exactly where the damage would be if they charged at each other head first, like rams do today. The young ones had no injuries at all, so only the grown ups joined the head bashing contests.",

    image: "pachycephalosaurus.jpg",
    wiki: "Pachycephalosaurus"
  },

  {
    id: "parasaurolophus",
    name: "PARASAUROLOPHUS",
    fullName: "Parasaurolophus walkeri",
    say: "PA ra saw ROL oh fus",
    nickname: "The Trumpet",
    diet: "plant",
    era: "Cretaceous",

    meaning: "Near Crested Lizard",
    family: "Hadrosauridae",
    weight: "2,500 kg",
    weightNote: "about the same as a rhino",
    size: "10 metres long, 5 metres tall",

    power: 45,
    speed: 50,
    brains: 60,

    about: "The long tube on its head was not a horn. It was hollow inside. Air went up and down through it. It walked on four legs to eat. It ran on two legs.",

    mauiFact: "Maui is right, the crest made sounds! It is a hollow tube, so when air went through it the whole thing worked like a giant trumpet. In 1997 scientists put a fossil crest through a medical scanner, took 350 slices of it, built it inside a computer and blew air through the model. Out came a deep rumbling honk. We have actually heard the voice of a dinosaur that died 75 million years ago.",

    image: "parasaurolophus.jpg",
    wiki: "Parasaurolophus"
  },

  {
    id: "carnotaurus",
    name: "CARNOTAURUS",
    fullName: "Carnotaurus sastrei",
    say: "CAR no TORE us",
    nickname: "The Bull",
    diet: "meat",
    era: "Cretaceous",

    meaning: "Meat Eating Bull",
    family: "Abelisauridae",
    weight: "1,500 kg",
    weightNote: "about the same as a small car",
    size: "8 metres long, 3 metres tall",

    power: 82,
    speed: 88,
    brains: 62,

    about: "It had two thick horns above its eyes, like a bull. Its arms were tiny, even smaller than a T. rex's. It could not even reach its own mouth. But it was super fast.",

    mauiFact: "This was probably the fastest big hunter that ever lived. The secret was hidden in its tail: a running muscle that pulled its legs backwards with every step. For its body size it is the biggest muscle of that kind ever found on any animal, alive or extinct. But there was a catch. Its tail was so stiff that it could barely turn. It was brilliant in a straight line and terrible at corners.",

    image: "carnotaurus.jpg",
    wiki: "Carnotaurus"
  },

  {
    id: "compsognathus",
    name: "COMPSOGNATHUS",
    fullName: "Compsognathus longipes",
    say: "komp SOG na thus",
    nickname: "The Little One",
    diet: "meat",
    era: "Jurassic",

    meaning: "Elegant Jaw",
    family: "Compsognathidae",
    weight: "3 kg",
    weightNote: "about the same as a chicken",
    size: "1 metre long, 0.4 metres tall",

    power: 15,
    speed: 95,
    brains: 72,

    about: "It was one of the smallest dinosaurs. It was no bigger than a chicken. It was quick and light. It chased small animals on two skinny legs.",

    mauiFact: "We know exactly what one of them ate for its last meal. A fossil was found with a whole tiny lizard still sitting inside its rib cage, swallowed in one piece. At first scientists thought it was a baby Compsognathus, but it turned out to be lunch. It is one of the only times we get to see the actual last dinner of a dinosaur.",

    image: "compsognathus.jpg",
    wiki: "Compsognathus"
  }

];



/* ==========================================================================
   THE FACT MACHINE
   Add as many facts as you want. Put each one in "quotes" with a comma after.
   ========================================================================== */

const FACT_MACHINE = [
  "A T. rex tooth could be 30 cm long, as big as a school ruler. 📏",
  "Birds are living dinosaurs. That pigeon outside? A tiny dinosaur. 🐦",
  "The word 'dinosaur' means TERRIBLE LIZARD. 🦎",
  "The real Dilophosaurus never spat venom. The movies made that up. 🎬",
  "Some dinosaurs swallowed stones to help grind up food inside their stomachs. 🪨",
  "Stegosaurus had a brain the size of a walnut. Big body, tiny thoughts. 🥜",
  "The asteroid that ended the dinosaurs hit Mexico, in Yucatán, close to Cancún! 🌋",
  "Scientists can work out dinosaur colours from fossilised feathers. Some had stripes! 🎨",
  "Argentinosaurus was as long as three school buses parked in a line. 🚌",
  "A Triceratops skull could be 2.5 metres long, bigger than your bed. 🛏️",
  "T. rex lived closer in time to YOU than to Stegosaurus. 🤯",
  "Velociraptors had feathers, just like an eagle. ⚡",
  "Dinosaurs ruled the Earth for 165 million years. Humans have been here 0.3 million. ⏳",
  "The spikes on a Stegosaurus tail are officially called a thagomizer, a name invented by a cartoonist. 🦕",
  "Stegosaurus had a brain the size of a walnut inside a body as big as a bus. 🥜",
  "Pachycephalosaurus had a dome of solid bone on its head, like a built in crash helmet. 🪖",
  "Scientists used a hospital scanner to rebuild a Parasaurolophus crest and actually played its call. 🎺",
  "Carnotaurus had horns like a bull and arms so tiny they could not reach its own mouth. 🐂",
  "Compsognathus was no bigger than a chicken. One fossil still has its last meal inside it. 🐔",
  "Carnotaurus was built for straight lines. Its tail was so stiff it could barely turn a corner. 💨"
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
    why: "T. rex bit down with about 6 tonnes of force, enough to crush a car."
  },
  {
    q: "What does the name 'Triceratops' actually mean?",
    options: ["Three Horned Face", "Tall Runner", "Thunder Lizard", "Triple Tooth"],
    answer: 0,
    why: "Tri = three, cerat = horn, ops = face. Three Horned Face!"
  },
  {
    q: "How big was a real Velociraptor?",
    options: ["As big as a bus", "As big as a horse", "About the size of a turkey", "As big as a house"],
    answer: 2,
    why: "Only about 2 metres long and 15 kg. The movies made them much bigger."
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
    why: "Two thin bony crests on top of its skull. That's how it got its name."
  },
  {
    q: "Which animals alive today are actually dinosaurs?",
    options: ["Crocodiles", "Birds", "Lizards", "Sharks"],
    answer: 1,
    why: "Birds evolved from small feathered dinosaurs. They never went extinct!"
  },
  {
    q: "What is the funny official name for the spikes on a Stegosaurus tail?",
    options: ["The thagomizer", "The spikeulator", "The tail crown", "The stegospike"],
    answer: 0,
    why: "A cartoonist invented the word as a joke and scientists kept it."
  },
  {
    q: "Why did Pachycephalosaurus have a thick dome of bone on its head?",
    options: ["To carry water", "To bash heads with other dinosaurs", "To dig holes", "To help it swim"],
    answer: 1,
    why: "22 of every 100 domes have healed injuries right on the top, from charging head first."
  },
  {
    q: "What was special about the crest on a Parasaurolophus head?",
    options: ["It was hollow and made sounds", "It was full of poison", "It could change colour", "It was solid bone"],
    answer: 0,
    why: "It worked like a trumpet. Scientists rebuilt one in a computer and heard the sound."
  },
  {
    q: "Which dinosaur was about the size of a chicken?",
    options: ["Carnotaurus", "Stegosaurus", "Compsognathus", "Parasaurolophus"],
    answer: 2,
    why: "Compsognathus was around 1 metre long and weighed about 3 kg."
  }
];
