from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
faqs = [
    {
        "id": 1,
        "question": "How is Tangerine healthy?",
        "answer": "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
        "imgSrc": "Fruit.png",
        "title": "Tangerine"
    },
    {
        "id": 2,
        "question": "How is Tangerine healthy?",
        "answer": "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
        "imgSrc": "Fruit.png",
        "title": "Tangerine"
    },
    {
        "id": 3,
        "question": "How is Tangerine healthy?",
        "answer": "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
        "imgSrc": "Fruit.png",
        "title": "Tangerine"
    },
    {
        "id": 4,
        "question": "How is Tangerine healthy?",
        "answer": "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
        "imgSrc": "Fruit.png",
        "title": "Tangerine"
    },

]

@app.route('/faqs', methods=['GET'])
def get_faqs():
    return jsonify(faqs)

@app.route('/faqs/<int:id>', methods=['GET'])
def get_faq(id):
    faq = next((f for f in faqs if f["id"] == id), None)
    return jsonify(faq) if faq else ({"error": "FAQ not found"}, 404)

@app.route('/faqs', methods=['POST'])
def create_faq():
    new_faq = request.json
    faqs.append(new_faq)
    return jsonify(new_faq), 201

@app.route('/faqs/<int:id>', methods=['PUT'])
def update_faq(id):
    faq = next((f for f in faqs if f["id"] == id), None)
    if faq:
        faq.update(request.json)
        return jsonify(faq)
    return {"error": "FAQ not found"}, 404

@app.route('/faqs/<int:id>', methods=['DELETE'])
def delete_faq(id):
    global faqs
    faqs = [f for f in faqs if f["id"] != id]
    return {"message": "FAQ deleted"}, 200

if __name__ == '__main__':
    app.run(debug=True)
