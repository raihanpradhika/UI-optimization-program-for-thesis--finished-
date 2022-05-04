from flask import Flask, render_template, request, jsonify
import json

from geneticAlgo import *
from klm import *

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def pageTime():
    result = {}
    if request.method == 'POST':
        data = request.get_json()[0]
        screenSize = request.get_json()[1]

        #pages = [req[0][0], req[0][1], req[1][0], req[1][1], req[2][0], req[2][1]]
        pageList = []
        for i in range(0, len(data)):
            temp = []
            for j in range(0, len(data[i])):
                temp.append(data[i][j])
            pageList.append(temp)

        genes = []
        mainPageData=[]
        for i in range(0, len(pageList)):
            temp=[]
            for pageContent in pageList[i]:
                klmResult = KLM(pageContent['pageName'], pageContent['pageCoord'], screenSize).klmValue()
                pageContent['pageTime'] = klmResult
                #pageContent.pop('pageCoord', None)
                temp.append(pageContent)
                if pageContent['pageName'] == pageList[0][0]['pageName'] or pageContent['pageName'] == pageList[1][0]['pageName'] or pageContent['pageName'] == pageList[2][0]['pageName']:
                    mainPageData.append(pageContent)
            genes.append(temp)

        mainPageTime = Fitness(mainPageData).chromosomeTime()
        
        genAlgoResult = geneticAlgorithm(genes, popSize=6, eliteSize=4, mutationRate=0.01, generations=200)
        bestChromosome = sorted(genAlgoResult[0], key=lambda d: d['pageIndex'])
        finalTime = genAlgoResult[1]
        result = listToDict(bestChromosome)

        return result

    elif request.method == 'GET':
        return render_template('code.html')

def listToDict(lst):
    res_dct = {i: lst[i] for i in range(0, len(lst))}
    return res_dct
