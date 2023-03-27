const addAsync = (itemOne, itemTwo) =>{
    const sum = new Promise((resolve, reject) => {
        if(typeof itemOne === 'number' && typeof itemTwo === 'number'){
            resolve(itemOne + itemTwo)
        }else{
            reject("input must be number")
        }
    })

    return sum
}

console.log(addAsync(5, 6))

// იმ ლოგიკას ვერ ჩავწვდი როგორ უნდა შემემოწმებინა თუ ორივე ნამბერია 