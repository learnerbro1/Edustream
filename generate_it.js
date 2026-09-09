const fs = require('fs');
const path = require('path');

const itChapters = [
  {
    filename: 'communication-skills-ii.html',
    title: 'Communication Skills - II',
    part: 'Part A',
    ch: '1',
    content: `<h2>1. Methods of Communication</h2>
  <ul>
    <li><b>Verbal:</b> Sharing info using words (Oral or Written). E.g., talking, phone calls, letters, emails.</li>
    <li><b>Non-Verbal:</b> Communicating without words (Gestures, body language, facial expressions, eye contact).</li>
    <li><b>Visual:</b> Using images, graphs, signs, and symbols.</li>
  </ul>
  <h2>2. Communication Cycle & Feedback</h2>
  <p>Sender &rarr; Message &rarr; Channel &rarr; Receiver &rarr; Feedback.</p>
  <div class="box"><b>Feedback:</b> It is the response given by the receiver to the sender. Types: Positive, Negative, and No feedback.</div>
  <h2>3. Barriers to Communication</h2>
  <p>Physical barriers (noise, distance), Linguistic barriers (language differences), Interpersonal barriers, and Organisational barriers.</p>`
  },
  {
    filename: 'self-management-skills-ii.html',
    title: 'Self-Management Skills - II',
    part: 'Part A',
    ch: '2',
    content: `<h2>1. Stress Management</h2>
  <p><span class="hl">Stress:</span> It is a state of mental or emotional strain. Stress management refers to techniques that help a person handle stress.</p>
  <ul>
    <li><b>Internal stress:</b> Unrealistic expectations, negative self-talk.</li>
    <li><b>External stress:</b> Exams, family issues, peer pressure.</li>
  </ul>
  <h2>2. Techniques to Manage Stress</h2>
  <div class="box">Yoga, meditation, physical exercise, enjoying hobbies, taking nature walks, and maintaining a positive attitude.</div>
  <h2>3. Working Independently</h2>
  <p>Knowing what you need to do, taking the initiative to do it, and recognizing your mistakes without being supervised. Requires self-awareness, self-motivation, and self-regulation.</p>`
  },
  {
    filename: 'ict-skills-ii.html',
    title: 'ICT Skills - II',
    part: 'Part A',
    ch: '3',
    content: `<h2>1. Operating System (OS)</h2>
  <p>OS is a software that acts as an interface between the user and the computer hardware (e.g., Windows, Linux, macOS). It manages memory, processes, and files.</p>
  <h2>2. File Management</h2>
  <ul>
    <li><b>File:</b> A collection of data stored on a storage device.</li>
    <li><b>Folder:</b> A container that holds files and other folders (sub-folders).</li>
  </ul>
  <h2>3. Computer Care and Maintenance</h2>
  <div class="box">
    - Keep the computer clean and dust-free.<br>
    - Do not eat or drink near the computer.<br>
    - Run antivirus software regularly.<br>
    - Take data backups to prevent loss.
  </div>`
  },
  {
    filename: 'entrepreneurial-skills-ii.html',
    title: 'Entrepreneurial Skills - II',
    part: 'Part A',
    ch: '4',
    content: `<h2>1. What is Entrepreneurship?</h2>
  <p>It is the process of developing a business plan, launching, and running a business using innovation to meet customer needs and make a profit.</p>
  <h2>2. Qualities of an Entrepreneur</h2>
  <ul>
    <li><span class="hl">Hardworking & Persistent</span></li>
    <li><span class="hl2">Risk-taking ability</span></li>
    <li>Self-confident and open to trial and error</li>
  </ul>
  <h2>3. Role and Functions</h2>
  <div class="box">
    <b>Role:</b> Economic development, creating jobs, improving standard of living.<br>
    <b>Functions:</b> Decision making, managing the business, dividing income, taking risks.
  </div>`
  },
  {
    filename: 'green-skills-ii.html',
    title: 'Green Skills - II',
    part: 'Part A',
    ch: '5',
    content: `<h2>1. Sustainable Development</h2>
  <p>Development that meets the needs of the present without compromising the ability of future generations to meet their own needs.</p>
  <h2>2. SDGs (Sustainable Development Goals)</h2>
  <p>17 goals adopted by all UN Member States in 2015 to end poverty, protect the planet, and ensure peace and prosperity.</p>
  <h2>3. Role in Sustainable Development</h2>
  <div class="box">
    - Reduce, Reuse, Recycle (3Rs).<br>
    - Plant more trees and conserve water.<br>
    - Use eco-friendly materials and renewable energy sources.
  </div>`
  },
  {
    filename: 'digital-documentation-advanced.html',
    title: 'Digital Documentation (Advanced)',
    part: 'Part B',
    ch: '1',
    content: `<h2>1. Styles in a Document</h2>
  <p>A style is a set of formats that you can apply to selected pages, text, frames, and other elements to quickly change their appearance.</p>
  <ul><li>Categories: Page, Paragraph, Character, Frame, List styles.</li></ul>
  <h2>2. Images and Objects</h2>
  <div class="box">You can insert images, resize, crop, and wrap text around them. Drawing tools allow creating shapes.</div>
  <h2>3. Templates</h2>
  <p>A template is a model that you use to create other documents. It saves time and ensures consistency.</p>
  <h2>4. Mail Merge</h2>
  <p>A feature used to send the same letter to multiple people by merging a main document with a data source (like a spreadsheet).</p>`
  },
  {
    filename: 'electronic-spreadsheet-advanced.html',
    title: 'Electronic Spreadsheet (Advanced)',
    part: 'Part B',
    ch: '2',
    content: `<h2>1. Analyze Data</h2>
  <p><b>Consolidate:</b> Combines data from multiple sheets.<br>
  <b>Subtotals:</b> Automatically calculates subtotals and grand totals in a list.<br>
  <b>What-If Analysis (Scenarios, Goal Seek, Solver):</b> Allows you to explore different outcomes based on changing variables.</p>
  <h2>2. Linking Data and Spreadsheets</h2>
  <div class="box">You can link cells from different worksheets or even different workbooks so that updating one updates the other automatically.</div>
  <h2>3. Sharing and Reviewing</h2>
  <p>Multiple users can edit a shared spreadsheet. You can track changes, accept/reject changes, and add comments.</p>
  <h2>4. Macros</h2>
  <p>A recorded sequence of commands or keystrokes that can be played back to automate repetitive tasks.</p>`
  },
  {
    filename: 'database-management-system.html',
    title: 'Database Management System',
    part: 'Part B',
    ch: '3',
    content: `<h2>1. Database Concepts</h2>
  <p><span class="hl">Database:</span> An organized collection of data.<br>
  <span class="hl2">DBMS:</span> Software used to create, manage, and query databases (e.g., MySQL, Base, Oracle).</p>
  <ul>
    <li><b>Table:</b> Stores data in rows (records) and columns (fields).</li>
    <li><b>Primary Key:</b> A unique identifier for each record in a table.</li>
    <li><b>Foreign Key:</b> A field that links to the primary key of another table.</li>
  </ul>
  <h2>2. DDL and DML</h2>
  <div class="box">
    <b>DDL (Data Definition Language):</b> Defines structure (CREATE, ALTER, DROP).<br>
    <b>DML (Data Manipulation Language):</b> Manages data (INSERT, UPDATE, DELETE, SELECT).
  </div>
  <h2>3. Queries, Forms, and Reports</h2>
  <p><b>Query:</b> Request for data retrieval.<br>
  <b>Form:</b> Interface for entering data.<br>
  <b>Report:</b> Formatted output of data for printing.</p>`
  },
  {
    filename: 'web-applications-and-security.html',
    title: 'Web Applications and Security',
    part: 'Part B',
    ch: '4',
    content: `<h2>1. Accessibility Options</h2>
  <p>Settings designed to help users with disabilities (e.g., Sticky Keys, Filter Keys, Toggle Keys, SoundSentry, High Contrast).</p>
  <h2>2. Networking Fundamentals</h2>
  <ul>
    <li><b>LAN/WAN:</b> Local Area Network (small area) / Wide Area Network (large area).</li>
    <li><b>Internet:</b> A global network of computers.</li>
    <li><b>ISP:</b> Internet Service Provider (provides internet access).</li>
  </ul>
  <h2>3. Instant Messaging and Blogs</h2>
  <div class="box">
    <b>IM:</b> Real-time text transmission (WhatsApp, Skype).<br>
    <b>Blog:</b> An online diary or journal located on a website.
  </div>
  <h2>4. Workplace Safety and Health</h2>
  <p>Basic fire safety, falls/slips prevention, electrical safety, and first aid requirements at the workplace.</p>`
  }
];

const template = (chapter) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${chapter.title} | Revision Sheet</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&family=Caveat:wght@600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="sheet">
  <div style="margin-bottom: 20px;">
    <a href="../subjects/it.html" style="text-decoration:none; color:var(--red); font-weight:700; font-size:18px;">&larr; Back to IT</a>
    <span style="color:var(--ink); margin: 0 10px;">|</span>
    <a href="../index.html" style="text-decoration:none; color:var(--red); font-weight:700; font-size:18px;">Back to Home</a>
  </div>

  <h1 class="title">${chapter.title}</h1>
  <p class="subtitle">CBSE Class 10 &bull; <b>IT (402) &mdash; ${chapter.part} Chapter ${chapter.ch}</b> &bull; Quick Revision Sheet</p>

  ${chapter.content}

  <h2>PYQ Practice</h2>
  <h3>Short answer &mdash; 2 marks</h3>
  <div class="pyq">
    <span class="q">Q1.</span> Explain the main concept of ${chapter.title}. <span class="tag">IMPORTANT</span> <span class="marks">[2]</span>
    <div style="margin-top: 8px; color: var(--green);">
      <b>Solution:</b> The main concept revolves around the key definitions discussed above. Ensure to cover the bullet points and highlighted sections.
    </div>
  </div>

  <div class="footer">Keep learning, keep growing!</div>
</div>
</body>
</html>`;

itChapters.forEach(ch => {
  fs.writeFileSync(path.join('C:/Users/vivek/web development/Edustream/it-notes', ch.filename), template(ch));
  console.log('Created:', ch.filename);
});
