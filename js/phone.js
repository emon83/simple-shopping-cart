//define a function
function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone__number__field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    /* const newPhoneNumber = previousPhoneNumber + 1; */
    
    let newPhoneNumber;
    if (isIncrease) {
        newPhoneNumber = previousPhoneNumber + 1;
    } else {
        newPhoneNumber = previousPhoneNumber - 1;
    }

    phoneNumberField.value = newPhoneNumber;
    
    return newPhoneNumber;
}



//define a function
function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone__total');
    phoneTotalElement.innerText = phoneTotalPrice;
}




// add eventListener to the phone plus btn
document.getElementById('btn__phone__plus').addEventListener('click', function(){
    //console.log('phone plus btn click'); //check

    const newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newPhoneNumber);

    //calculate total
    calculateSubTotal();

})



//add eventListener to the phone minus btn
document.getElementById('btn__phone__minus').addEventListener('click', function(){
    //console.log('phone minus btn click'); //for check

    const newPhoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubTotal();
})