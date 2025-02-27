document.getElementById('cashout').style.display="none";
document.getElementById('transection').style.display="none";

document.getElementById('addMoney-btn').addEventListener('click', function(event){
event.preventDefault();

const account = getValueById('account-value');
const mainBalance = getInnerTextById('main-balance');
const amount = getFloatIntValueById('amount-value');
const pin = getIntValueById('pin-number');


if (account.length === 11) {
    if (pin === 1234) {
        const sum = mainBalance + amount;
     getInnerTextValueById('main-balance', sum);

     const container = document.getElementById('transection');
     const li = document.createElement('li');
     li.innerHTML = `
     Added $${amount} from <i> ${account} </i>
     `
     li.style.color= 'green';
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
});

document.getElementById('logout').addEventListener('click', function(){
    window.location.href ="index.html"
})
document.getElementById('forgot').addEventListener('click', function(){
    alert('Server Error!! please try again later')
})