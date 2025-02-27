
document.getElementById('add-money-box').addEventListener('click', function(){
   
    handleToggle('addMoney','block');
    handleToggle('cashout','none');
    handleToggle('transection','none');

})
document.getElementById('cashout-box').addEventListener('click', function(){
    handleToggle('cashout','block');
    handleToggle('addMoney','none');
    handleToggle('transection','none');

})
document.getElementById('transaction-box').addEventListener('click', function(){
    
    handleToggle('transection','block');
    handleToggle('addMoney','none');
    handleToggle('cashout','none');

})

