
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

    const inputTable = document.getElementById('input-table')
    const tr = document.createElement('tr')
    inputTable.appendChild(tr)
    tr.className = "bg-green-500 text-white"

    // th1 serial
    const th1 = document.createElement('th')
    tr.appendChild(th1)
    serialSum++;
    th1.innerText = serialSum;

    // th2 action
    const th2 = document.createElement('th')
    tr.appendChild(th2)
    th2.innerText = 'Cash In';

    // th3 amount
    const th3 = document.createElement('th')
    tr.appendChild(th3)
    th3.innerText = inputMoneyNumber;

 })