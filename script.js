const billInput = document.getElementById("bill_amount")
const numberOfPeople = document.getElementById("number_of_people")
const selectedValue = document.getElementById("select_val")
const displayTip = document.getElementById("display_tip")

const tipCalculate = () => {


    const tipAmout = (billInput.value * selectedValue.value) / (100 * numberOfPeople.value)
    displayTip.innerHTML = "$" + tipAmout.toFixed(2)









}