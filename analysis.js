//SALARY MEDIAN CALCULATE CODE

function createMexicoArray(amount){
    const mexico = [];

    for(var i = 0; i < amount; i ++){
        const inputNames = document.getElementById("inputName" + i).value;
        const inputSalaries = document.getElementById("inputSalary" + i).value;
        mexico.push({name: inputNames, salary: parseInt(inputSalaries)});
    }

    const onlyMexSalary = mexico.map(
        function (person){
            return person.salary;
        }
    );
    
    const ordainedMexSalaryArray = onlyMexSalary.sort(
        function(salaryA, salaryB){
            return salaryA - salaryB;
        }
    );

    return ordainedMexSalaryArray;
}


function salaryGeneralMedian(amount){
    const ordainedMexSalary = createMexicoArray(amount);

    const salaryMedian = medianCalculate(ordainedMexSalary);

    const resultMedianSalary = document.getElementById("resultMedianSalary");

    resultMedianSalary.innerText = "The overall median salary is: " + salaryMedian;
}


// TOP 20% SALARY MEXICO MEDIAN CODE

function top20SalaryMedian(amount){
    const ordainedMexSalary = createMexicoArray(amount);

    const spliceStart = parseInt((ordainedMexSalary.length * 80) / 100);
    const spliceCount = ordainedMexSalary.length - spliceStart
    const top20MexSalarySplice = ordainedMexSalary.splice(spliceStart, spliceCount);
    const top20MexMedian = medianCalculate(top20MexSalarySplice);

    const resultMedianSalary = document.getElementById("resultTop20MedianSalary");
    
    resultMedianSalary.innerText = "The median salary of the top 20% is: " + top20MexMedian;
}

