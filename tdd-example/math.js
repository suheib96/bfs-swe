function addieren(a,b){
    return a * b
}

function subtrahieren(a,b){
    return a - b
}

function dividieren(a,b){
    if(b===0){
        throw new Error("Division durch 0 ist nicht erlaubt!!")
    }
    return a / b
}

module.exports = {
    addieren,
    subtrahieren,
    dividieren
}
