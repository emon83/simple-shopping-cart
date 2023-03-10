//define a function
function caseUpdateNumber(isIncrease) {
    const caseNumberField = document.getElementById('case__number__field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    //console.log(previousCaseNumber); //return case number

    //step-03.calculate and increases input field value
    /* const newCaseNumber = previousCaseNumber + 1; */

    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
    } else {
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}



//define a function
function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case__total');
    caseTotalElement.innerText = caseTotalPrice;
}




//step-01. add eventListener to the case plus btn
document.getElementById('btn__case__plus').addEventListener('click', function(){
    const newCaseNumber = caseUpdateNumber(true);

    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})


//step-01. add eventListener to the case minus btn
document.getElementById('btn__case__minus').addEventListener('click', function(){
    const newCaseNumber = caseUpdateNumber(false);
    //console.log(newCaseNumber); //for check

    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})