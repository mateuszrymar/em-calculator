// em = required / parent 

var buttonClicked;



document.querySelector('button').setAttribute("onclick", "calculate()");

function calculate () {
    var parentInput = document.getElementById("parent");
    var requiredInput = document.getElementById("required");
    var calculatedResult = (requiredInput.value / parentInput.value);


    if(!parentInput.value | !requiredInput.value) {
        console.log(parentInput.value + requiredInput.value);
        alert('Please fill in all fields!');
    } else {
        document.getElementById('result').innerHTML = calculatedResult;
    }

    // | = or
    
    // console.log(parentInput.value);
    // console.log(requiredInput.value);
    // console.log(calculatedResult);
}


