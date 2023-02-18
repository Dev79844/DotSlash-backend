from flask import Flask
from flask_cors import CORS
from main import recommend_scheme

app = Flask(__name__)
CORS(app)

@app.route("/root")
def hello():
    return "<p>Hello</p>"

@app.route("/predict/<int:id>", methods=['GET'])
def prediction(id):
    # print(recommend_scheme(id))
    return recommend_scheme(id)

if __name__ == '__main__':
    app.run(debug=True)