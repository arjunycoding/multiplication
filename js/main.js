function printTables(){
    let number = document.getElementById("timesTable").value;
    let tableOutput = document.getElementById("tableOutput");
    let maxNumber = document.getElementById("maxNumber").value;
    let blank = document.getElementById("blank");
    let blank2 = document.getElementById("blank2");
    tableOutput.innerHTML = "";
    for(let i = 1; i <= maxNumber; i++){
        tableOutput.innerHTML += `${number} x ${i} = ${(number * i)} </br>`;
    }

    if(number == ""){
        blank.innerHTML = "nothing writen";
        if(maxNumber == ""){
            blank2.innerHTML = "nothing writen";
        }
    } else {
        console.log("ya");
    }
}