

document.getElementById('cashout-login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const pin = document.getElementById('cashout-pin-number').value;
    const convertedPin = parseInt(pin);
    const amount = document.getElementById('cashout-amount-value').value;
    const convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if (convertedPin === 1234) {
        const result = convertedMainBalance - convertedAmount;
        document.getElementById('main-balance').innerText = result;

    }
    else{
       alert('Give valid pin')
    }

})
