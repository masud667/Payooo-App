

document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    const amount = document.getElementById('amount-value').value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById('pin-number').value;
    const convertedPin = parseInt(pin);

    if (convertedPin === 1234) {
        const sum = convertedMainBalance + convertedAmount ;
        document.getElementById('main-balance').innerText = sum;
    }
    else{
       alert('Give valid pin')
    }

})
