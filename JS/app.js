let checkbutton = addEventListener("click",()=> {
    let ageInput = document.getElementById('ageInput');
    console.log(ageInput.value);
    if(ageInput.value>=18){
        displayResult.innerText ="Come in ,you are old enough.";
    }else if{
        displayResult.innerText ="Go away, you are too young."
    }
})
let displayResult=document.querySelector("displayResultsCol h3")