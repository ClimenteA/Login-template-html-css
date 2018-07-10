
def readjson(filepath):
    #Return a dict form a json file
    import json
    with open(filepath) as j:
        adict = json.load(j)
    return adict
