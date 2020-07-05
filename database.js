var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE hero (
            id INTEGER PRIMARY KEY,
            name text
            )`,
            (err) => {
                if (err) {
                    // Table already created
                } else {
                    // Table just created, creating some rows
                    var insert = 'INSERT INTO hero (id, name) VALUES (?,?)'
                    db.run(insert, [11, 'Dr Nice'])
                    db.run(insert, [12, 'Narco'])
                    db.run(insert, [13, 'Bombasto'])
                    db.run(insert, [14, 'Celeritas'])
                    db.run(insert, [15, 'Magneta'])
                    db.run(insert, [16, 'RubberMan'])
                    db.run(insert, [17, 'Dynama'])
                    db.run(insert, [18, 'Dr IQ'])
                    db.run(insert, [19, 'Magma'])
                    db.run(insert, [20, 'Tornado'])
                }
            });
    }
});


module.exports = db