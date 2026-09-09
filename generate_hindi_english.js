const fs = require('fs');
const path = require('path');

const hindiKavya = [
    { id: 'surdas-ke-pad', title: 'Surdas ke Pad' },
    { id: 'tulsidas-ram-lakshman-parshuram-samvad', title: 'Tulsidas (Ram-Lakshman-Parshuram Samvad)' },
    { id: 'jayashankar-prasad-atmakathya', title: 'Jayashankar Prasad (Atmakathya)' },
    { id: 'suryakant-tripathi-nirala-utsah-aat-nahi-rahi-hai', title: 'Suryakant Tripathi Nirala (Utsah, Aat Nahi Rahi Hai)' },
    { id: 'nagarjun-yah-danturit-muskan-fasal', title: 'Nagarjun (Yah Danturit Muskan, Fasal)' },
    { id: 'mangalesh-dabral-sangatkar', title: 'Mangalesh Dabral (Sangatkar)' }
];

const hindiGadya = [
    { id: 'swayam-prakash-netaji-ka-chashma', title: 'Swayam Prakash (Netaji Ka Chashma)' },
    { id: 'ramvriksh-benipuri-balgobin-bhagat', title: 'Ramvriksh Benipuri (Balgobin Bhagat)' },
    { id: 'yashpal-lakhnavi-andaz', title: 'Yashpal (Lakhnavi Andaz)' },
    { id: 'mannu-bhandari-ek-kahani-yah-bhi', title: 'Mannu Bhandari (Ek Kahani Yah Bhi)' },
    { id: 'yatindra-mishra-naubatkhane-me-ibadat', title: 'Yatindra Mishra (Naubatkhane Me Ibadat)' },
    { id: 'bhadant-anand-kausalyayan-sanskriti', title: 'Bhadant Anand Kausalyayan (Sanskriti)' }
];

const hindiKritika = [
    { id: 'mata-ka-aanchal', title: 'Mata Ka Aanchal' },
    { id: 'sana-sana-hath-jodhi', title: 'Sana Sana Hath Jodhi' },
    { id: 'main-kyon-likhta-hun', title: 'Main Kyon Likhta Hun?' }
];

const englishProse = [
    { id: 'a-letter-to-god', title: 'A Letter to God' },
    { id: 'nelson-mandela-long-walk-to-freedom', title: 'Nelson Mandela: Long Walk to Freedom' },
    { id: 'two-stories-about-flying', title: 'Two Stories about Flying' },
    { id: 'from-the-diary-of-anne-frank', title: 'From the Diary of Anne Frank' },
    { id: 'glimpses-of-india', title: 'Glimpses of India' },
    { id: 'mijbil-the-otter', title: 'Mijbil the Otter' },
    { id: 'madam-rides-the-bus', title: 'Madam Rides the Bus' },
    { id: 'the-sermon-at-benares', title: 'The Sermon at Benares' },
    { id: 'the-proposal', title: 'The Proposal' }
];

const englishPoetry = [
    { id: 'dust-of-snow', title: 'Dust of Snow' },
    { id: 'fire-and-ice', title: 'Fire and Ice' },
    { id: 'a-tiger-in-the-zoo', title: 'A Tiger in the Zoo' },
    { id: 'how-to-tell-wild-animals', title: 'How to Tell Wild Animals' },
    { id: 'the-ball-poem', title: 'The Ball Poem' },
    { id: 'amanda', title: 'Amanda!' },
    { id: 'the-trees', title: 'The Trees' },
    { id: 'fog', title: 'Fog' },
    { id: 'the-tale-of-custard-the-dragon', title: 'The Tale of Custard the Dragon' },
    { id: 'for-anne-gregory', title: 'For Anne Gregory' }
];

const englishFootprints = [
    { id: 'a-triumph-of-surgery', title: 'A Triumph of Surgery' },
    { id: 'the-thief-s-story', title: 'The Thief\'s Story' },
    { id: 'the-midnight-visitor', title: 'The Midnight Visitor' },
    { id: 'a-question-of-trust', title: 'A Question of Trust' },
    { id: 'footprints-without-feet', title: 'Footprints without Feet' },
    { id: 'the-making-of-a-scientist', title: 'The Making of a Scientist' },
    { id: 'the-necklace', title: 'The Necklace' },
    { id: 'bholi', title: 'Bholi' },
    { id: 'the-book-that-saved-the-earth', title: 'The Book That Saved the Earth' }
];

const createTemplate = (title, subject, backLink) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${title} | Revision Sheet</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&family=Caveat:wght@600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="sheet">
  <div style="margin-bottom: 20px;">
    <a href="${backLink}" style="text-decoration:none; color:var(--red); font-weight:700; font-size:18px;">&larr; Back to ${subject}</a>
    <span style="color:var(--ink); margin: 0 10px;">|</span>
    <a href="../index.html" style="text-decoration:none; color:var(--red); font-weight:700; font-size:18px;">Back to Home</a>
  </div>

  <h1 class="title">${title}</h1>
  <p class="subtitle">CBSE Class 10 &bull; <b>${subject}</b> &bull; Quick Revision Sheet</p>

  <h2>1. Summary / Theme</h2>
  <p>This chapter focuses on key themes and messages. Review the main characters, the setting, and the moral or conclusion drawn from the text.</p>

  <h2>2. Important Concepts / Characters</h2>
  <div class="box">
    - Read the text thoroughly and understand the central idea.<br>
    - Note down important quotes or poetic devices used (for poems).<br>
    - Analyze the protagonist's journey and turning points.
  </div>

  <h2>PYQ Practice</h2>
  <h3>Short answer</h3>
  <div class="pyq">
    <span class="q">Q1.</span> Discuss the central theme of ${title}. <span class="tag">IMPORTANT</span> <span class="marks">[3]</span>
    <div style="margin-top: 8px; color: var(--green);">
      <b>Solution:</b> The theme revolves around the key events in the story/poem. Make sure to reference specific incidents from the text to support your answer.
    </div>
  </div>

  <div class="footer">Keep learning, keep growing!</div>
</div>
</body>
</html>`;

const generateFiles = (list, folder, subject, backLink) => {
    list.forEach(item => {
        const filePath = path.join('C:/Users/vivek/web development/Edustream', folder, item.id + '.html');
        fs.writeFileSync(filePath, createTemplate(item.title, subject, backLink));
        console.log('Created:', filePath);
    });
};

generateFiles(hindiKavya, 'hindi-notes', 'Hindi', '../subjects/hindi.html');
generateFiles(hindiGadya, 'hindi-notes', 'Hindi', '../subjects/hindi.html');
generateFiles(hindiKritika, 'hindi-notes', 'Hindi', '../subjects/hindi.html');

generateFiles(englishProse, 'english-notes', 'English', '../subjects/english.html');
generateFiles(englishPoetry, 'english-notes', 'English', '../subjects/english.html');
generateFiles(englishFootprints, 'english-notes', 'English', '../subjects/english.html');
