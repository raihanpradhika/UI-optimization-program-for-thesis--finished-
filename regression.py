import math
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

class Regression:
    def __init__(self, pageName, elemDesign, screenSize):
        self.pageName = pageName
        self.elemDesign = elemDesign
        self.screenSize = screenSize
        self.mt = []
        self.id = []
        self.mtId = []
        self.mtSquared = []
        self.slope = 0
        self.intercept = 0

    def movementTime(self, coord, size, initPoint):
        x_axisDistance = coord[0] - initPoint[0]
        y_axisDistance = coord[1] - initPoint[1]
        distance = math.hypot(x_axisDistance, y_axisDistance)
        width = size[0]

        id = Regression.indexOfDifficulty(distance, width)
        self.id.append(id)  

        mt = Regression.inputRegressionData(distance, width)
        self.mt.append(mt)
        self.mtId.append(mt*id)
        self.mtSquared.append(mt**2)

        return

    def indexOfDifficulty(distance, width):
        x = (distance / width) + 1
        id = math.log(x, 2)

        return id

    def inputRegressionData(distance, width):
        d1 = distance*(1/96)
        w1 = width*(1/96)
        chart = {
            0.25: {
                2: 0.392,
                4: 0.281,
                8: 0.212,
                16: 0.18
            },0.5: {
                2: 0.484,
                4: 0.372,
                8: 0.26,
                16: 0.203
            },1: {
                2: 0.58,
                4: 0.469,
                8: 0.357,
                16: 0.279
            },2: {
                2: 0.731,
                4: 0.595,
                8: 0.481,
                16: 0.388
            }
        }
        curr = list(chart)[0]
        for index in range(len(chart)):
            if abs(w1 - list(chart)[index]) < abs(w1 - curr):
                curr = list(chart)[index]
        chart2 = chart[curr]
        curr2 = list(chart2)[0]
        for index2 in range(len(chart2)):
            if abs(d1 - list(chart2)[index2]) < abs(d1 - curr2):
                curr2 = list(chart2)[index2]

        return chart2[curr2]

    def sumOfArrayinGroups(groups):
        arr = []
        for i in groups:
            sum = 0
            for j in i:
                sum += j
            arr.append(sum)
        return arr

    def leastSquareRegression(self):
        n = len(self.mt)
        s = Regression.sumOfArrayinGroups([self.mt, self.id, self.mtId, self.mtSquared])
        sa = n*s[2] - s[0]*s[1]
        sb = n*s[3] - s[0]**2
        self.slope = sa / sb
        self.intercept = (s[1] - self.slope*s[0]) / n

        return self.slope, self.intercept

    def inputRegressionData(self):
        initPoint = [0,0] #koordinat sebagai start dari fitts law
        for elem in self.elemDesign: #daftar elemen pada suatu halaman
            #initPoint = [0,0]
            for elemData in elem: #daftar KLM pada suatu elemen
                if elemData != 'undefined':
                    klm = elem[elemData]['KLM']
                    coord = elem[elemData]['coord']['center']
                    size = elem[elemData]['coord']['size']
                    for operator in klm:
                        if operator == 'f':
                            self.movementTime(coord, size, initPoint)
                            initPoint = coord
                        elif operator == 'bottomScroll':
                            rightScroll_coord = [self.screenSize['outer']['width']-8.5, (self.screenSize['inner']['height']/3)/2] #titik pusat scrollbar, 8.5 adalah lebar scrollbar(17px) dibagi 2                         
                            self.movementTime(rightScroll_coord, size, initPoint)
                            initPoint = rightScroll_coord
                        elif operator == 'rightScroll':
                            bottomScroll_coord = [(self.screenSize['inner']['width']/3)/2, self.screenSize['outer']['height']-8.5]
                            self.movementTime(bottomScroll_coord, size, initPoint)
                            initPoint = bottomScroll_coord
        res = Regression.leastSquareRegression(self)
        return res