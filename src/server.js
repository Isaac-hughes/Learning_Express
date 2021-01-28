const express = require('express');
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
   // do stuff here
   console.log()
    res.send("Test");
});

app.get("/About", (req, res) => {
   // do stuff here
    res.send("<h1>Mad Lad</h1>");
});

app.get("/data", (req, res) => {
    console.log(req.query.name)
    res.send({data: "Hello Isaac"});
});

app.get("/me", (req, res) => {
    console.log(req.query.name)
    res.send({name: "Isaac", age: 18});
});

app.get("/me/:id", (req, res) => {
    console.log(req.params)
    res.send({name: "Isaac", age: 18});
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.send({ data: req.body });
})

app.post("/woof", (req, res) => {
    console.log(req.body);
    res.send({ data: req.body });
})

app.listen(5000, () => {
    console.log("listening on port 5000")
});

