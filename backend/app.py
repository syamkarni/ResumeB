from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)



@app.route("/")
def index():
    return "Hello World!"
    #return jsonify(data)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3031, degug=True)