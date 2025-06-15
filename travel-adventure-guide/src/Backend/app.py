from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/destinations')
def get_destinations():
    destinations = [
        {"name": "Machu Picchu", "country": "Peru"},
        {"name": "Santorini", "country": "Greece"},
    ]
    return jsonify(destinations)

if __name__ == '__main__':
    app.run(debug=True)
