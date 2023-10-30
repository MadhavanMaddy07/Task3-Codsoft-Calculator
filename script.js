let displayValue = document.getElementById("display");
function display(num){
    displayValue.value += num;
}
function calculate(){
    try{
        displayValue.value = eval(displayValue.value)
    }
    catch(err)
    {
        alert("invalid")
    }
}
function Clear(){
    displayValue.value = '';
}
function Del(){
    displayValue.value = displayValue.value.slice(0,-1)
}