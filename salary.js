//INSERT FORMS CODE

function spacesToFill(){
    html = "";
    peopleAmount = document.getElementById("peopleAmount").value;

    for (var i = 0; i < peopleAmount; i++){
        html += "<label> Name " + (i+1) + "</label> <input type = 'text' id = 'inputName" + i + "'><br>" + "<label> Salary " + (i+1) + "</label> <input type = 'number' id = 'inputSalary" + i + "'></br>" ;               
    }
    html += "<button type = 'button' onclick = 'salaryGeneralMedian("+peopleAmount+")'>Calculate overall median</button>" + "<button type = 'button' onclick = 'top20SalaryMedian("+peopleAmount+")'>Calculate top 20% median</button>";

    document.getElementById("buttonAmountResult").innerHTML = html;
}



//HELPERS

function isPar(num){
    return (num % 2 === 0);   
}

function averageCalculate(listNums){
    const sumList = listNums.reduce( 
        function (accumulatedValue = 0, newElement) {
            return accumulatedValue + newElement;
        }
    );
    
    let averageResult = sumList / listNums.length;
    return averageResult;
}

function medianCalculate (listNums){

    listNums.sort((a, b) => a - b);

    const halfList = parseInt(listNums.length / 2);

    let median;

    if(isPar(listNums.length)){
         midPosition1 = listNums[halfList];
         midPosition2 = listNums[halfList - 1];
         averagePositions = (midPosition1 + midPosition2) / 2;
         median = averagePositions;
         return median;
    } else {
         median = listNums[halfList];
         return median;
    }
}



