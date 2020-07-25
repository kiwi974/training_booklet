import warnings
import subprocess

from flask import Flask, jsonify, request, abort

warnings.filterwarnings("ignore")

app = Flask(__name__)

items = []

blocks = [{
       "id": "1",
       "exercice": "Block1",
       "weight": "2",
       "ribtw": "1'30",
       "customText": "j'ai fait des trucs"
    },
    {
       "id": "2",
       "exercice": "Block2",
       "weight": "20",
       "ribtw": "1'00",
       "customText": "j'ai fait d'autres trucs"
    },
    {
       "id": "2",
       "exercice": "Block2",
       "weight": "20",
       "ribtw": "1'00",
       "customText": "j'ai fait d'autres trucs"
    }]

@app.route('/')
def say_hello():
    print('Coucou')

@app.route('/api/get_blocks', methods=['GET'])
def get_blocks():
    return jsonify(blocks), 201



if __name__ == '__main__':
    app.run(debug=True)