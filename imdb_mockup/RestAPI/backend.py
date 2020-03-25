from flask import Flask, abort, request
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)

CORS(app)


@app.route("/addMovieData", methods=["POST", "OPTIONS"])
@cross_origin()
def addMovieData():

    name = request.get_json()["movieName"]
    yearOfRelease = request.get_json()["yearOfRelease"]
    plot = request.get_json()["plot"]
    poster = request.get_json()["poster"]

    newMovieData = {"name": name,
                    "yearOfRelease": yearOfRelease, "plot": plot, "poster": poster}
    print("Data received: ", newMovieData)

    filee = open("db.json", "r+")
    data_read = json.loads(filee.read())
    data_read["movies"].append(newMovieData)
    filee.seek(0)
    filee.write(json.dumps(data_read))
    filee.truncate()
    filee.close()
    return {}, 200

@app.route("/readMovieData", methods=["GET", "OPTIONS"])
@cross_origin()  # allow all origins all methods.
def readMovieData():
    # try:
    filee = open("db.json", "r+")
    data_read = json.loads(filee.read())
    filee.close()
    return data_read, 200
    # except:
    #     abort(500)


if __name__ == "__main__":
    app.run(debug=True)
