// input value to Int 

function getIntValueById(id){
 const value=  document.getElementById(id).value;
 const convertedInt = parseInt(value);
 return convertedInt;
}

// input value to floatInt
function getFloatIntValueById(id){
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

// get only value from input
function getValueById(id){
    const value = document.getElementById(id).value;
    return value;
}

// innerText to Int 
function getInnerTextById(id){
    const text= document.getElementById(id).innerText;
    const convertedMainBalance = parseFloat(text);
    return convertedMainBalance;
}
// innerText and value both 
function getInnerTextValueById(id, value){
    document.getElementById(id).innerText = value;
    
}

// toggle handle 
function handleToggle(id,status){
    document.getElementById(id).style.display = status;
}

