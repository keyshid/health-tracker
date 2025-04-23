from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # enable CORS for all routes by default

# In-memory storage for temperature entries (list of dicts)
entries = [
      {'name': 'Alice Johnson', 'temperature': 36.7},
    {'name': 'Bob Smith', 'temperature': 38.2},
    {'name': 'Charlie Lee', 'temperature': 37.4}
]

@app.route('/api/entries', methods=['GET'])
def get_entries():
    """Return all recorded temperature entries."""
    return jsonify(entries), 200

@app.route('/api/entries', methods=['POST'])
def add_entry():
    """Add a new temperature entry (from JSON payload)."""
    data = request.get_json()
    if not data:
        return jsonify({'error': 'No data provided'}), 400
    # Simple validation of fields
    name = data.get('name')
    temperature = data.get('temperature')
    if not name or temperature is None:
        return jsonify({'error': 'Missing name or temperature'}), 400
    # Create entry record
    entry = {
        'name': name,
        'temperature': temperature,
    }
    entries.append(entry)
    return jsonify({'message': 'Entry added successfully'}), 201

# (Optional) A simple health check route
@app.route('/', methods=['GET'])
def index():
    return "Flask server is running", 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

