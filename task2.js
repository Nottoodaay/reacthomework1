const arr = ['a','b','c','d','e','a','b']

const findSameAmount = arr.reduce((acc, curr)=>{
    acc[curr] ? (acc[curr] += 1) : (acc[curr] = 1)
    return acc
},{})

console.log(findSameAmount)