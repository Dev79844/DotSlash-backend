from flask import Flask
import pickle

app = Flask(__name__)

model_path = 'recommend_researcher.pkl'
with open(model_path, 'rb') as file:
    pickled_model = pickle.load(file)

@app.route("/")
def hello():
    return "<p>Hello</p>"

@app.route("/predict/<id>")
def prediction(id):
    data = pickled_model.predict(id)
    return str(data)

if __name__ == '__main__':
    app.run(debug=True)