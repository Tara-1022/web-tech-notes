exports.add = function(a, b){
    return a+b
}

exports.subtract = function(a,b){
    return a-b
}

exports.factorial = function(a){
    let f=1;
    for(let i=1; i<a; i++){
        f *= i
    }
    return f
}

// store function in a variable & export that variable (higher order ftn)