const express = require("express");
const app = express();


app.use(express.json())
const products = [
    {id: 1, name: "Produkt 1"},
    {id: 2, name: "Produkt 2"},
    {id: 3, name: "Produkt 3"},
]
app.get("/products", (req,res) => {
    res.json(products)
})

app.get("/products/:id", (req,res) => {
    const id = req.params.id
    const product = products.find(p => p.id == id)
    res.json(product)  
})

app.post("/products", (req,res) => {
    const newProduct = req.body
    products.push(newProduct)
    res.json(newProduct)
})

app.listen(5006, () => {
    console.log("Server läuft auf Port 5006")
})