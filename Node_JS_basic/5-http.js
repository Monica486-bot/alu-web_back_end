const http = require('http');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/students') {
    let output = 'This is the list of our students\n';
    countStudents(database)
      .then(() => {
        const lines = require('fs').readFileSync(database, 'utf8')
          .split('\n').filter((l) => l.trim() !== '').slice(1);
        const fields = {};
        for (const s of lines) {
          const [firstname, , , field] = s.split(',');
          if (!fields[field]) fields[field] = [];
          fields[field].push(firstname);
        }
        output += `Number of students: ${lines.length}\n`;
        for (const [field, names] of Object.entries(fields)) {
          output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
        }
        res.end(output);
      })
      .catch((err) => res.end(err.message));
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(1245);

module.exports = app;
