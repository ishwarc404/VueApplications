from flask import Flask, abort, request

app = Flask(__name__)



@app.route("/addMovieData", methods=["POST", "OPTIONS"])
def addMovieData():

    name = request.get_json()["name"]
    yearOfRelease = request.get_json()["yearOfRelease"]
    plot = request.get_json()["plot"]
    poster = request.get_json()["poster"]

    newMovieData = [name, yearOfRelease, plot, poster]
    print(newMovieData)
    try:
        filee = open("db.json", "r+")
        data_read = json.loads(filee.read())
        data_read["movies"].append(newMovieData)
        filee.seek(0)
        filee.write(json.dumps(data_read))
        filee.truncate()
        filee.close()
        return {}, 200
    except:
        abort(500)


@app.route("/readMovieData", methods=["GET"])
def readMovieData():
    try:
        filee = open("db.json", "r+")
        data_read = json.loads(filee.read())
        data_read["movies"].append(newMovieData)
        filee.seek(0)
        filee.write(json.dumps(data_read))
        filee.truncate()
        filee.close()
        return data_read, 200
    except:
        abort(500)


if __name__ == "__main__":
    app.run(debug=True)
