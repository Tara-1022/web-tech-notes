// Accessing css properties in Javascript
// Access through .style.<property>
// every css property has an equivalent js style property
// hyphenated properties are camelcase eg background-image -> backgroundImage

function changeBoxStyle(){
    var style1 = "border: 1px solid coral; margin: 50px; height: 20px;";
    var style2 = "border: 3px solid maroon; margin: 50px; color: #ffffff; background-color: red; height: 20px;";
    var box = document.getElementById('box');
    console.log(box.style)
    if (box.style.height == "30px"){
        box.style = style1;
        box.innerHTML = 'I am a box';
    }
    else{
        box.style = style2;
        box.innerHTML = 'I am not a box';
    }
    
}