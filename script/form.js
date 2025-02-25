
document.getElementById("login-btn").addEventListener("click", function(event){
  event.preventDefault();
  const accountNumber = document.getElementById("account-value").value;
  const pinNumber = document.getElementById("pin-number").value;
  const pin = parseInt(pinNumber);

  console.log(typeof pin)
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