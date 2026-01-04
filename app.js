let CounterText = document.querySelector('.CounterText');
let incrementBtn = document.querySelector('.incrementBtn');
let decrementBtn = document.querySelector('.decrementBtn');
let ResetBtn = document.querySelector('.ResetBtn');
let NumberInput = document.querySelector('.INDinput');
let x = 0;
let i = 0;
NumberInput.addEventListener('input',()=>{
    let inputNumber = Number(NumberInput.value); 
    i = inputNumber;
    Updatetext();
    setTimeout(()=>{
  NumberInput.value="";
},1000)
})

const inc =()=>{
    i++;
    console.log(i);
    Updatetext();

}
const dnc = ()=>{
    i--;
        console.log(i);
        Updatetext();
}
const reset = ()=>{
    i = 0;
     console.log(i);
     Updatetext();

}

const Updatetext =()=>{
    CounterText.innerHTML = i;


}
