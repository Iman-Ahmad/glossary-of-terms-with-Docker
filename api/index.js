import express from 'express';
import fs from 'fs';

const app = express();

const glossaryData = JSON.parse(fs.readFileSync('./data/glossary.json', 'utf-8'));
const mindMapData = JSON.parse(fs.readFileSync('./data/mindmap.json', 'utf-8'));

app.get('/api/glossary', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(glossaryData);
});
app.get('/api/mindmap', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(mindMapData);
});

app.listen(9000, function(req, res) {
    console.log("Server is running at port 9000");
});
