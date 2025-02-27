
document.getElementById("login-btn").addEventListener("click", function(event){
  event.preventDefault();
  const accountNumber = getValueById('account-value');
  const pin = getIntValueById("pin-number");
 if (accountNumber.length === 11) {
    if (pin === 1234) {
        window.location.href="main.html"
    }else{
        alert('put valid pin')
    }
 }else{
    alert('Put valid number')
 }

})

document.getElementById('forgot').addEventListener('click', function(){
    alert('Server Error!! please try again later')
})