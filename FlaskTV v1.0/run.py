from flask import Flask
from flask import render_template
from utils import readjson

app = Flask(__name__)


@app.route('/')
def tvpage():
    context = readjson("config.json")
    return render_template("tv.html", context=context)

@app.route("/change-station/<string:station>")
def showRequested(station):
    context = readjson("config.json")
    context['channelurl'] = context[station]
    context['channelName'] = station
    return render_template("tv.html", context=context)




if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000, debug=True)
