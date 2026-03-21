const express = require('express');
const fs = require('fs');

const database = process.argv[2];
const app = express();

function getStudentsOutput() {
  return new Promise((resolve, reject) => {
    fs.readFile(database, 'utf8', (err, data) => {
      if (err) return reject(new Error('Cannot load the database'));

      const lines = data.split('\n').filter((l) => l.trim() !== '').slice(1);
      const fields = {};
      for (const s of lines) {
        const [firstname, , , field] = s.split(',');
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      }

      let output = `Number of students: ${lines.length}\n`;
      for (const [field, names] of Object.entries(fields)) {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
      resolve(output.trim());
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  getStudentsOutput()
    .then((output) => res.send(`This is the list of our students\n${output}`))
    .catch((err) => res.status(500).send(err.message));
});

app.listen(1245);

module.exports = app;
