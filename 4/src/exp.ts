const graph: Map<string, null | Map<string, number | null>> = new Map()

graph.set(
    'Beginning',
    new Map(
        [
            ['A', 6],
            ['B', 2],
        ]
    )
)

graph.set(
    'A',
    new Map(
        [
            ['End', 1],
        ]
    )
)

graph.set(
    'B',
    new Map(
        [
            ['A', 3],
            ['End', 5],
        ]
    )
)

graph.set(
    'End',
    new Map()
)

const costs: Map<string, number> = new Map([
    ['A', 6],
    ['B', 2],
    ['End', Infinity]
])

const parents: Map<string, string | null> = new Map([
    ['A', 'Beginning'],
    ['B', 'Beginning'],
    ['End', null]
])

const processed: string[] = []
// console.log(graph.get);
// console.log(costs);
// console.log(parents);












const findLowestCostNode = (nodeName: string) => {
    let min = Infinity
    let minimalNodeName = 'Init value'
    const entries = graph.get(nodeName)!.entries();

    for (const [key, value] of entries) {

        if (value! <= min) {
            min = value!
            minimalNodeName = key
        }
    }

    console.log(`With nodeName ${nodeName} as input, min is: ${min}. MinimalNodeName is: ${minimalNodeName}`);
    return minimalNodeName
}

const minimalNodeName: string = findLowestCostNode('Beginning')

const cost = costs.get(minimalNodeName)!
const neighbors = graph.get(minimalNodeName)

for (const key of neighbors?.keys()!) {
    let newCost = cost + neighbors?.get(key)!
    if (costs.get(key)! > newCost) {
        costs.set(key, newCost)
        parents.set(key, minimalNodeName)
    }
}

processed.push(minimalNodeName)
minimalNodeName = findLowestCostNode

// do {
//     let node = 
// } while (node !== null) { }