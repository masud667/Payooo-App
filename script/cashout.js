

document.getElementById('cashout-login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const account = getValueById('account-value');
    const mainBalance = getInnerTextById('main-balance');
    const amount = getFloatIntValueById('cashout-amount-value');
    const pin = getIntValueById('cashout-pin-number');

if (account.length === 11) {
    if (pin === 1234) {
        const sum = mainBalance - amount;
     getInnerTextValueById('main-balance', sum);

     const container = document.getElementById('transection');
     const li = document.createElement('li');
     li.innerHTML = `
     Cashout $${amount} from your account 
     `
     li.style.color= 'red';
     li.style.textAlign= 'left';
     li.style.marginTop = '1rem';
     container.appendChild(li);
    }
    else{
        alert('Put valid pin number');
    }
}else{
   alert('Put Valid Number');
}
})
