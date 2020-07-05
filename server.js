var express = require("express")
var app = express()
var db = require("./database.js")

// Server port
var HTTP_PORT = 8000
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});
// Root endpoint
app.get("/", (req, res, next) => {
    res.json({
        "message": "Ok"
    })
});

// Insert here other API endpoints
// get heroes
app.get("/api/heroes", (req, res, next) => {
    var sql = "select * from hero"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({
                "error": err.message
            });
            return;
        }
        res.json(rows)
    });
});

// get hero
app.get("/api/hero/:id", (req, res, next) => {
    var sql = "select * from hero where id = ?"
    var params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({
                "error": err.message
            });
            return;
        }
        res.json(row)
    });
});

// Default response for any other request
app.use(function (req, res) {
    res.status(404);
});