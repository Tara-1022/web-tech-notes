// variables: var
// let - local
function show(){
    alert("Loaded")
    let name = prompt("What's your name?", "John")
    // document.write("Hello, "+name);
    document.getElementById('name').innerText = "Hello, "+name;
}

function showOp(){
    let selected = document.getElementById('drp').value;
    let fin = '';
    document.getElementById('fruit').innerHTML = '';
    switch (selected){
        case 'Orange':
            fin = ' And 2';
            document.getElementById('fruit').innerHTML = 'FRUIT';
            break;
        case 'Apple':
            fin = ' And 4';
            document.getElementById('fruit').innerHTML = 'FRUIT';
            break;
        case 'Yourself':
            fin = ' And 9';
            document.getElementById('fruit').innerHTML = 'FRUIT';
            break;

    }
    document.getElementById('op').innerText = selected + fin;
    document.get
}
// onchange - select, combobox - occurs when the selected item changes

// pop-up dialogue box 
//  - alert()
//  - prompt(<text>, <default text>) - pop-up input box - earlier practice 
// not recommened (under browser control; creates threads that wait if user does not give input)
// used in server administration