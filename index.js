const express = require("express");
const path = require("path");
const app = express();
const port = 8080;
const dataUser = [
    {
        id: 1,
        name: "jepan",
        addr: "Bandung",
        age: 24,
        country: "Indonesia",
    },
    {
        id: 2,
        name: "bagas",
        addr: "Bandung",
        age: 21,
        country: "Indonesia",
    },
    {
        id: 3,
        name: "tina",
        addr: "Bandung",
        age: 26,
        country: "Indonesia",
    },
];

app.get("/", (req, res) => {
    const addrPath = path.join(__dirname, "index.html");
    console.log({ addrPath });
    res.sendFile(addrPath);
});

app.get("/api/username", (req, res) => {
    res.status(200).json({ dataUser });
});
app.get("/api/username/:id", (req, res) => {
    const getUserId = req.params.id;
    const filterById = dataUser.find(({ id }) => Number(getUserId) === Number(id)).name;
    res.status(200).json({
        data: filterById,
    });
});
app.listen(port, () => {
    console.log(`this app is running on port ${port}`);
});

//localhost:8080
