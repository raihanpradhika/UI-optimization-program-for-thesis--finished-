import math
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

class KLM:
    def __init__(self, pageName, elemDesign, screenSize):
        self.pageName = pageName
        self.elemDesign = elemDesign
        self.screenSize = screenSize

    def fittsLaw(self, coord, size, initPoint): #fitts law mackenzie  
        intercept = 1
        slope = 1
        x_axisDistance = coord[0] - initPoint[0]
        y_axisDistance = coord[1] - initPoint[1]
        distance = math.hypot(x_axisDistance, y_axisDistance)
        width = size

        x = (distance / width) + 1
        movement_time = slope + intercept * math.log(x, 2)
        return movement_time, distance, width

    def klmValue(self):
        k = 0.28 #press or release keyboard button
        b = 0.10 #press or release mouse button
        bb = 0.20 #press and release mouse button
        h = 0.40 #homing (hand movement)
        p = 1.10 #pointing
        m = 1.35 #mentally preparing
        r = 4 #response time, masukkan secara manual di code js

        movement_time = 0
        initPoint = [0,0] #koordinat sebagai start dari fitts law
        for elem in self.elemDesign: #daftar elemen pada suatu halaman
            initPoint = [0,0]
            for elemData in elem: #daftar KLM pada suatu elemen
                if elemData != 'undefined':
                    elemKLM = 0 #nilai klm pada tiap tombol / div
                    klm = elem[elemData]['KLM']
                    coord = elem[elemData]['coord']['center']
                    size = elem[elemData]['coord']['size']
                    for operator in klm:
                        if operator == 'f':
                            fittsResult = self.fittsLaw(coord, size[0], initPoint)
                            elemKLM += fittsResult[0]
                            elem[elemData]['fittsData']['operator'].append(operator) #hanya untuk lihat output saja
                            elem[elemData]['fittsData']['distance'].append(fittsResult[1])
                            elem[elemData]['fittsData']['width'].append(fittsResult[2])
                            initPoint = coord
                        elif operator == 'rightScroll':
                            rightScroll_coord = [self.screenSize['outer']['width']-8.5, (self.screenSize['inner']['height']/3)/2] #titik pusat scrollbar, 8.5 adalah lebar scrollbar(17px) dibagi 2                         
                            fittsResult = self.fittsLaw(rightScroll_coord, 17, initPoint)
                            elemKLM += fittsResult[0]
                            elem[elemData]['fittsData']['operator'].append(operator)
                            elem[elemData]['fittsData']['distance'].append(fittsResult[1])
                            elem[elemData]['fittsData']['width'].append(fittsResult[2])
                            elemKLM += m
                            initPoint = rightScroll_coord
                        elif operator == 'bottomScroll':
                            bottomScroll_coord = [(self.screenSize['inner']['width']/3)/2, self.screenSize['outer']['height']-8.5]
                            fittsResult = self.fittsLaw(bottomScroll_coord, self.screenSize['inner']['width']/3, initPoint)
                            elemKLM += fittsResult[0]
                            elem[elemData]['fittsData']['operator'].append(operator)
                            elem[elemData]['fittsData']['distance'].append(fittsResult[1])
                            elem[elemData]['fittsData']['width'].append(fittsResult[2])
                            elemKLM += m
                            initPoint = bottomScroll_coord
                        else:
                            elemKLM += eval(operator)
                    elem[elemData]['time'] += elemKLM
                    movement_time += elemKLM
        return movement_time