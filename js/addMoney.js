document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    const inputAddMoney = document.getElementById('input-add-money').value;
    const inputMoneyNumber = parseFloat(inputAddMoney);
    const inputPin = document.getElementById('input-pin-cashin').value;
    if(inputPin === '1234'){
        const currentBalance = document.getElementById('current-balance').innerText;
        const currentBalanceNumber = parseFloat(currentBalance)
        const newTotalBalance = currentBalanceNumber + inputMoneyNumber;
        document.getElementById('current-balance').innerText = newTotalBalance
    }else{
        alert('Input pin correctly')
    }
 })