document.getElementById('cashout-menu-btn').addEventListener('click',function(){
   document.getElementById('cashout-div').classList.remove('hidden')
   document.getElementById('addcash-div').classList.add('hidden')
})
document.getElementById('addcash-menu-btn').addEventListener('click',function(){
   document.getElementById('cashout-div').classList.add('hidden')
   document.getElementById('addcash-div').classList.remove('hidden')
})