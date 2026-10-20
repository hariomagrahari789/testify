const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/test.db', (err) => {
    if (err) {
        console.error('Could not connect to database:', err.message);
    } else {
        console.log('Connected to SQLite database.');
    }
});

// ✅ Create the questions table if it doesn't exist
db.run(`
    CREATE TABLE IF NOT EXISTS questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        question TEXT NOT NULL,
        option_a TEXT NOT NULL,
        option_b TEXT NOT NULL,
        option_c TEXT NOT NULL,
        option_d TEXT NOT NULL,
        correct_option TEXT NOT NULL
    )
`, (err) => {
    if (err) {
        console.error("Error creating questions table:", err.message);
    } else {
        console.log("Questions table ensured.");
    }
});

module.exports = db;
