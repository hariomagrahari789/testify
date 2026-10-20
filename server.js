const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/db');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve testify.html as the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'testify.html'));
});


app.post('/add-question', (req, res) => {
    const { question, option_a, option_b, option_c, option_d, correct_option } = req.body;

    const sql = `INSERT INTO questions (question, option_a, option_b, option_c, option_d, correct_option)
                 VALUES (?, ?, ?, ?, ?, ?)`;

    db.run(sql, [question, option_a, option_b, option_c, option_d, correct_option], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Question added", id: this.lastID });
    });
});


app.get('/get-questions', (req, res) => {
    console.log("GET /get-questions called");
    db.all(`SELECT id, question, option_a, option_b, option_c, option_d FROM questions`, [], (err, rows) => {
        if (err) {
            console.error("DB Error:", err.message);
            return res.status(500).json({ error: err.message });
        }

        console.log("Questions from DB:", rows); // 👈 check if you get rows
        res.json(rows);
    });
});

app.get('/get-correct-answers', (req, res) => {
    const sql = `SELECT id, option_a, option_b, option_c, option_d, correct_option FROM questions`;
    db.all(sql, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);  // Return full options too
    });
});






app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});




