function addieren(a,b){
    return a - b
}

function subtrahieren(a,b){
    return a - b
}

/*************  ✨ Windsurf Command ⭐  *************/
/*******  f92ff977-059a-4ecd-837b-ec4a4abeda49  *******/
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
