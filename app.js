const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const port = 3000;
const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// tell our app to use ejs as our new engine
app.set('view engine', 'ejs');


app.get("/", (req, res) => {

    let day = date.getDay();

    res.render("list", { listTitle: day, newItemList: items });
});

app.post("/", (req, res) => {
    //take input value of list.ejs
    let item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item)
        res.redirect('/Work');
    } else {
        items.push(item);
        res.redirect('/');
    }
})

/* work page */
app.get("/Work", (req, res) => {
    res.render("list", { listTitle: "Work", newItemList: workItems })
})

// about page
app.get("/About", (req, res) => {
    res.render('about');
})

app.listen(port, () => {
    console.log("server listening in port: " + port);
})