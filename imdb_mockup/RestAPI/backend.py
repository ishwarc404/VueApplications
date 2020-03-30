from flask import Flask, abort, request
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)

CORS(app)


@app.route("/addMovieData", methods=["POST", "OPTIONS"])
@cross_origin()
def addMovieData():

    newMovieData = request.get_json()
    # if((len(name)==0) or (len(yearOfRelease)==0) or (len(plot)==0) or (len(poster)==0)):
    #     abort(400)
    
    filee = open("db.json", "r+")
    data_read = json.loads(filee.read())
    data_read["movies"].append(newMovieData)
    filee.seek(0)
    filee.write(json.dumps(data_read))
    filee.truncate()
    filee.close()
    return {}, 200



@app.route("/addActorData", methods=["POST", "OPTIONS"])
@cross_origin()
def addActorData():
    newActorData = request.get_json()
    if((len(name)==0)):
        abort(400)
    
    filee = open("db.json", "r+")
    data_read = json.loads(filee.read())
    data_read["actors"].append(newActorData)
    filee.seek(0)
    filee.write(json.dumps(data_read))
    filee.truncate()
    filee.close()
    return {}, 200




@app.route("/readMovieData", methods=["GET", "OPTIONS"])
@cross_origin()  # allow all origins all methods.
def readMovieData():

    filee = open("db.json", "r+")
    data_read = json.loads(filee.read())
    filee.close()
    return data_read, 200



if __name__ == "__main__":
    app.run(debug=True)
