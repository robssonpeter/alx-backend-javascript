const express = require('express');
const fs = require('fs')
const port = 1245;
const hostname = '127.0.0.1';
const file = process.argv[2]

const app = express();

app.get('/', (req, res) => {
    res.send("Hello Holberton School!")
});

app.get('/students', (req, res) => {
    if(file){
        if (file) {
            try {
                const fl = fs.readFileSync(file, { encoding: 'utf-8' });
                const rows = fl.split('\n')
                //console.log(rows)
                let fields = {};
                let keys = [];
                let row = [];
                let resp = '';
                //console.log(`Number of students: ${rows.length - 1}`)
                resp += `Number of students: ${rows.length - 1}\n`;
                rows.forEach(element => {
                    row = element.split(',');
                    if (row.length > 1) {
                        keys = Object.keys(fields);
                        if (keys.indexOf(row[3]) < 0) {
                            fields[row[3]] = { count: 1, students: [row[0]] };
                        } else {
                            fields[row[3]]['count'] = fields[row[3]]['count'] + 1;
                            fields[row[3]]['students'].push(row[0])
                        }
                    }
                })
                keys.forEach((key, index) => {
                    let students = fields[key]['students'].join(', ');
                    if (key !== 'field') {
                        let count = fields[key]['count'];
                        let msg = `Number of students in ${key}: ${count}. List: ${students}`
                        //console.log(msg)
                        if (index < keys.length - 1) {
                            resp += msg + '\n';
                        } else {
                            resp += msg;
                        }

                    }
                });
                res.send(resp);

            } catch (exception) {

            }
        }
    }
});

app.listen(port, hostname, () => {
    console.log("now listening");
})
