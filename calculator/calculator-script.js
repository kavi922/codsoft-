
function cleardisplay() {
    document.getElementById("display").value = ''; 
}

function displayvalue(value) {
    document.getElementById("display").value += value; 
}


function calculate() {
    try {
        let result = eval(document.getElementById("display").value); 
        document.getElementById("display").value = result; 
    } catch (error) {
        document.getElementById("display").value = 'Error'; // S
    }
}
