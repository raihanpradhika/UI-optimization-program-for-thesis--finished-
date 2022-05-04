import numpy as np, random, operator, pandas as pd, matplotlib.pyplot as plt
from random import uniform, sample

class Fitness:
    def __init__(self, chromosome):
        self.chromosome = chromosome
        self.time = 0
        self.fitness= 0.0
    
    def chromosomeTime(self):
        if self.time ==0:
            combinationTime = 0
            for i in range(0, len(self.chromosome)):
                combinationTime += self.chromosome[i]['pageTime']
            self.time = combinationTime
        return self.time
    
    def chromosomeFitness(self):
        if self.fitness == 0:
            self.fitness = 1 / float(self.chromosomeTime())
        return self.fitness

def createChromosome(genes):
    chromosome = []

    for i in range(0, len(genes)):
        chromosome.append(random.sample(genes[i], 1)[0])
    return chromosome

def initialPopulation(populationSize, genes):
    population = []

    for i in range(0, populationSize):
        population.append(createChromosome(genes))
    return population

def rankChromosomes(population):
    fitnessResults = {}
    for i in range(0,len(population)):
        fitnessResults[i] = Fitness(population[i]).chromosomeFitness()
    return sorted(fitnessResults.items(), key = operator.itemgetter(1), reverse = True)

def selection(populationRank, eliteSize):
    selectionResults = []
    dataFrame = pd.DataFrame(np.array(populationRank), columns=["Index","Fitness"])
    dataFrame['cum_sum'] = dataFrame.Fitness.cumsum()
    dataFrame['cum_perc'] = 100*dataFrame.cum_sum/dataFrame.Fitness.sum()
    
    for i in range(0, eliteSize):
        selectionResults.append(populationRank[i][0])
    for i in range(0, len(populationRank) - eliteSize):
        pick = 100*random.random()
        for i in range(0, len(populationRank)):
            if pick <= dataFrame.iat[i,3]:
                selectionResults.append(populationRank[i][0])
                break
    return selectionResults

def matingPool(population, selectionResults):
    mating_pool = []
    for i in range(0, len(selectionResults)):
        index = selectionResults[i]
        mating_pool.append(population[index])
    return mating_pool

def crossover(parent1, parent2):
    child = []
    childP1 = []
    childP2 = []
    
    gene1 = int(random.random() * len(parent1))
    gene2 = int(random.random() * len(parent1))
    
    startGene = min(gene1, gene2)
    endGene = max(gene1, gene2)

    for i in range(startGene, endGene):
        childP1.append(parent1[i])

    indexedChildP1 = {}
    for j in childP1:
        indexedChildP1[j['pageIndex']] = j
    
    if len(childP1) < len(parent1):  
        for k in parent2:
            if k['pageIndex'] not in indexedChildP1.keys():
                childP2.append(k)

    child = childP1 + childP2
    return child

def populationCrossover(mating_pool, eliteSize):
    children = []
    length = len(mating_pool) - eliteSize
    pool = random.sample(mating_pool, len(mating_pool))

    for i in range(0,eliteSize):
        children.append(mating_pool[i])
    
    for i in range(0, length):
        child = crossover(pool[i], pool[len(mating_pool)-i-1])
        children.append(child)
    return children

def mutation(genes, chromosome, mutationRate):
    for switched in range(len(chromosome)):
        if(random.random() < mutationRate):
            swapWith = int(random.random() * len(chromosome))
            page = genes[switched][swapWith]
            chromosome[switched] = page
    return chromosome

def populationMutation(genes, population, mutationRate):
    mutatedPop = []
    
    for chromosome in range(0, len(population)):
        mutatedChr = mutation(genes, sorted(population[chromosome], key=lambda d: d['pageIndex']), mutationRate)
        mutatedPop.append(mutatedChr)
    return mutatedPop

def nextGeneration(genes, currentGeneration, eliteSize, mutationRate):
    popRanked = rankChromosomes(currentGeneration)
    selectionResults = selection(popRanked, eliteSize)
    matingpool = matingPool(currentGeneration, selectionResults)
    children = populationCrossover(matingpool, eliteSize)
    nextGeneration = populationMutation(genes, children, mutationRate)
    return nextGeneration

def geneticAlgorithm(genes, popSize, eliteSize, mutationRate, generations):
    population = initialPopulation(popSize, genes)
    pop = []
    for a in population:
        temp=[]
        for b in range(0, len(a)):
            temp.append(a[b]['pageName'])
        pop.append(temp)
    print(pop)

    firstRankedChromosomes = rankChromosomes(population)
    firstChromosomeData = {}
    for a in range(0, len(firstRankedChromosomes)):
        firstChromosomeData[a] = {"Time": str(1 / firstRankedChromosomes[a][1]), "Fitness": firstRankedChromosomes[a][1]}
    print(firstRankedChromosomes)
    print(firstChromosomeData)

    initialTime = str(1 / firstRankedChromosomes[0][1])
    print("Initial time: " + initialTime)
    progress = []
    progress.append(1 / firstRankedChromosomes[0][1])

    for i in range(0, generations):
        population = nextGeneration(genes, population, eliteSize, mutationRate)
        progress.append(1 / rankChromosomes(population)[0][1])
    
    finalTime = str(1 / rankChromosomes(population)[0][1])
    print("Final time: " + finalTime)
    bestChromosomeIndex = rankChromosomes(population)[0][0]
    bestChromosome = population[bestChromosomeIndex]
    print(bestChromosomeIndex)
    plt.plot(progress)
    plt.ylabel('Time')
    plt.xlabel('Generation')
    plt.show()
    return bestChromosome, finalTime