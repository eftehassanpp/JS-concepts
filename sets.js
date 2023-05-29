const arr=[33,5,20,239,44,33,5,59,44,53]

const unique=new Set(arr)


unique.add(543)
unique.add(43)
unique.add(765)

console.log(unique.size)

for (x of unique.values()){
    console.log(x)
}
let total=0
unique.forEach(function(value){
    total+=value
})
console.log(total)
unique.delete(44)
console.log(unique.has(44))






