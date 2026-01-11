const balanceShow =document.querySelector('.taka_text');
const addTaka =document.querySelector('.addTaka');
const spendTaka =document.querySelector('.spendTaka');

let balance = 0;

addTaka.addEventListener('click',()=>{
    balance = balance + 10;
    updateBalance();
     balanceShow.style.color='white';
})
spendTaka.addEventListener('click',()=>{
    if(balance <= 0){
        balance = 0;
        balanceShow.style.color='red';
        balanceShow.classList.toggle('active');
    }else{
    balance = balance - 10;
    updateBalance();
    }

})
const updateBalance = ()=>{
    balanceShow.innerHTML=balance;
}

let arr = [1,2,3,4,5]