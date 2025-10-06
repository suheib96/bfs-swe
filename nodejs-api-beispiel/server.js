const express = require("express"); // import express
const app = express();
const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("mydb.db");

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY, titel TEXT, preis REAL)"
  );
  db.run("INSERT INTO products (titel, preis) VALUES ('Produkt 1', 9.99)");
  db.run("INSERT INTO products (titel, preis) VALUES ('Produkt 2', 19.99)");
  db.run("INSERT INTO products (titel, preis) VALUES ('Produkt 3', 559.99)");
  db.run("INSERT INTO products (titel, preis) VALUES ('Produkt 4', 16.49)");
});

app.use(express.json()); // Dies ermöglicht uns den Body aus dem Request auszulesen
// const products = [
//     {id: 1, name: "Produkt 1"},
//     {id: 2, name: "Produkt 2"},
//     {id: 3, name: "Produkt 3"},
// ]

app.get("/products", (req, res) => {
  db.all("SELECT * FROM products", (err, products) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(products);
    }
  });
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  db.get("SELECT * FROM products WHERE id = ?",[id], (err, product) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(product);
    }
  });
});

app.post("/products", (req, res) => {
  const {titel,preis} = req.body;
  db.run("INSERT INTO products (titel,preis) VALUES (?,?)", [titel,preis])
  res.status(201).send("Produkt erfolgreich erstellt");
});

app.listen(5006, () => {
  console.log("Server läuft auf Port 5006");
});
