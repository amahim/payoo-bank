document.getElementById('cashout-btn').addEventListener('click',function(event){
    event.preventDefault();
    const inputCashOut = document.getElementById('input-cashout-money').value;
    const inputCashOutNumber = parseFloat(inputCashOut);
    const inputPin = document.getElementById('input-pin-cashout').value;
    if(inputPin === '1234'){
        const currentBalance = document.getElementById('current-balance').innerText;
        const currentBalanceNumber = parseFloat(currentBalance)
        const newTotalBalance = currentBalanceNumber - inputCashOutNumber;
        console.log(newTotalBalance)
        document.getElementById('current-balance').innerText = newTotalBalance
    }else{
        alert('Input pin correctly')
    }
 })