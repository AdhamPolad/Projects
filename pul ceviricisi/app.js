const inputAmount = document.querySelector("#amount")
const firstOption = document.querySelector("#firstCurrencyOption")
const secondOption = document.querySelector("#secondCurrencyOption")
const result = document.querySelector("#result")


const Currency = new Currency()

runEvent()


function runEvent(){
    inputAmount.addEventListener("input", exchange);
}

function exchange() {
    const amount = Number(inputAmount.value.trim());
    const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;
    // finish code
    const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent
    console.log(firstOptionValue,secondOptionValue)

    Currency.exchange(amount, firstOptionValue, secondOptionValue);
}

//write simle code
//