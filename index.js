const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(){
    return cats.push("Ralph")
}

function destructivelyPrependCat(){
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}

function destructivelyRemoveFirstCat(){
    return cats.shift()
}

function appendCat(){ 
    const newCats = [
    ...cats,
    "Broom"
    ]
    return newCats
}

function prependCat(){
    const newCat =[
    "Arnold",
    ...cats.slice()
    ]
    return newCat
}

function removeLastCat(){
    const lastCat = cats.slice(0,-1)
    return lastCat
}

function removeFirstCat(){
    const firstCat = cats.slice(1)
    return firstCat
}