const numbers = [1,2,-3,-4,5,6,-7,-8,9]

const positive = numbers.filter((num)=> num > 0)

const sum = positive.reduce((acc,curr)=> acc+curr, 0)


console.log(sum)