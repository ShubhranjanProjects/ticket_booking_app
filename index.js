// const math = require('./math');

// console.log(math.addF(2, 4));
// console.log(math.subF(12, 4));

// const http = require("http");
const express = require("express");
const app = express();

const fs = require("fs");

const json_data = require("./station_details_json.json");
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

app.get("/api/stations", (req, res) => {
    return res.json(json_data);
});

app.get("/stations", (req, res) => {
    const html = `
    <ul>
    ${json_data.map((data) => `<li>${data.name}</li>`).join("")}
    </ul>
    `;
    return res.send(html);
});



app.route("/api/stations/:code")
    .get((req, res) => {
        const code = req.params.code;
        const station = json_data.find((station) => station.code === code);

        return res.json(station);
    })
    .patch((req, res) => {
        return res.json({ status: 'pending' });
    });

app.post("/api/stations", (req, res) => {
    const body = req.body;
    json_data.push(body);
    fs.writeFile("./station_details_json.json", JSON.stringify(json_data), (err, data) => {
        return res.json({ status: 'success' });
    });

});

app.listen(PORT, () => { console.log('Server started') });
// app.get("/", (req, res) => {
//     return res.send("Hello from HomePage");
// });

// app.get("/about", (req, res) => {
//     return res.send("Hello from AboutPage");
// });

// const server = http.createServer(app);

// server.listen(3000, () => { console.log("Server started") });