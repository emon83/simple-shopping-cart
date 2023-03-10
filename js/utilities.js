//define a common function
function getTextElementValueById(elementId){ 
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);

    return currentPhoneTotal;

}

//use common function
function setTextElementValueById (elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}



//define a common function
function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueById('phone__total');
    const currentCaseTotal = getTextElementValueById('case__total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub__total', currentSubTotal);

    //calculate text
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);

    setTextElementValueById('tax__amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final__total', finalAmount);
}