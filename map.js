const fruitsPrice=new Map([
    ["apple",45],["banana",15],["orange",40]
])
console.log(fruitsPrice)

fruitsPrice.set("cuccumber",10)
fruitsPrice.set("mango",25)
fruitsPrice.set("pears",29)
fruitsPrice.set("lemon",5)

console.log(fruitsPrice.get("lemon"))
console.log(fruitsPrice.size)
console.log(fruitsPrice.has("apple"))
console.log(fruitsPrice.entries())

fruitsPrice.forEach(function (value,key){
    if (value<20){
        console.log(`${key} is a cheaper fruits priced at \$${value}`)
    }else{
        fruitsPrice.delete(key)
        console.log(`${key} is expnsive so it's removed from the map`)
    }
})
console.log(fruitsPrice)

const favoriteFruits=new Set(["apple","mango","banana",])

fruitsPrice.forEach((value,key)=>{
    if (favoriteFruits.has(key)){
        console.log(`hurray! i got my favorite fruit ${key} at cheaper price`)
    }
    else{
        console.log(`${key} is not my favorite fruit. so, i wont buy it`)
    }
})


