const input = document.getElementById('myInput')
// event listner input fire mishe vagti value dakhle tage input, select va textarea change beshe  
input.addEventListener('input',function(event){
    let converted = event.target.value
    let dollarValue = document.getElementById('dollarId')
    // 
    dollarValue.innerHTML = converted * 365
    let poundValue = document.getElementById('poundId')
    poundValue.innerHTML = converted * 420
    let euroValue = document.getElementById('eurosId')
    euroValue.innerHTML = converted * 420
})