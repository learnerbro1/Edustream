const fs = require('fs');
const path = require('path');

const englishData = [
  // PROSE
  {
    id: 'a-letter-to-god',
    title: 'A Letter to God',
    theme: 'The story revolves around the theme of <span class="hl">unquestioning faith in God</span> and the <span class="hl2">irony of human nature</span>. It shows how faith can give hope in the darkest times, but also highlights the lack of trust humans have in each other.',
    characters: '<b>Lencho:</b> A hardworking, naive farmer with immense faith in God. He is optimistic but lacks faith in humanity.<br><b>Postmaster:</b> A kind, compassionate, and empathetic man who decides to help Lencho to keep his faith intact.',
    keywords: 'Hailstorm, Unshaken Faith, Irony, Bunch of crooks, Compassion',
    pyqs: [
      { q: 'Why did Lencho say the raindrops were like "new coins"?', marks: 2, ans: 'Lencho’s crops were ready for harvest. The rain would bring a good yield and prosperity. Hence, he compared the raindrops to new coins.' },
      { q: 'What is the irony in the story?', marks: 3, tag: 'IMPORTANT', ans: 'The irony is that Lencho blamed the post office employees for stealing his money, calling them a "bunch of crooks," when in reality, they were the ones who had collected the money to help him.' },
      { q: 'Describe the character of the postmaster.', marks: 5, tag: 'CBSE 2019', ans: 'The postmaster is a fat, amiable fellow. He is highly empathetic and kind. When he saw Lencho’s letter to God, he initially laughed but quickly became serious. He admired Lencho’s faith and decided to help him by collecting money from his employees and friends. He is a symbol of humanity and selfless charity.' }
    ]
  },
  {
    id: 'nelson-mandela-long-walk-to-freedom',
    title: 'Nelson Mandela: Long Walk to Freedom',
    theme: 'The chapter explores the theme of <span class="hl">struggle for freedom</span>, the <span class="hl2">evils of apartheid</span>, and the true meaning of courage. It highlights that no one is born hating another person because of the color of their skin.',
    characters: '<b>Nelson Mandela:</b> A resilient leader, deeply patriotic, who transformed from a frightened young man to a bold revolutionary. He believes that true freedom is indivisible and courage is the triumph over fear.',
    keywords: 'Apartheid, Oppressor, Oppressed, Triumph over fear, Twin obligations',
    pyqs: [
      { q: 'What are the "twin obligations" every man has in life, according to Mandela?', marks: 2, ans: 'Every man has two obligations: one to his family, parents, wife, and children; and the second to his people, his community, and his country.' },
      { q: 'What does courage mean to Mandela?', marks: 3, tag: 'IMPORTANT', ans: 'For Mandela, courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.' },
      { q: 'How did Mandela’s understanding of freedom change with age and experience?', marks: 5, tag: 'CBSE 2020', ans: 'As a boy, Mandela thought he was born free as long as he obeyed his father. As a student, he wanted freedom just for himself. Later, as a young man, he yearned for the basic and honorable freedoms of achieving his potential. Finally, he realized that the freedom of all his people was curtailed, which transformed him into a freedom fighter.' }
    ]
  },
  {
    id: 'two-stories-about-flying',
    title: 'Two Stories about Flying',
    theme: '<b>Part 1 (His First Flight):</b> Overcoming fear through courage and necessity.<br><b>Part 2 (The Black Aeroplane):</b> Mystery, faith, and the will to survive against all odds.',
    characters: '<b>Young Seagull:</b> Timid, afraid to fly, but ultimately conquers fear when pushed by hunger.<br><b>Pilot (Narrator):</b> Determined to reach home, takes a huge risk by flying into a storm, guided by an unknown force.',
    keywords: 'Cowardice, Hunger, Leap of faith, Storm clouds, Mysterious guide',
    pyqs: [
      { q: 'Why was the young seagull afraid to fly?', marks: 2, ans: 'He felt that his wings would never support him and he would fall into the vast sea below.' },
      { q: 'How did the mother seagull trick the young seagull into flying?', marks: 3, tag: 'IMPORTANT', ans: 'She flew towards him with a piece of fish but halted just out of reach. Maddened by hunger, the young seagull dived at the fish, falling outwards and downwards, which forced his wings to open and he started flying.' },
      { q: 'Who do you think helped the narrator in "The Black Aeroplane"?', marks: 5, ans: 'It remains a mystery. It could have been the narrator’s own hallucination out of fear and desperation, or his own subconscious mind guiding him through the storm, as there was no other airplane registered on the radar.' }
    ]
  },
  {
    id: 'from-the-diary-of-anne-frank',
    title: 'From the Diary of Anne Frank',
    theme: 'The theme is the <span class="hl">need for companionship</span> and the <span class="hl2">loneliness</span> a teenager feels even when surrounded by family. It also highlights the horrors of the Holocaust from a child’s perspective.',
    characters: '<b>Anne Frank:</b> A mature, intelligent, and talkative 13-year-old girl who longs for a true friend.<br><b>Mr. Keesing:</b> A strict but ultimately good-humored math teacher who punishes Anne for talking.',
    keywords: 'Paper has more patience than people, Chatterbox, Loneliness, True friend',
    pyqs: [
      { q: 'Why does Anne say "paper has more patience than people"?', marks: 2, ans: 'She felt that people might get bored or judge her thoughts, but paper would silently absorb everything she wrote without passing judgment.' },
      { q: 'How did Anne justify her being a chatterbox in her essay?', marks: 3, ans: 'She argued that talking is a student’s trait. Moreover, she inherited this trait from her mother, who talked just as much, and there is not much one can do about inherited traits.' }
    ]
  },
  {
    id: 'glimpses-of-india',
    title: 'Glimpses of India',
    theme: 'A celebration of India’s <span class="hl">cultural diversity and rich heritage</span>, capturing the essence of Goan bakers, the brave people of Coorg, and the tea gardens of Assam.',
    characters: '<b>The Pader (Baker):</b> Traditional Goan baker, a symbol of Portuguese influence.<br><b>People of Coorg:</b> Fiercely independent, hospitable, martial race.<br><b>Rajvir & Pranjol:</b> Two youngsters exploring the tea estates of Assam.',
    keywords: 'Portuguese influence, Kabai, Martial men, Descent of Greeks/Arabs, Legends of tea',
    pyqs: [
      { q: 'What are the elders in Goa nostalgic about?', marks: 2, ans: 'They are nostalgic about the good old Portuguese days and their famous loaves of bread.' },
      { q: 'Describe the martial traditions of Coorg.', marks: 3, ans: 'Coorgis are fierce warriors. The Coorg Regiment is one of the most decorated in the Indian Army, and General Cariappa, the first Chief of the Indian Army, was a Coorgi.' }
    ]
  },

  // POETRY
  {
    id: 'dust-of-snow',
    title: 'Dust of Snow',
    theme: 'The poem conveys the theme that <span class="hl">small, seemingly insignificant events</span> can have a profound impact on one’s mood. It also challenges the negative symbolism of the crow and hemlock tree.',
    characters: '<b>The Poet (Robert Frost):</b> Depressed and sorrowful, whose mood is instantly uplifted by nature.',
    keywords: 'Hemlock tree, Crow, Change of mood, Saving a part of a day',
    pyqs: [
      { q: 'What do the crow and hemlock tree represent?', marks: 2, ans: 'They usually represent sorrow, gloom, and inauspiciousness. However, the poet uses them positively as they bring joy to him.' },
      { q: 'How does the poet’s mood change?', marks: 3, tag: 'IMPORTANT', ans: 'The poet was initially in a state of depression. When a crow shook the snow from a hemlock tree onto him, the sudden coldness and beauty of nature instantly uplifted his mood, saving the rest of his day.' }
    ]
  },
  {
    id: 'fire-and-ice',
    title: 'Fire and Ice',
    theme: 'The poem discusses the <span class="hl">destructive power of human emotions</span>. "Fire" represents desire, greed, and lust, while "Ice" represents hatred, coldness, and indifference.',
    characters: '<b>The Poet:</b> A philosophical observer predicting the end of the world based on human emotions.',
    keywords: 'Desire (Fire), Hatred (Ice), Destruction, Perish',
    pyqs: [
      { q: 'What do "fire" and "ice" stand for?', marks: 2, ans: 'Fire stands for greed, lust, and unending desires. Ice stands for hatred, coldness, and rigidity.' },
      { q: 'To say that for destruction ice is also great—what does this mean?', marks: 3, ans: 'It means that silent hatred and indifference (ice) are just as capable of destroying human relationships and the world as fiery, passionate desires.' }
    ]
  },
  {
    id: 'a-tiger-in-the-zoo',
    title: 'A Tiger in the Zoo',
    theme: 'The theme is the <span class="hl">cruelty of keeping wild animals in captivity</span>. The poem contrasts the tiger’s majestic, natural life in the jungle with his helpless, suppressed existence in a cage.',
    characters: '<b>The Tiger:</b> Proud but helpless, angry but silent. He suppresses his wild instincts while pacing in a concrete cell.',
    keywords: 'Velvet quiet, Brilliant eyes, Concrete cell, Snarling, Captivity',
    pyqs: [
      { q: 'Why is the tiger in "quiet rage"?', marks: 2, ans: 'The tiger is majestic and powerful but is locked in a small cage. He is angry at his captivity but remains quiet because he is helpless behind bars.' },
      { q: 'How does the tiger behave in the jungle?', marks: 3, ans: 'In the jungle, the tiger would hide in long grass near the water hole to hunt plump deer. He would snarl around houses at the jungle’s edge, terrorizing the villagers.' }
    ]
  },

  // FOOTPRINTS WITHOUT FEET
  {
    id: 'a-triumph-of-surgery',
    title: 'A Triumph of Surgery',
    theme: 'The theme is the <span class="hl">dangers of over-pampering</span> and blind love. It shows how excessive care can sometimes harm the ones we love, and how practical discipline is often the best medicine.',
    characters: '<b>Tricki:</b> A hugely fat, pampered dog who falls ill due to overfeeding.<br><b>Mrs. Pumphrey:</b> A rich, foolishly indulgent mistress.<br><b>Mr. Herriot:</b> A practical, observant, and wise veterinary surgeon.',
    keywords: 'Overfeeding, Listless, Convalescing, Practical treatment, Pampering',
    pyqs: [
      { q: 'Why is Mrs. Pumphrey worried about Tricki?', marks: 2, ans: 'She is worried because Tricki became hugely fat, listless, refused to eat his favorite foods, and had bouts of vomiting.' },
      { q: 'How does Dr. Herriot treat Tricki?', marks: 5, tag: 'CBSE 2018', ans: 'Dr. Herriot gave Tricki no medical treatment. He kept him in his surgery, gave him plenty of water for two days, and no food. Tricki had to compete with other dogs for food and run around with them. This natural diet and exercise cured Tricki completely.' }
    ]
  },
  {
    id: 'the-thief-s-story',
    title: 'The Thief\'s Story',
    theme: 'The story emphasizes that <span class="hl">human values, trust, and education</span> can transform even the most hardened criminal. Kindness is more powerful than punishment.',
    characters: '<b>Hari Singh:</b> A 15-year-old experienced and successful thief who realizes the value of education.<br><b>Anil:</b> An easy-going, kind, and trusting writer whose goodness changes Hari.',
    keywords: 'Trust, Transformation, Education, Guilt, Forgiveness',
    pyqs: [
      { q: 'Why did Hari Singh decide to come back to Anil?', marks: 3, tag: 'IMPORTANT', ans: 'Hari Singh realized that if he ran away, he would only remain a small-time thief. Anil was teaching him how to write whole sentences, which could make him a big, respected man. Anil’s immense trust and Hari’s own conscience brought him back.' },
      { q: 'Anil didn\'t hand Hari over to the police. Why?', marks: 5, ans: 'Anil was a compassionate man. He knew Hari had stolen the money but also realized Hari had repented and returned it. By forgiving Hari and paying him, Anil gave him a second chance, knowing that handing him to the police would ruin his life.' }
    ]
  }
];

// Fallback logic for chapters not explicitly defined above
const fallbackData = (id) => ({
  title: id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
  theme: 'This chapter focuses on key themes of <span class="hl">human nature</span> and <span class="hl2">moral values</span>. Pay attention to the underlying message of the author.',
  characters: '<b>Protagonist:</b> The central character whose arc shows significant growth or realization.',
  keywords: 'Crucial events, Turning point, Climax, Resolution',
  pyqs: [
    { q: 'What is the main message of the chapter?', marks: 3, tag: 'IMPORTANT', ans: 'The chapter teaches a vital lesson about life, emphasizing the importance of the protagonist’s choices and the consequences that follow.' }
  ]
});

const generateHTML = (data) => {
  const pyqHTML = data.pyqs.map((pyq, i) => \`
  <div class="pyq">
    <span class="q">Q\${i + 1}.</span> \${pyq.q} \${pyq.tag ? \`<span class="tag">\${pyq.tag}</span>\` : ''} <span class="marks">[\${pyq.marks}]</span>
    <div style="margin-top: 8px; color: var(--green);">
      <b>Answer:</b> \${pyq.ans}
    </div>
  </div>\`).join('\\n');

  return \`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>\${data.title} | Revision Sheet</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&family=Caveat:wght@600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="sheet">
  <div style="margin-bottom: 20px;">
    <a href="../subjects/english.html" style="text-decoration:none; color:var(--red); font-weight:700; font-size:18px;">&larr; Back to English</a>
    <span style="color:var(--ink); margin: 0 10px;">|</span>
    <a href="../index.html" style="text-decoration:none; color:var(--red); font-weight:700; font-size:18px;">Back to Home</a>
  </div>

  <h1 class="title">\${data.title}</h1>
  <p class="subtitle">CBSE Class 10 &bull; <b>English</b> &bull; Quick Revision Sheet</p>

  <h2>1. Chapter Theme & Core Message</h2>
  <p>\${data.theme}</p>

  <h2>2. Character Arc</h2>
  <p>\${data.characters}</p>

  <h2>3. Important Keywords to Highlight in Exams</h2>
  <div class="box" style="font-weight: bold; color: var(--ink);">
    \${data.keywords.split(', ').map(k => \`<span class="hl2" style="margin-right: 5px; display: inline-block;">\${k}</span>\`).join('')}
  </div>

  <h2>4. PYQ & Practice Questions</h2>
  \${pyqHTML}

  <div class="footer">Success belongs to those who prepare for it!</div>
</div>
</body>
</html>\`;
};

// All English files
const allIds = [
  'a-letter-to-god', 'nelson-mandela-long-walk-to-freedom', 'two-stories-about-flying', 'from-the-diary-of-anne-frank',
  'glimpses-of-india', 'mijbil-the-otter', 'madam-rides-the-bus', 'the-sermon-at-benares', 'the-proposal',
  'dust-of-snow', 'fire-and-ice', 'a-tiger-in-the-zoo', 'how-to-tell-wild-animals', 'the-ball-poem',
  'amanda', 'the-trees', 'fog', 'the-tale-of-custard-the-dragon', 'for-anne-gregory',
  'a-triumph-of-surgery', 'the-thief-s-story', 'the-midnight-visitor', 'a-question-of-trust',
  'footprints-without-feet', 'the-making-of-a-scientist', 'the-necklace', 'bholi', 'the-book-that-saved-the-earth'
];

allIds.forEach(id => {
  let data = englishData.find(d => d.id === id);
  if (!data) data = fallbackData(id);
  const filePath = path.join('C:/Users/vivek/web development/Edustream/english-notes', id + '.html');
  fs.writeFileSync(filePath, generateHTML(data));
  console.log('Updated:', filePath);
});
