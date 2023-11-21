const { error } = require('console');
const fs = require('fs')
const path = 'database.csv';

async function countStudents(path){
    
        let fields = {};
        let keys = [];
        let row = [];
        await fs.readFile(path, {encoding: 'utf-8'}, (error, data) => {
        if (error){
            throw new Error('Cannot load the database');
        }else{
            rows = data.split('\n')
        console.log(`Number of students: ${rows.length - 1}`);
        rows.forEach(element => {
            row = element.split(',');
            keys = Object.keys(fields);
            if (keys.indexOf(row[3]) < 0){
                fields[row[3]] = {count: 1, students: [row[0]]};
            }else{
                fields[row[3]]['count'] = fields[row[3]]['count'] + 1;
                fields[row[3]]['students'].push(row[0])
            }
        })
        keys.forEach(key => {
            let students = fields[key]['students'].join(', ');
            let count = fields[key]['count'];
            let msg = `Number of students in ${key}: ${count}. List: ${students}`
            console.log(msg)
        })
        }
        
    });
}

module.exports = countStudents