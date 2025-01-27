const express = require('express');
const path = require('path');

const app = express();

// Serve static files (HTML pages)
app.use(express.static(path.join(__dirname)));

// Glossary data
const glossary = [
  { term: 'Russian Sign Language (RSL)', description: 'A natural communication language for people with hearing impairments...', source: 'https://source1.com' },
  { term: 'Gesture Recognition', description: 'A technological process for identifying hand movements...', source: 'https://source2.com' }
];

// Default route to serve the glossary page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Ensure you have 'index.html' in the same directory
});

// API to get all terms
app.get('/glossary/api/all_glossary', (req, res) => {
  res.json(glossary);
});

// API to get a specific term
app.get('/glossary/api/:term', (req, res) => {
  const term = glossary.find(t => t.term.toLowerCase() === req.params.term.toLowerCase());
  if (term) {
    res.json(term);
  } else {
    res.status(404).json({ error: 'Term not found' });
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
