from flask import Flask, jsonify, request

app = Flask(__name__)


products = [
    {"id": 1, "name": "Produkt 1"},
    {"id": 2, "name": "Produkt 2"},
    {"id": 3, "name": "Produkt 3"},
]
@app.route("/products", methods=["GET"])
def get_products():
    return jsonify(products)

@app.route("/products/<int:product_id>", methods=["GET"])
def get_product(product_id):
    product = next((p for p in products if p["id"] == product_id), None)
    return jsonify(product)

@app.route("/products", methods=["POST"])
def create_product():
    new_product = request.json
    products.append(new_product)
    return jsonify(new_product), 201


if __name__ == "__main__":
    app.run(debug=True,port=5005)

