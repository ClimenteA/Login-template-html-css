import json


def readjson(filepath):
    #Return a dict form a json file
    with open(filepath) as j:
        adict = json.load(j)
    return adict
